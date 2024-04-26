
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import IdInputForm from './IdInputForm';
import EmployeeProfile from './EmployeeProfile';

function App() {
  const [id, setId] = useState(null);

  const handleIdSubmit = (id) => {
    setId(id);
  };

  return (
    <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '2rem 0' }}>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          Employee Dashboard
        </Typography>
        <IdInputForm onSubmit={handleIdSubmit} />
        {id && <EmployeeProfile id={id} />}
      </Container>
    </div>
  );
}

export default App;
