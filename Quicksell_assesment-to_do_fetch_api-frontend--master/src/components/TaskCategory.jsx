// TaskCategory.js
import React from 'react';
import TaskCard from './TaskCard';

const TaskCategory = ({ groupKey, tasks, users, grouping }) => {
  const getUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user.name : 'Unknown';
  };

  const categoryTitle = () => {
    if (grouping === 'user') {
      return getUser(groupKey);
    } else {
      return groupKey;
    }
  };

  return (
    <div className="task-category">
      <h2>{categoryTitle()}</h2>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} users={users} />
      ))}
    </div>
  );
};

export default TaskCategory;
