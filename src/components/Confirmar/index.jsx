import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import React from "react";
import * as XLSX from "xlsx";
import Leer from '../../filtroExcel';



//meter aca lo del confirmar envio y que le de jdsalhdas
const handleFileUpload = (dataFile, min, max) => {
    if (dataFile) {
      const file = dataFile;
      const reader = new FileReader();
      reader.onload = async (evt) => {
        if (evt.target) {
          /* Parse data */
          const bstr = evt.target.result;
          var resp = await Leer(bstr, min, max);
          const plar = XLSX.read(resp.respo.resp,{type:'array'})
          XLSX.writeFile(plar, 'out.xlsx');
        //   setWsBlob(bstr);
        }
      };
      reader.readAsBinaryString(file);
    }
  };



export default function Confirmar(props) {
  console.log("confir", [props.state.min, props.state.max, props.state.dataExcel]);
  let siguiente = false;
  if ((props.state.min !== "" && props.state.max !== "")) {
    siguiente = true;
  } else {
    siguiente = false;
  }

  return (
    <div id="container">
      <div id="links" className="links mb-5 mt-5">
        <Link to="/apps/deudores">
          <Button id="volver" className="btn btn-danger mt-3 btn-sm me-3">
            Volver
          </Button>
        </Link>
        <Button
          id="siguiente"
          className="siguiente btn btn-primary mt-3 btn-sm"
          disabled = {!siguiente}
          onClick={(e) => handleFileUpload(props.state.dataExcel, props.state.min, props.state.max)}
        >
          Siguiente paso
        </Button>
      </div>{" "}
    </div>
  );
}
