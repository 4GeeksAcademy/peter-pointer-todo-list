import React, { useState } from "react";

export const Task = () => {

    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const handleTask = (event) => {
        setTask(event.target.value)
    }

    const handleList = () => {
        if (task.trim() !== "") {
            setList([...list, task]);
            setTask("");
        }
    }

    const handleDelete = (task) => {
        const deleteTask = list.filter((element) => element !== task);
        setList(deleteTask);
    }

    return (
        <div className="container">
            <form>               
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Add a new task..." onChange={handleTask} value={task}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault()
                            handleList();
                        }
                    }}
                />
                <ul className="list-group m-2">
                    {list.length > 0 ? (list.map((element, index) => (
                        <li className="list-group-item text-start d-flex justify-content-between hidden-icon" key={index}>{element}
                            <span onClick={() => handleDelete(element)}><i className="fa fa-trash text-danger"></i></span></li>
                    ))) :
                        (<li className="list-group-item">No tasks</li>)}
                    <li className="list-group-item list-group-item-secondary text-end">{list.length} Tasks</li>
                </ul>
            </form>
        </div>
    )
} 
