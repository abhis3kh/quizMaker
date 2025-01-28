import './App.css';
import { useState } from 'react';
import data from './data.json';
function App() {
  const [qJsonData, setQJsonData] = useState([]);
  const handleChangeqJsonData = (e) => {
    setQJsonData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const quizData = JSON.parse(qJsonData);
    // const quizData = data;
    console.log(quizData);
  };
  return (
    <>
      <form method='post' onSubmit={handleSubmit}>
        <h1>Quiz Maker</h1>
        <div className='quizInput'>
          <textarea
            name='qJsonData'
            id='quizJsonData'
            cols='50'
            rows='10'
            value={qJsonData}
            onChange={handleChangeqJsonData}
            placeholder='Enter Quiz Data in JSON Format'
          ></textarea>
          <br />
          <br />
          <button id='createQuiz' type='submit'>
            Create Quiz
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
