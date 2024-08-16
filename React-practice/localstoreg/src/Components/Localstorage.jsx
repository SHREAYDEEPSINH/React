import React, { useEffect, useState } from "react";

let nextId = 0;

function Localstorage() {
    const [task, setTask] = useState("");
    const [items, setItems] = useState(()=> (JSON.parse(localStorage.getItem("task"))) || []);
    const [editingId, setEditingId] = useState(null); // Define editingId state variable

    
    
    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(items))
    }, [items])




    // useEffect(() => {
    //     const storedItem = JSON.parse(localStorage.getItem("task"))
    //     console.log(storedItem)

    //     if (storedItem) {
    //         setItems(storedItem)
    //     }
    // }, [])
    //   Add task

    function handleTaskAdd() {
        setItems([...items, { id: nextId++, task: task }]);
        setTask(""); // Clear input after adding task
    }

    const itemData = items.map((item) => (
        <div
            key={item.id}
            className="row justify-content-between align-items-center my-4 text-bg-secondary p-2"
        >
            <h2 className="col-8 col-md-9 text-capitalize">{item.task}</h2>
            <div className="col-4 col-md-3 text-end">
                <button
                    className="btn btn-success mx-1"
                    onClick={() => handleTaskEdit(item.id)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-danger mx-1"
                    onClick={() => handleTaskDelete(item.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    ));

    //   Delete task

    function handleTaskDelete(id) {
        console.log("delete");
        setItems(items.filter((e) => e.id !== id));
        console.log(id);
    }

    //   Edit Task

    function handleTaskEdit(id) {
        const editedTask = items.find((item) => item.id === id);
        setTask(editedTask.task); // Set the task to be edited in the input field
        setEditingId(id); // Set the ID of the task being edited
    }

    //   Update task

    function handleTaskUpdate() {
        setItems(
            items.map((item) => {
                if (item.id === editingId) {
                    return { ...item, task: task }; // Update the task content
                }
                return item;
            })
        );
        setTask(""); // Clear input after updating task
        setEditingId(null); // Reset editing ID
    }


    return (
        <div className="container text-bg-dark my-4 border border-5 border-danger-subtle rounded-5 p-4">
            <h1 className="text-center">Todo List</h1>
            <div className="row text-center mb-4">
                <div className="col">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                        disabled={editingId !== null}
                    >
                        <input
                            type="text"
                            className="form-control mb-2 mb-md-0"
                            placeholder="Enter a task here"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                        <button
                            className="btn btn-info mx-1"
                            onClick={editingId !== null ? handleTaskUpdate : handleTaskAdd}
                        >
                            {editingId !== null ? "Update" : "Add"}
                        </button>

                        <input class="form-check-input mt-0 text-white" type="checkbox" value="" aria-label="Checkbox for following text input"></input>
                        <label htmlFor="">Select All</label>

                        <button type="button" class="btn btn-primary">Clear</button>
                    </form>
                </div>
            </div>
            <div className="row p-5 border border-5 border-warning-subtle ">
                {itemData}
            </div>
        </div>
    );
}

export default Localstorage;