import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import React, { useState } from "react"
import "./index.css"

function Hello() {
    const [valueMin, setValueMin] = useState(0); 
    const [valueMax, setValueMax] = useState(0); 
    const [url_confirmar, setUrlConfirmar] = useState("");
    const [siguiente, setSiguiente] = useState(false);

    const handleRange = (e) => {
        console.log("minimo: ", valueMin);
        console.log("maximo: ", valueMax);
    }

    const handleMinRange = (e) => {
        console.log("dsklljkhasdjsahdks",e.target.value);
        setValueMin(e.target.value);
        confirmar();
    }

    const handleMaxRange = (e) => {
        setValueMax(e.target.value);
        confirmar();
    }

    const confirmar = () => {
        let valor1 = false;
        let valor2 = false;
        if(valueMin != 0 || valueMin != ""){
            valor1 = true;
            console.log("esta el valor uno");
        }else{
            valor1 = false;
            console.log("no esta valor uno");
        }

        if(valueMax != 0){
            valor2 = true;
            console.log("Valor 2 esta");
        }else{
            valor2 = false;
            console.log("no esta valor 2");
        }

        if(valor1 && valor2){
            setSiguiente(true);
        }else{
            setSiguiente(false);
        }
    }

  return (
    <div id="container" className="container">
      <h1>Rango??</h1>
      <div id="rangos" className="mt-5 mb-5">
        <input
          type="text"
          className="minimo"
          id="minimo"
          placeholder="Valor Minimo de deuda"
          onChange={(e) => handleMinRange(e)}
        />
        <input
          type="text"
          className="maximo"
          id="maximo"
          placeholder="Valor Maximo de deuda"
          onChange={(e) => handleMaxRange(e)}
        />
      </div>
      <div id="links" className="links mb-5 mt-5">
        <Link to="/apps/deudores">
          <Button id="volver"  className="btn btn-danger mt-3 btn-sm me-3">
            Volver
          </Button>
        </Link>
        <Link to={url_confirmar}>
          <Button
            id="siguiente"
            className="siguiente btn btn-primary mt-3 btn-sm"
            disabled={!siguiente}
            onClick={(e) => handleRange(e)}
          >
            Siguiente paso
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hello;
