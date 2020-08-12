import React, { useState }  from "react";
import "bootstrap";

function App() {

  const [state, setState] = useState(null);

  let seleccionadonaranja = "";
  let seleccionadorojo ="";
   let seleccionadoverde = "";
  if( state==="red" ){
    seleccionadorojo = "picky";;
  }else if( state==="orange" ){
    seleccionadonaranja = "picky";
  }else if( state ==="green" ){
    seleccionadoverde = "picky";
  }
 
   

  return (
    <>
      <div className="top">
        <div className="row">
          <div className="semaforo">
            <div
              className={"red " + seleccionadorojo}
              onClick={() => {
                setState("red");
              }}
            ></div>
            <div
              className={"orange " + seleccionadonaranja}
              onClick={() => {
                setState("orange");
              }}
            ></div>
            <div
              className={"green " + seleccionadoverde}
              onClick={() => {
                setState("green");
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
  
}

export default App;
