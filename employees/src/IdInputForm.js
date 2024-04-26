import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function IdInputForm({ onSubmit }) {
  const [id, setId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default IdInputForm;