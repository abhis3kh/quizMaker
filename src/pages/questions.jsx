import React from 'react';
import { useLocation } from 'react-router-dom';

function Questions() {
  const location = useLocation();
  const { quizData } = location.state || {};

  return (
    <div>
      <h1>Questions</h1>
      <pre>{JSON.stringify(quizData, null, 2)}</pre>
    </div>
  );
}

export default Questions;
