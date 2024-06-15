// src/App.js
import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './index.css'; // Make sure to import Tailwind CSS

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (index, newTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? newTask : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
