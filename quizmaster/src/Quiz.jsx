import React, { useState, useEffect } from 'react';
import blankImage from './img/blank.jpg';
import './index.css';

const Quiz = () => {
  const [question, setQuestion] = useState('');
  const [answerOptions, setAnswerOptions] = useState([]);
  const [answer, setAnswer] = useState('');
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [nextDisabled, setNextDisabled] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    fetchQuestion();
  }, []); 

  const fetchQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=1&type=multiple')
      .then(response => response.json())
      .then(data => {
        const formattedQuestion = decodeHTMLEntities(data.results[0].question);
        setQuestion(formattedQuestion);
        setAnswer(data.results[0].correct_answer);
        const options = shuffle([
          ...data.results[0].incorrect_answers,
          data.results[0].correct_answer
        ]);
        setAnswerOptions(options);
        setUserInput('');
        setFeedback('');
        setNextDisabled(true);
        setShowAnswer(false);
      })
      .catch(error => console.error('Error fetching question:', error));
  };

  const decodeHTMLEntities = (text) => {
    const entities = {
      '&quot;': '"',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&apos;': '\'',
      '&#039;': '\'',
      '&ldquo;': '"',
      '&rdquo;': '"',
      '&ouml;': 'ö',
      '&Ouml;': 'Ö',
      '&auml;': 'ä',
      '&Auml;': 'Ä',
      '&uuml;': 'ü',
      '&Uuml;': 'Ü',
      '&szlig;': 'ß',
      '&eacute;': 'é',
      '&micro;': 'µ',
      '&rsquo;': '’',
      '&deg;': '°'
    };
    return text.replace(/&quot;|&amp;|&lt;|&gt;|&apos;|&#039;|&ldquo;|&rdquo;|&ouml;|&Ouml;|&auml;|&Auml;|&uuml;|&Uuml;|&szlig;|&eacute;|&micro;|&rsquo;|&deg;/g, (match) => entities[match]);
  };

  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === userInput.trim().toLowerCase()) {
      setFeedback('Right');
      setTimeout(() => {
        fetchQuestion();
      }, 3000);
    } else {
      setFeedback('Wrong');
      setNextDisabled(false);
    }
  };

  const handleNextClick = () => {
    fetchQuestion();
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="quiz-container" style={{backgroundImage: `url(${blankImage})`}}>
      <div className="question">{question}</div>
      <div className="answer-options">
        {answerOptions.map((option, index) => (
          <div key={index} className="answer-option">{option}</div>
        ))}
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Your Answer..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <div className="feedback-container">
          {feedback && (
            <div className={`feedback ${feedback === 'Right' ? 'feedback-right' : 'feedback-wrong'}`}>
              {feedback}
            </div>
          )}
        </div>
        <div className="button-container">
          <button className="submit-button" type="submit">Submit</button>
          <button className="next-button" type="button" onClick={handleNextClick} disabled={nextDisabled}>Next</button>
        </div>
      </form>
      <button className="show-answer-button" onClick={handleShowAnswer}>Show Answer</button>
      {showAnswer && (
        <div className="answer">{answer}</div>
      )}
    </div>
  );
};

export default Quiz;
