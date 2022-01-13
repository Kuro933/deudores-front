import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
import { Button } from "react-bootstrap";
import * as XLSX from "xlsx";
import { useState } from "react";
import "./index.css";

function Carga() {
  const [ws, setWs] = useState();
  const [url_rango, setUrlRango] = useState("");
  const handleFileUpload = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (evt.target) {
          /* Parse data */
          const bstr = evt.target.result;
          const wb = XLSX.read(bstr, { type: "binary" });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          let ws_ = wb.Sheets[wsname];

          let firstRow_ = [];
          // Selecciona primera fila de cada Columna a modo de 'Titulo'

          let rowName = "";
          for (let z in ws_) {
            rowName = z.toString();

            if (rowName.length > 2 && rowName[0] !== "!") {
              break;
            } else if (rowName[1] === "1") {
              firstRow_.push({
                label: ws_[z].v,
                value: "::" + ws_[z].v + "::",
              });
            }
          }
          setWs(ws_);
          setUrlRango("/apps/deudores/rango");
        }
      };
      reader.readAsBinaryString(file);
    }
  };

  const eso = (e) => {
    console.log(ws);
  };

  return (
    <div id="container" className="container">
      <div>
        <h1>Cargar csv de deudores</h1>
        <input
          type="file"
          className="fileUpload"
          accept=".csv, .xls, .xlsx, .ods"
          id="fileUpload"
          onChange={(e) => handleFileUpload(e)}
        />
      </div>
      <br />
      <div id="links" className="links mb-5 mt-5">
        <Link to="/apps/deudores">
          <Button id="volver"  className="btn btn-danger mt-3 btn-sm me-3">
            Volver
          </Button>
        </Link>
        <Link to={url_rango}>
          <Button
            id="siguiente"
            className="siguiente btn btn-primary mt-3 btn-sm"
            disabled={!ws}
            onClick={(e) => eso(e)}
          >
            Siguiente paso
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Carga;
