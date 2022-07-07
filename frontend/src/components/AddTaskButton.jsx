import React from 'react'
import {useNavigate} from 'react-router-dom'

export const AddTaskButton = () => {

    const navigate= useNavigate()
    return (        
            <div>
                <button className="btn btn-primary" onClick={()=>navigate('/addtask')}>Add Task</button>
            </div>
        
    )
}
