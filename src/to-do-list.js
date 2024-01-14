import React, {useState} from "react"

function ToDoList() {

const[items, setItems] = useState([])

function handleAddItems(){
    const newItems = document.getElementById("itemInput").value;
    document.getElementById("itemInput").value = "";

    setItems(i => [...i, newItems]);
}

function handleRemoveItems(index) {
    setItems(items.filter((_, i) => i !== index));
}

    return (
       <>
       <div className="container">
            <div className = "cardFrame">
            <h1>To Do List</h1>
            <ul className = "unorderedList">
                    {items.map((item, index) => <li key={index} onClick={()=>handleRemoveItems(index)}>{item}</li>)}
            </ul>
            <input
            type="text"
            id = "itemInput"
            placeholder="Enter Item"
            />
            <br></br>

            <button className = "button" onClick={handleAddItems}>
                Add
            </button>
            </div>
       </div>
       </>
    )
}

export default ToDoList