import React from 'react';
import TaskCategory from './TaskCategory';

const TaskBoard = ({ taskData, users, grouping, ordering }) => {
  const groupBy = (tickets, key) => {
    return tickets.reduce((result, ticket) => {
      const groupKey = key === 'user' ? ticket.userId : ticket[key];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(ticket);
      return result;
    }, {});
  };

  // Group the tasks based on the selected grouping option
  const groupedTasks = groupBy(taskData, grouping);

  // Sort function based on ordering (priority or title)
  const sortTasks = (tasks) => {
    return tasks.sort((a, b) => {
      if (ordering === 'priority') {
        return b.priority - a.priority;  // Descending order for priority
      } else {
        return a.title.localeCompare(b.title);  // Ascending order for title
      }
    });
  };

  return (
    <div className="task-board">
      {Object.keys(groupedTasks).map((groupKey) => (
        <TaskCategory
          key={groupKey}
          groupKey={groupKey}
          tasks={sortTasks(groupedTasks[groupKey])}
          users={users}
          grouping={grouping}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
