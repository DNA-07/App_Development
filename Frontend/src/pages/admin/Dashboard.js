// src/pages/admin/Dashboard.js

import React from 'react';
import Sidebar from '../../components/Sidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <h1>DOTMART Admin Dashboard
        </h1>
        <p>Welcome to the admin dashboard. Use the sidebar to navigate through different management sections.</p>
      </div>
    </div>
  );
};

export default Dashboard;