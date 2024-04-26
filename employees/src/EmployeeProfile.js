import React, { useState, useEffect } from 'react';
import { Typography, CircularProgress, Card, CardContent } from '@mui/material';

function EmployeeProfile({ id }) {
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/employees/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch employee data');
        }
        const data = await response.json();
        setEmployee(data);
        setError(null); // Clear any previous error
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEmployeeData();
  }, [id]);

  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Employee Profile
      </Typography>
      {error ? (
        <Typography color="error" align="center">
          Error: {error}
        </Typography>
      ) : !employee ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </div>
      ) : (
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5">{employee.name}</Typography>
            <Typography variant="body1" component="p">
              Position: {employee.position}
            </Typography>
            <Typography variant="body1" component="p">
              Skills: {employee.skills.join(', ')}
            </Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default EmployeeProfile;