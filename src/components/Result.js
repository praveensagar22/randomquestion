import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Result = ({ score }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Quiz Result
        </Typography>
        <Typography variant="body1">Your Score: {score}</Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          style={{ marginTop: '20px' }}
        >
          Take Another Quiz
        </Button>
      </CardContent>
    </Card>
  );
};

export default Result;
