import React from "react";

import { Container, Back, Box } from "./styles";

function maintenance() {
  return (
    <Container>
      <Back>
        <Box>
        <h1>PACIENTES ASMÁTICOS:</h1>
        <div className={"divw"}>
          
          <br/>
        SEDAÇÃO MÍNIMA:.
        <br/>
        * (7,5 mg) - MIDAZOLAM
        <br/>
        * [20/30 min antes do procedimento]
        # (1 mg) - LORAZEPAM
        <br/>
        * [idosos - 2 horas antes do procedimento]
        </div>

        <h1>ANESTESIA LOCAL:</h1>
        <div className={"divw"}>
           <br/>
          * - LIDOCAÍNA 2% :.
           <br/>
          * [Com epinefrina 1:100.000 ou 1:200.000]
           <br/>
          * - MEPIVACAINA 2% :.
           <br/>
          Com epinefrina 1:100.0001
          <br/>
          * - ARTICAÍNA 4% :.
          <br/>
          * [Com epinefrina 1:100.000 ou 1:200.000}
          <br/>
          Obs: Pacientes com alergia aos sulfitos:
          <br/>
          * [PRILOCAÍNA 3% com felipressina 0,03 Ul/mL]
        </div>

        <h1>ANALGÉSICOS:</h1>
        <div className={"divw"}>
           <br/>
           * (500 mg) - DIPIRONA -
           <br/>
           1 comprimido de 4/4 horas.
        </div>

        <h1>ANTI-INFLAMATÓRIO:</h1>
        <div className={"divw"}>
           <br/>
           * - BETAMETASONA OU DEXAMETASONA:
           <br/>
           * (4mg) - dose única
           <br/>
           1 hora antes do procedimento
        </div>
        </Box>
      </Back>
    </Container>
  );
}

export default maintenance;
