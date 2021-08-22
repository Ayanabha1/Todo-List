import React from "react";
import Todo from "./Todo";

export default function todos(props) {
  let myStyle = {
    minHeight : "50vh"
  }
  return (
    <div className="container" style = {myStyle}>
      <h3 className="my-5">Todo List</h3>

      {props.todos.length === 0 ? (
        <p>No todos to show</p>
      ) : (
        props.todos.map((i) => {
          return (
            <>
            <Todo todo={i} key={i.slno} onDelete={props.onDelete} /><hr/>;
            </>
          )
          //   Map is a higerorder function in js which returns array ... It's like a for loop
        })
      )}
    </div>
  );
}
