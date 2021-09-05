import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useDrop } from "react-dnd";
import Player from "./components/Player";
import  {sentence} from "./check.json";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import "./App.css";

function Make(props){
    //Getting data from json fiile
      var [woright,setworight]=useState();
      var [showM,setshowM]=useState();
      let [Tmarks,setTmarks]=useState(0);
      let [cmark,setcmark]=useState(0);
      let [nega,setnega]=useState(0);

                let [k,setk]=useState(-1);
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
   

//
  // Incerementing the id and assigning to the url to move to next questopn

  var a={key :props.match.params.id};
      var opr ="/TakeQuiz/"+a.key;
const [op2, setop2] = useState("/TakeQuiz/"+a.key);
//

//Splitting the given sentence into words and assignning to a variablelist

    const jumblelist = jumbler[parseInt(a.key)-1].key.split(" ");
    const correctlist = correcter[parseInt(a.key)-1].key.split(" ");
//

//Creating a use state wwhich help dynamically render the content onto the screen
    const [players, setPlayer] = useState([]);
    const [team, setTeam] = useState([]);


//

  //If the players tab is empty it will push the data into the players stack 
    if(players.length==0 && team.length==0){
    for(var i=0;i<jumblelist.length;i++){
      players.push({name: jumblelist[i]});
    }
  }
              
//


  // It is uded to check weather the use form a coreect sentence or not

   function checker(e) {
     setop2(opr);
     setworight("");
     var c=0,b=0;
     if (team.length==correctlist.length){
       b=1;
       for(var i=0;i<team.length;i++){
         if (team[i].name!=correctlist[i]){
           c=1;
           break;
         }
       }
       
     }
     
             
    if (b==1 && c==0){
      setworight("CORRECT");
      setshowM("+10 marks");
      if (k!=a.key){
        setTmarks(Tmarks+10);
        setcmark(cmark+1);
        setk(a.key);
      }
      setop2("/TakeQuiz/"+(parseInt(a.key)+1).toString());
      
    }
    else {
      setworight("INCORRECT");
      setshowM("-5 marks");
      setTmarks(Tmarks-5);
      setnega(nega+1);
    }
    console.log(Tmarks,cmark,nega);

      document.getElementById("popup-1").classList.toggle("active");
  }


//
// It is used to make  both stack empty to reolad the new question after submit

  function emptylist(e){
    players.length=0;
      team.length=0;
  }


//

// It is used to change the stack contianer style based onn the words giben in json
  function changer(){
    if (jumblelist.length%2==0){
      return (((jumblelist.length+1)*10)+10).toString();
    }
    else {
      return ((jumblelist.length*10)+10).toString();
    }
  }


  //


  //It is uesd in drag and drop functionality
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


    //
    if (parseInt(a.key)==jumbler.length){
        return (
          <>
        <div className="center">
            <h1>The End</h1>
            <p>Total marks : {Tmarks} </p>
            <p>correct answers : {cmark} </p>
            <p>wrong answers : {nega} </p>
        </div>
        <Link to="/">GO HOME</Link>
        </>
    )
      }
      else{
    return (
      <Container maxW="800px">
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
              minH={changer}
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
              p="4"
              minH={changer}
              boxShadow="xl"
              borderRadius="md"
              
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
        <Link to={opr} onClick={checker} className="ce">check</Link><br></br>
       <Link to={op2} onClick={emptylist} className="tp">submit</Link><br></br>
       {/* <Link to="/END">End Test</Link> */}
        <div class="popup" id="popup-1">
  <div class="overlay"></div>
  <div class="content">
    <div class="close-btn" onClick={checker}>×</div>
    <h1>{woright}</h1>
    <p>{showM}</p>
  </div>
</div>


      </Container>
    );
    }
  }
  
  export default Make;
   