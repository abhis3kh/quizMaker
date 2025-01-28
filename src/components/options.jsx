import React from 'react';

const options = (questions, optionsList) => {
  return (
    <div className='question'>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question}</p>
          {optionsList.map((option, index) => (
            <input key={index} type='radio' name='questions' value={option} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default options;
