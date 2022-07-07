import React, { useEffect, useState } from 'react'
import TaskService from '../services/TaskService'
import {useNavigate, useParams} from 'react-router-dom'

const AddTaskComponentHook = () => {

    const navigate= useNavigate()
    const [name, setName] = useState('')
    const [status, setStatus] = useState('')
    const [date, setDate] = useState('')
    const{id} = useParams();

    const addOrUpdateTask= (e)=>{
    e.preventDefault();
    const task={name,status,date}
    if(id){
        TaskService.updateTask(id,task).then((response)=>{
            console.log(response.data)
            navigate('/tasklists')

        }).catch(error=>{
            console.log(error)
        })
    }
    else{

        TaskService.addTask(task).then((response)=>{

            console.log(response.data)
            navigate('/tasklists')           
            
        }).catch(error=>{
            console.log(error);
        })        
    }
}

useEffect(() => {

    TaskService.getTaskByID(id).then((response=>{
        console.log(id)
        setName(response.data.name)
        setStatus(response.data.status)
        setDate(response.data.date)})).catch(error=>{
            console.log(error)
        })
   
}, [])

const title=()=>{
    if(id){
       return <h2 className="text-center">Update Task</h2>
    }
    else{
        return <h2 className="text-center">Add Task</h2>
    }
}

    return (        
        <div>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <form>
                            <div className="form-group mb-2">
                                <label className="form-lable">Task Name:</label>
                                <input type="text"
                                placeholder="Enter Task name"
                                name="name"
                                className="form-control"
                                value={name}
                                onChange= {(e)=>setName(e.target.value)} >                                    
                                </input>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-lable">Status:</label>
                                <select className="form-control" placeholder="Enter Status" name="status" className="form-control" value={status} onChange= {(e)=>setStatus(e.target.value)}>
                                    <option>Not Started</option>
                                    <option>Completed</option>
                                    <option>In Progress</option>  
                                </select>
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-lable">Date:</label>
                                <input type="date"
                                placeholder="Enter date YYYY-MM-DD"
                                name="name"
                                className="form-control"
                                value={date}
                                onChange= {(e)=>setDate(e.target.value)} >                                    
                                </input>
                            </div>
                            <button className = "btn btn-success" onClick={(e)=>addOrUpdateTask(e)}>Submit Task</button>
                            <button className="btn btn-danger" onClick={()=>navigate('/tasklists')}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTaskComponentHook
