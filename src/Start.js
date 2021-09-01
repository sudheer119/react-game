import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Start() {
    return (

        <div>
            <h1>sudheer</h1>
            <Router>
            <Link to="/TakeQuiz/1" exact>Quiz</Link>
            </Router>
        </div>
        
    )
}
export default Start;