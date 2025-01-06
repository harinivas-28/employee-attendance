import React, { useState } from 'react';

const AttendanceForm = ({ onMarkAttendance }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onMarkAttendance({ employeeId, status });
    setEmployeeId('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Mark Attendance</h1>
      <label>
        Employee ID:
        <input
          type="text"
          value={employeeId}
          onChange={(e) => setEmployeeId(e.target.value)}
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Select</option>
          <option value="Present">Present</option>
          <option value="Late">Late</option>
          <option value="Absent">Absent</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AttendanceForm;
