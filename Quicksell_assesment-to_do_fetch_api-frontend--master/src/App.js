import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskBoard from './components/TaskBoard';
import './App.css';

const App = () => {
  const [taskData, setTaskData] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status');  // Default grouping by status
  const [ordering, setOrdering] = useState('priority');  // Default sorting by priority
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTaskData(response.data.tickets);
        setUsers(response.data.users);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch task data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <h1>Kanban Board</h1>

      {/* Display dropdowns for Grouping and Ordering */}
      <div className="controls">
        <label>
          Group by:
          <select onChange={handleGroupingChange} value={grouping}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </label>

        <label>
          Sort by:
          <select onChange={handleOrderingChange} value={ordering}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </label>
      </div>

      <TaskBoard taskData={taskData} users={users} grouping={grouping} ordering={ordering} />
    </div>
  );
};

export default App;
