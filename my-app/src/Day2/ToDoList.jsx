import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // State to hold the list of todos
  const [inputValue, setInputValue] = useState(''); // State to hold the user input

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update the input value state
  };
  const handleDelete=(todo,index)=>{
   alert("Wake upto reality!");
   const newList=[...todos]
  };

  // Function to add a new todo item
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]); // Add the new todo item to the todos array
      setInputValue(''); // Clear the input field after adding the todo
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {/* Input field for adding new todo */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Display the list of todos */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}
          <button onClick={()=>handleDelete(todo,index)}> 
           Delete</button></li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
