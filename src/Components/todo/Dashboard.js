import React, { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import axios from 'axios';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from mock API
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => setTasks(response.data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={{ title: task.title, description: 'Task details', id: task.id }}
            onDelete={handleDelete}
            onEdit={() => alert('Edit feature coming soon!')}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
