import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";
import  {sentence} from "./check.json";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function Make(props){
    var opr ="";
    
     var jumbler = sentence.map(function(item) {
      return {
        key: item.jumble,
      };  
    }); 
    var correcter = sentence.map(function(item) {
      return {
        key: item.correct,
      };  
    }); 
  var a={key :props.match.params.id};
  var op2="/TakeQuiz/"+(parseInt(a.key)+1).toString();
  
    const jumblelist = jumbler[a.key].key.split(" ");
    const correctlist = jumbler[a.key].key.split(" ");
    const [players, setPlayer] = useState([]);
    const [team, setTeam] = useState([]);

    if(players.length==0 && team.length==0){
    for(var i=0;i<jumblelist.length;i++){
      players.push({name: jumblelist[i]});
    }
  }
   const isnext = true;
   if (correctlist.length==team.length){
     var temp234=0;
     for(var i=0;i<correctlist.length;i++){
       if (correctlist[i]!=team[i].key){
         temp234=1;
         break;
       }
       if (temp234==0){
         isnext=false;
       }
     }
   }

   console.log(isnext,temp234,opr,op2);
    const [{ isOver }, addToTeamRef] = useDrop({
      accept: "player",
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });
  
    console.log(isOver);
    const [{ isOver: isPlayerOver }, removeFromTeamRef] = useDrop({
      accept: "team",
      collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });
  
    const movePlayerToTeam = (item) => {
      console.log(item);
      setPlayer((prev) => prev.filter((_, i) => item.index !== i));
      setTeam((prev) => [...prev, item]);
    };
    const removePlayerFromTeam = (item) => {
      setTeam((prev) => prev.filter((_, i) => item.index !== i));
      setPlayer((prev) => [...prev, item]);
    };
    return (
      <Container maxW="800px">
        <Heading p="2" align="center" color="GrayText">
          {props.match.params.id}
        </Heading>
        <Heading p="2" align="center" color="GrayText">
          React Drag and Drop
        </Heading>
  
        <Flex justify="space-between" height="90vh" align="center">
          <Stack width="300px">
            <Heading fontSize="3xl" color="yellow.800" textAlign="center">

              <p>words</p>
            
            </Heading>
            <List
              bgGradient={
                isPlayerOver
                  ? "linear(to-b, yellow.300, yellow.500)"
                  : "linear(to-b, yellow.100, yellow.200)"
              }
              ref={removeFromTeamRef}
              p="4"
              minH="70vh"
              boxShadow="xl"
              borderRadius="md"
            >
              {players.map((p, i) => (
                <Player
                  item={p}
                  key={i}
                  playerType="player"
                  onDropPlayer={movePlayerToTeam}
                  index={i}
                />
              ))}
            </List>
          </Stack>
          <Stack width="300px">
            <Heading fontSize="3xl" color="teal.800" textAlign="center">
              Form a paragraph
            </Heading>
            <List
              bgGradient={
                isOver
                  ? "linear(to-b, teal.300, teal.500)"
                  : "linear(to-b, teal.100, teal.200)"
              }
              ref={addToTeamRef}
              minH="70vh"
              boxShadow="xl"
              borderRadius="md"
              p="4"
            >
              {team.map((p, i) => (
                <Player
                  item={p}
                  key={i}
                  index={i}
                  playerType="team"
                  onDropPlayer={removePlayerFromTeam}
                />
              ))}
            </List>
          </Stack>
        </Flex>
         <Router>
           {
             isnext 
               ? <Link to = {opr+op2} >submit</Link>
               : <Link to = {opr} >submit</Link>
           }
       </Router>

      </Container>
    );
  }
  
  export default Make;
  