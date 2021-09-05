import React from 'react';
import Make from './Quiz.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./App.css";

function Start() {
    return (
        <>
        <h1 className="c">Instructions</h1>
        <div className="center">
              <h1>THERE WILL BE TOTAL 4 QUESTIONS</h1>
              <h1>For each wrong attempt -5 marks will be reduced</h1>
              <h2>ffor each correct attempt 10 marks</h2>
              <h2>To submit your first check you answer then submit if not it will not submit</h2>
              <h1>All the best</h1>


        </div>
            <Link to="/TakeQuiz/1" exact className="ce">Start Quiz</Link>
        </>
        
    )
}
export default Start;