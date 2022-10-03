import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import Container from "./Components/Container";
import Header from "./Components/Header";
import InputTask from "./Components/InputTask";
import TaskContent from "./Components/TaskContent";

function App() {
  // pasar las tareas a localstorage
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [initialTasks, tasks]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const currentTask = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTask);
  };

  return (
    <Container>
      <Header />
      <InputTask createTask={createTask} />
      <TaskContent tasks={tasks} deleteTask={deleteTask} />
    </Container>
  );
}

export default App;
