import Taskform from "./Components/Taskform";
import TaskList from "./Components/TaskList";
import Progresstracker from "./Components/Progresstracker";
import { useEffect, useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });
  const addTask = (task) => {
    setTasks([...task,task]);
  }
  return(
    <div>
      <h1>Taskify</h1>
      <p>Our friendly TaskManager</p>
      <Taskform addTask = {addTask} />
      <TaskList/>
      <Progresstracker/>
      <button>Clear All Tasks</button>
    </div>
  )
}

