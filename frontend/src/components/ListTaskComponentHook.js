import React,{useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import TaskService from '../services/TaskService'

const ListTaskComponentHook = () => {

    const navigate= useNavigate()
    const [noncompletetasks, setNoncompletetasks] = useState([])
    const [completedtask, setCompletedtask] = useState([])

useEffect(() => {
        getCompletedTaskList(); 
        getNonCompletedTaskList(); 
    }, [])

const getCompletedTaskList=()=>{
    TaskService.getCompletedTasks().then((response)=>{
        setCompletedtask(response.data)
        console.log(response.data)
        completedtask.map(ctask=>{
            
            console.log(ctask.data.status)
        })

        
    }).catch(error=>{
        console.log(error);
    })
}

const getNonCompletedTaskList=()=>{
    TaskService.getNonCompletedTasks().then((response)=>{
        setNoncompletetasks(response.data)
        console.log(response.data)
        noncompletetasks.map(nctask=>{
            
            console.log(nctask.data.status)
        })

        
    }).catch(error=>{
        console.log(error);
    })
}

const deleteTask=(taskId)=>{
    TaskService.deleteTask(taskId).then((response)=>{

        getCompletedTaskList()
        getNonCompletedTaskList()

    }).catch(error=>{
            console.log(error)
        })
}

const inprocessDisplay=()=>{
    if(noncompletetasks.length===0){
       return (
       <div>            
            <h2 className="text-center">No active tasks available.Please add new task</h2>
        </div>)
    }
    else{
        return(
            <div>
        <h2 className="text-center">In Process Task List</h2>
        <table className = "table table-bordered table-striped">
                <thead>
                    <th>
                        <div className="row">                         
                            <div className="col-sm-2"><h4>Task ID</h4></div>                           
                            <div className="col-sm-2"><h4>Task Name</h4></div>
                            <div className="col-sm-2"><h4>Task Status</h4></div>
                            <div className="col-sm-2"><h4>Modified On</h4></div>
                            <div className="col-sm-2"><h4>Action</h4></div>
                        </div> 
                    </th>
                </thead>
                <tbody>
                    {
                        noncompletetasks.map(
                            task=>                      
                            <tr key={task.id}>                                
                                <td>
                                    <div className="row"> 
                                        <div className="col-sm-2">{task.id}</div>                                       
                                        <div className="col-sm-2">{task.name}</div>
                                        <div className="col-sm-2">{task.status}</div>
                                        <div className="col-sm-2">{task.date}</div>
                                        <div className="col-sm-1"><button className="btn btn-info" onClick={()=>navigate('/edittask/'+(task.id))}>Update</button></div>
                                        <div className="col-sm-1"><button className="btn btn-danger" onClick={()=>deleteTask(task.id)} style={{marginLeft:"2px"}}>Delete</button></div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        )
        
    }
}

    return (
        <div className="container"> 
            <button className="btn btn-primary" onClick={()=>navigate('/addtask')}>Add Task</button>
            {inprocessDisplay()}
        
               
            <h2 className="text-center">Completed Task List</h2>            
            <table className = "table table-bordered table-striped">
                <thead>
                    <th>
                        <div className="row">                         
                            <div className="col-sm-3"><h4>Task ID</h4></div>                           
                            <div className="col-sm-3"><h4>Task Name</h4></div>
                            <div className="col-sm-3"><h4>Task Status</h4></div>
                            <div className="col-sm-3"><h4>Modified On</h4></div>                            
                        </div> 
                    </th>
                </thead>
                <tbody>
                    {
                        completedtask.map(
                            task=>                                             
                                                        
                            <tr key={task.id}>                                
                                <td>
                                    <div className="row"> 
                                        <div className="col-sm-3">{task.id}</div>                                       
                                        <div className="col-sm-3">{task.name}</div>
                                        <div className="col-sm-3">{task.status}</div>
                                        <div className="col-sm-3">{task.date}</div>                                        
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>         
        </div>
    )
}

export default ListTaskComponentHook
