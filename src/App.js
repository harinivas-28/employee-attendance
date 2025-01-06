import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import AttendanceForm from './components/AttendanceForm';

const App = () => {
  const [attendanceSummary, setAttendanceSummary] = useState({
    present: 0,
    late: 0,
    absent: 0,
  });

  const [employees, setEmployees] = useState([
    { id: 1, name: 'NGIT Faculty-1', status: 'Present' },
    { id: 2, name: 'KMEC Faculty-1', status: 'Absent' },
  ]);

  const markAttendance = ({ employeeId, status }) => {
    const updatedEmployees = employees.map((employee) =>
      employee.id.toString() === employeeId
        ? { ...employee, status }
        : employee
    );

    setEmployees(updatedEmployees);

    const summary = updatedEmployees.reduce(
      (acc, emp) => {
        acc[emp.status.toLowerCase()] += 1;
        return acc;
      },
      { present: 0, late: 0, absent: 0 }
    );

    setAttendanceSummary(summary);
  };

  return (
    <div>
      <Dashboard attendanceSummary={attendanceSummary} />
      <EmployeeList employees={employees} />
      <AttendanceForm onMarkAttendance={markAttendance} />
    </div>
  );
};

export default App;
