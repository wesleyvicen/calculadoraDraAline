import React from "react";

import { Container, Back, Box } from "./styles";
import { Link } from "react-router-dom";

function maintenance() {
  return (
    <Container>
      <Back>
        <Box>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/calculadora"}>
            <em className="fa fa-search-plus"></em> PACIENTES CARDIOPATAS - COMPENSADOS
          </Link>
        </div>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/calculadora"}>
            <em className="fa fa-search-plus"></em> PACIENTES DIABÉTICOS - COMPENSADOS
          </Link>
        </div>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/asmaticos"}>
            <em className="fa fa-search-plus"></em> PACIENTES ASMÁTICOS
          </Link>
        </div>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/pacientesInsuficiencia"}>
            <em className="fa fa-search-plus"></em> PACIENTES COM INSUFICIÊNCIA RENAL CRÔNICA (NEFROPATAS)
          </Link>
        </div>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/calculadora"}>
            <em className="fa fa-search-plus"></em> PACIENTES HIPERTENSOS
          </Link>
        </div>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/calculadora"}>
            <em className="fa fa-search-plus"></em> GESTANTES (LACTANTES)
          </Link>
        </div>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/calculadora"}>
            <em className="fa fa-search-plus"></em> HEMORRAGIAS
          </Link>
        </div>
        <div className={"divw"}>
          <Link className={"whatsapp"} to={"/calculadora"}>
            <em className="fa fa-search-plus"></em> PERICORONARITE
          </Link>
        </div>
        </Box>
      </Back>
    </Container>
  );
}

export default maintenance;
