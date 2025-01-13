import React from 'react';

const TaskCard = ({ task, onEdit, onDelete }) => (
  <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
    <h4>{task.title}</h4>
    <p>{task.description}</p>
    <button onClick={() => onEdit(task)}>Edit</button>
    <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px' }}>Delete</button>
  </div>
);

export default TaskCard;
