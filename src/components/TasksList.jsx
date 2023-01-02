import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

const TasksList = () => {

 const { data: tasks, isError, isLoading, error } = useGetTasksQuery();
 const [deleteTask] = useDeleteTaskMutation();
 const [updateTask] = useUpdateTaskMutation();

if (isLoading) return <div>Loading...</div>;
else if(isError) return <div>Error: {error.message}</div>;

//  console.log(tasks);


  return (
    <>
      <h1>
        <u>Task List</u>
      </h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
           {" "}
            <input
              type="checkbox"
              id={task.id}
              checked={task.completed}
              onChange={(event) =>
                updateTask({
                  ...task,
                  completed: event.target.checked,
                })
              }
            />
            <label htmlFor={task.id}>completed</label>
            <div>
              <hr />
            </div>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}

export default TasksList