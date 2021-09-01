import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";
import * as data from "./check.json";
import Make from './Quiz.js';
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function App() {
  
  return (
   <>
    <Router>
        <Link to="/TakeQuiz/1" exact>Quiz</Link>
    <Switch>
    <Route path='/TakeQuiz/:id' component={Make}></Route>
     </Switch>
     </Router>
     </>
  );
}

export default App;
