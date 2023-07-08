import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Card, CardContent, FormControlLabel, Radio, RadioGroup, Typography } from '@material-ui/core';

const Quiz = ({ onQuizFinish }) => {
  const history = useHistory();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/questions/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (Array.isArray(data.payload)) {
          const shuffledQuestions = shuffleArray(data.payload);
          setQuestions(shuffledQuestions);
        }
      })
      .catch(error => console.log(error));
  }, []);

  const shuffleArray = (array) => {
    // Fisher-Yates algorithm for shuffling the array
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleAnswerClick = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex === questions.length - 1) {
      onQuizFinish(score);
      history.push('/result');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (questions.length === 0) {
    // Render a loading state or return null
    return <div>Loading...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Question {currentQuestionIndex + 1}
        </Typography>
        <Typography variant="body1">{currentQuestion.question_text}</Typography>

        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={currentQuestion.selectedOption}
          onChange={(event) => handleAnswerClick(event.target.value)}
        >
          {currentQuestion.options.map((option) => (
            <FormControlLabel
              key={option}
              value={option}
              control={<Radio color="primary" />}
              label={option}
            />
          ))}
        </RadioGroup>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNextQuestion}
          style={{ marginTop: '1rem' }}
        >
          Next
        </Button>
      </CardContent>
    </Card>
  );
};

export default Quiz;
