// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
import { useState } from "react";
import "./index.css";
import Confirmar from "../Confirmar";

function Rango(props) {
  const [valueMin, setValueMin] = useState("");
  const [valueMax, setValueMax] = useState("");
    
    const handleMinRange = (e) => {
      e.preventDefault();
      confirm(e.target.value,"valoruno");
    };
    
    const handleMaxRange = (e) => {
      e.preventDefault();
      confirm(e.target.value, "valordos");
    };
    
    const confirm = (num, valor) => {
      
      if (valor === "valoruno") {
        if (num !== 0 || num !== "") {
          setValueMin(num);
        } else {
          setValueMin("");
        }
      } else {
        if (num !== 0 || num !== "") {
          setValueMax(num);
        } else {
          setValueMax("");
        }
      }
    };
    
    return (
      <div id="container" className="container">
      <h1>Rango??</h1>
      <div id="rangos" className="mt-5 mb-5">
        <input
          type="number"
          className="minimo"
          id="minimo"
          placeholder="Valor Minimo de deuda"
          onChange={(e) => handleMinRange(e)}
        />
        <input
          type="number"
          className="maximo"
          id="maximo"
          placeholder="Valor Maximo de deuda"
          onChange={(e) => handleMaxRange(e)}
        />
      </div>
        <Confirmar state={{min:valueMin, max:valueMax, dataExcel:props.data.excel}}></Confirmar>
    </div>
  );
}

export default Rango;
