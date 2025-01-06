import React from 'react';

const Dashboard = ({ attendanceSummary }) => {
  return (
    <div>
      <h1>Attendance Dashboard</h1>
      <p>Present: {attendanceSummary.present}</p>
      <p>Late: {attendanceSummary.late}</p>
      <p>Absent: {attendanceSummary.absent}</p>
    </div>
  );
};

export default Dashboard;
