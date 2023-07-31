import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Card, CardBody, Col, Container, Row} from 'reactstrap'
import Icon from './Components/Icon';
import {ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const itemArray = new Array(9).fill("empty")


function App() {

  const [winMessage,setWinMessage] = useState("")
  const [isCross,setIsCross] = useState(false);

  const reloadGame =()=>{
    setIsCross(false)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  }

  const checkIsWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMessage("Game Draw");
    } else if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} Wins`);
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} Wins`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} Wins`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} Wins`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} Wins`);
    }
  };

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage , { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("Already_Filled", { type: "error" });
    }

    checkIsWinner();
  };
  
  return (
    <>
      <Container fluid className=" bg-dark p-5">
        <ToastContainer position="top-right"/>
        <Row>
          <Col md={6} className="offset-md-3">
            <h1 className="text-center text-light bg-primary">TIC-TAC-TOE Game</h1>
            <br/>
            <div className="grid">
              {itemArray.map((item,index)=>(
                <Card key={index} onClick={()=>changeItem(index)}>
                  <CardBody className="box">
                    <Icon name={item}/>
                  </CardBody>
                </Card>
              ))}
            </div>
            <br/>
            {winMessage ?(
              <h1 className="bg-light">{winMessage}</h1>
            ): <h1 className="bg-light">{isCross ? "X" : "O"} Turns</h1>}
            <br/>
            <Button color="success" block onClick={reloadGame} >Reload The Game</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
