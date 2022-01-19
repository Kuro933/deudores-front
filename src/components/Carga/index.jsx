
import { useState } from "react";
import "./index.css";
import Rango from "../Rango";

function Carga() {
  const [ws, setWs] = useState();

  function handleFileUpload(e){
    e.preventDefault();
    setWs(e.target.files[0]);
  }


  return (
    <div id="container" className="container">
      <div>
        <h1>Cargar csv de deudores</h1>
        <input
          type="file"
          className="fileUpload"
          accept=".xlsx"
          id="fileUpload"
          onChange={(e) => handleFileUpload(e)}
        />
      </div>
      <br />
    <Rango data={{excel: ws}}/>
    </div>
  );
}

export default Carga;
