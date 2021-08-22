import "./App.css";
import Header from "./MyComponents/header";
import Footer from "./MyComponents/footer";
import Todos from "./MyComponents/Todos";
import About from "./MyComponents/About";
import Todo from "./MyComponents/Todo";
import { AddTodos } from "./MyComponents/AddTodos";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;

  if (localStorage.getItem("todo_lists") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo_lists"));
  }

  const onDelete = (i) => {
    setTodos(
      todo_lists.filter((e) => {
        return e !== i;
      })
    );
    localStorage.setItem("todo_lists", JSON.stringify(todo_lists));
  };

  const addTodos = (sl, title) => {
    const aux = {
      slno: sl,
      title: title,
    };
    setTodos([...todo_lists, aux]);
  };
  const [todo_lists, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo_lists", JSON.stringify(todo_lists));
  }, [todo_lists]);

  return (
    <>
      <Router>
        <Header title="My Todos List" condition={true} />

        <Switch>
          <Route exact path="/">
            <AddTodos addTodos={addTodos} />
            <Todos todos={todo_lists} onDelete={onDelete} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
