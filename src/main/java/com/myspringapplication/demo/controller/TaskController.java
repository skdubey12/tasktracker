package com.myspringapplication.demo.controller;

import com.myspringapplication.demo.model.Task;
import com.myspringapplication.demo.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1")
public class TaskController {

    @Autowired
    private TaskRepository taskRepository;
    private String displayStatus="Completed";


    @GetMapping("/getAllTasks")
    public List<Task> getAllTask(){
        return taskRepository.findAll();
    }

    @PostMapping("/addTask")
    public Task addTask(@RequestBody Task task){
        return taskRepository.save(task);
    }

    @PutMapping("/updateTask/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable long id,@RequestBody Task taskDetails ){
        Task updatedTask= taskRepository.findById(id).orElseThrow(()->new RuntimeException("Task not exist"+id));
        updatedTask.setName(taskDetails.getName());
        updatedTask.setStatus(taskDetails.getStatus());
        updatedTask.setDate(taskDetails.getDate());
        taskRepository.save(updatedTask);
        return ResponseEntity.ok(updatedTask);
    }
    @GetMapping("/getTask/{id}")
    public ResponseEntity<Task> getTaskbyId(@PathVariable long id){

        Task task= taskRepository.findById(id).orElseThrow(()->new RuntimeException("Task not exist"+id));
        return ResponseEntity.ok(task);
    }

    @GetMapping("/getTaskByCompletedStatus")
    public List<Task> getTaskByCompletedStatus(){
         return taskRepository.findByStatus(displayStatus);
    }

    @GetMapping("/getTaskByNonCompletedStatus")
    public List<Task> getTaskByByNonCompletedStatus(){
        return taskRepository.findByStatusNot(displayStatus);
    }

    @DeleteMapping("/deleteTask/{id}")
    public ResponseEntity<HttpStatus> deleteTask(@PathVariable long id){
        Task task= taskRepository.findById(id).orElseThrow(()->new RuntimeException("Task not exist"+id));
        taskRepository.delete(task);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }

}
