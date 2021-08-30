import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";
import * as data from "./check.json";
import Make from './Quiz.js';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function App() {
  
  return (
    <Router>
       <Link to="/TakeQuiz/1">Start Quiz</Link>
    <Switch>
    <Route exact path='/TakeQuiz/:id' component={Make}></Route>
     </Switch>
     </Router>
  );
}

export default App;
