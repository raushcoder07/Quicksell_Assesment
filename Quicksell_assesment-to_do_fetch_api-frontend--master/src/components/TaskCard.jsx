import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, users }) => {
  if (!task) {
    return <div className="task-card">Task not found</div>;
  }

  const getUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user : { name: 'Unknown', initials: 'U' };
  };

  const user = getUser(task.userId);

  const getInitials = (name) => {
    const names = name.split(' ');
    return names.map((n) => n[0]).join('');
  };

  const getAvatarColor = (name) => {
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8'];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="task-card">
      <div className="task-card-content">
        <p><strong>ID:</strong> {task.id}</p>
        <p><strong>Title:</strong> {task.title}</p>
        <p><strong>Status:</strong> {task.status}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
      </div>
      <div
        className="user-avatar"
        style={{ backgroundColor: getAvatarColor(user.name) }}
      >
        {getInitials(user.name)}
      </div>
    </div>
  );
};

export default TaskCard;
