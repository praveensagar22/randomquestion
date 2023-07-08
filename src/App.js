import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';

function App() {
  const [score, setScore] = useState(0);

  const handleQuizFinish = (finalScore) => {
    setScore(finalScore);
  };

  return (
      <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Optional: Set a height to center vertically
  }}>
        <Router>
      <Switch>cd
        <Route exact path="/" component={Home} />
        <Route path="/quiz">
          <Quiz onQuizFinish={handleQuizFinish} />
        </Route>
        <Route path="/result">
          <Result score={score} />
        </Route>
      </Switch>
    </Router>
      </div>



  );
}

export default App;
