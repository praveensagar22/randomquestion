import React from 'react';
import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Home = () => {
  return (

    <Card >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Welcome to the Quiz App
        </Typography>
        <Typography variant="body1">
          Click the button below to start the exam.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/quiz"
          style={{ marginTop: '20px' }}
        >
          Start Exam
        </Button>
      </CardContent>
    </Card>

  );
};

export default Home;
