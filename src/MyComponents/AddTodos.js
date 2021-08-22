import React from "react";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const AddTodos = (props) => {
  const [sl, setSl] = useState(0);
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !sl) {
      alert("Title or slno cannot be blank");
    } 
    else {
      props.addTodos(sl, title);
      setSl(0);
      setTitle("");
    }
  };
  return (
    <>
      <form onSubmit={submit}>
        <div className="container my-5">
          <h3>Add a Todo</h3>
          <div className="mb-3">
            <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">
              Serial number{" "}
              <input
                type="number"
                className="htmlForm-control"
                id="examplehtmlFormControlInput1"
                placeholder="Enter sl.no"
                value={sl}
                onChange={(e) => {
                  setSl(e.target.value);
                }}
                />
            </label>
            
          </div>
          <div className="mb-3">
            <label htmlFor="examplehtmlFormControlTextarea1" className="htmlForm-label">
              Todo
              <textarea
                className="htmlForm-control"
                id="examplehtmlFormControlTextarea1"
                rows="1"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              ></textarea>
            </label>
              <button type="submit" class="btn btn-success btn-sm my-3 mx-5">
                Add
              </button>
          </div>
        </div>
      </form>
    </>
  );
};
