import React from 'react';
import Make from './Quiz.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Start() {
    return (

        <div>
            
            <Link to="/TakeQuiz/1" exact>Start Quiz</Link>

        </div>
        
    )
}
export default Start;