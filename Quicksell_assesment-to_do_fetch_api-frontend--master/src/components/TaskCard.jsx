import React, { useState } from "react";
import "./TaskCard.css";

const TaskCard = ({ task, users, count }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!task) {
    return <div className="task-card">Task not found</div>;
  }

  const getUser = (userId) => {
    const user = users.find((u) => u.id === userId);
    return user ? user : { name: "Unknown", initials: "U" };
  };

  const user = getUser(task.userId);

  const getInitials = (name) => {
    const names = name.split(" ");
    return names.map((n) => n[0]).join("");
  };

  const getAvatarColor = (name) => {
    const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8"];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="task-card">
      <div className="task-card-content">
        <p>
          <strong>{task.id}</strong>
        </p>
        <p>
          <strong style={{ color: "#333" }}>{task.title}</strong> {/* Display title */}
          {count !== undefined && ` (${count})`} {/* Display count if provided */}
        </p>
        {showDetails && (
          <>
            <p>
              <strong>Status:</strong> {task.status}
            </p>
            <p>
              <strong>Priority:</strong> {task.priority}
            </p>
            <p>
              <strong>Assigned to:</strong> {user.name}
            </p>
          </>
        )}
        <div onClick={toggleDetails} className="task-card-toggle">
          {showDetails ? "Less" : "... Feature Request"}
        </div>
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
