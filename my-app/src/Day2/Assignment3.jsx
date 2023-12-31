import React, { useState } from "react";

const Assignment3 = () => {
  const [textvalue, settext] = useState([]);
  const [todo, settodo] = useState("");

  function click() {
    settext([...textvalue, { text: todo, completed: false }]);
    settodo("");
  }

  function del(index) {
    const newtextvalue = [...textvalue];
    newtextvalue.splice(index, 1);
    settext(newtextvalue);
  }

  function change(index) {
    const newtextvalue = [...textvalue];
    newtextvalue[index].completed = !newtextvalue[index].completed;
    settext(newtextvalue);
  }

  return (
    <div>
      To-do list:
      <input
        type="text"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />
      <button onClick={click}>Add</button>
      <ul>
        {textvalue.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => change(index)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                marginLeft: "5px",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => del(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignment3;