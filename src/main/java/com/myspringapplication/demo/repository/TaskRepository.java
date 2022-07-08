package com.myspringapplication.demo.repository;
import com.myspringapplication.demo.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task,Long> {

     List<Task> findByStatus(String status);
     List<Task> findByStatusNot(String status);

}
