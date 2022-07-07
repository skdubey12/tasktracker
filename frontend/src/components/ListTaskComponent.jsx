import React, { Component } from 'react'
import TaskService from '../services/TaskService'


export default class ListTaskComponent extends Component {

    constructor(props) {
                
        super(props)
        this.state = {

            tasks:[]

        }
        
    }
    
        componentDidMount(){
        TaskService.getTasks().then((res)=>
        {this.setState({tasks:res.data})
    });
    }

       
    render() {
        return (
            <div>
                <h2 className = "text-center"> Task List </h2>                
                <div className= "row">                    
                    <table className = "table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th> Task Name </th>   
                                <th> Status </th> 
                                <th> Date </th>
                                <th> Action </th>                         
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task=> 
                                    <tr key={task.id}>
                                        <td>{task.name}</td>
                                        <td>{task.status}</td>
                                        <td>{task.date}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>                
            </div>
        )
    }
}
