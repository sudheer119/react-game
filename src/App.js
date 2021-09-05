import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";
import * as data from "./check.json";
import Make from './Quiz.js';
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Start from "./Start.js";
function App() {
  
  return (
   <>
    {/* <Router>
        <Link to="/TakeQuiz/1" exact>Quiz</Link>
    <Switch>
    <Route path='/TakeQuiz/:id' component={Make}></Route>
     </Switch>
     </Router> */}
     <Router>
    <Switch>
      <Route path="/" component={Home} exact></Route>
    <Route path='/Start' component={Start}></Route>
    <Route path='/TakeQuiz/:id' component={Make}></Route>
     </Switch>
     </Router>
     </>
  );
  function Home()
  {
    return(
       <Link to="/Start" exact className="centered">Learn Sentence formation</Link>
    )
  }
}

export default App;
