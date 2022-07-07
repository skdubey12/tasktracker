import axios from 'axios'

const TASK_LIST_API_GET_ALLTASK_URL = "http://localhost:8080/api/v1/getAllTasks"
const TASK_LIST_API_ADD_TASK_URL = "http://localhost:8080/api/v1/addTask"
const TASK_LIST_API_GET_TASK_URL = "http://localhost:8080/api/v1/getTask"
const TASK_LIST_API_UPDATE_TASK_URL = "http://localhost:8080/api/v1/updateTask"
const TASK_LIST_API_DELETE_TASK_URL = "http://localhost:8080/api/v1/deleteTask"
const TASK_LIST_API_COMPLETED_TASK_URL = "http://localhost:8080/api/v1/getTaskByCompletedStatus"
const TASK_LIST_API_NON_COMPLETED_TASK_URL = "http://localhost:8080/api/v1/getTaskByNonCompletedStatus"

class TaskService {

    getTasks(){
        return axios.get(TASK_LIST_API_GET_ALLTASK_URL);
    }    

    addTask(task){
        return axios.post(TASK_LIST_API_ADD_TASK_URL,task);
    }  
    
    getTaskByID(taskId){
        return axios.get(TASK_LIST_API_GET_TASK_URL+'/'+ taskId);
    } 
    updateTask(taskId,task){
        return axios.put(TASK_LIST_API_UPDATE_TASK_URL+'/'+taskId,task);
    } 

    deleteTask(taskId){
        return axios.delete(TASK_LIST_API_DELETE_TASK_URL+'/'+taskId);
    } 

    getCompletedTasks(){
        return axios.get(TASK_LIST_API_COMPLETED_TASK_URL);
    } 

    getNonCompletedTasks(){
        return axios.get(TASK_LIST_API_NON_COMPLETED_TASK_URL);
    } 



}

export default new TaskService()