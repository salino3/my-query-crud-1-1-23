import React from 'react';
import { useCreateTaskMutation } from "../api/apiSlice.js";

export const TaskForm = () => {

  const [createTask] =  useCreateTaskMutation();

    function handleSubmit(event) {
        event.preventDefault();

        const name = event.target.name.value.trim();
        const description = event.target.description.value.trim();
        const completed = event.target.completed.checked;

        createTask({
          name,
          description,
          completed,
        });
        // console.log({name, description, completed})
        document.getElementById("myForm").reset();
    };
    
  return (
    <>
      <h1>
        <u>Task Form</u>
      </h1>
      <form onSubmit={handleSubmit} id="myForm">
        <input type={"text"} name="name" placeholder="Name Task?" />{" "}
        <input
          type={"text"}
          name="description"
          placeholder="Description Task?"
        />{" "}
        <br /> <br />
        <label htmlFor="mycheckbox">It's already Completed?</label>{" "}
        <input type={"checkbox"} name="completed" id="mycheckbox" />{" "}
        <button>Add Task</button>
      </form>
    </>
  );
}
