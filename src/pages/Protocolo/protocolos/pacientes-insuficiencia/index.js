import React from "react";

import { Container, Back, Box } from "./styles";

function maintenance() {
  return (
    <Container>
      <Back>
        <Box>
        <h1>PACIENTES COM INSUFICIÊNCIA RENAL CRÔNICA.</h1>
        <div className={"divw"}>
          
          <br/>
          * SEDAÇÃO MÍNIMA:
          <br/>
          (7,5) mg - MIDAZOLAM
        </div>

        <h1>ANTISSEPSIA INTRABUCAL E EXTRABUCAL:</h1>
        <div className={"divw"}>
           <br/>
           • - Solução de digluconato de clorexidina
           <br/>
           * (0,12% e 0,2%) respectivamente.
        </div>

        <h1>ANESTESIA LOCAL:</h1>
        <div className={"divw"}>
           <br/>
          * - LIDOCAINA 2 % com epinefrina:
           <br/>
          * (1:100 000) ou (1:200.000)
           <br/>
          ~ máximo de 2 tubetes por sessão].
          <br/>
          * - PRILOCAÍNA 3% com felipressina:.
          <br/>
          * Exceto em pacientes com anemia)
        </div>

        <h1>ANALGESICOS:</h1>
        <div className={"divw"}>
           <br/>
          * (500mg) - PARACETAMOL -
           <br/>
          [1 comprimido de 6/6 hrs].
        </div>

        <h1>ANTI-INFLAMATÓRIO:</h1>
        <div className={"divw"}>
           <br/>
          A -DEXAMETASONA OU BETAMETASONA-
          <br/>
          * [Dose única ou por tempo restrito]
        </div>

        <h1>ANTIBIÓTICOS:</h1>
        <div className={"divw"}>
           <br/>
          * (300 mg) - Clindamicina:
           <br/>
          [1 comprimido de 8/8 horas por 7 dias].
          <br/>
          * (500 mg) - Azitromicina:
          <br/>
          1 comprimido ao dia por 3 dias .x
        </div>

        <h1>OBSERVAÇÃO:</h1>
        <div className={"divw"}>
           <br/>
           * Obs:.Dar preferência a antibiótico de excreção hepática.
        </div>
        </Box>
      </Back>
    </Container>
  );
}

export default maintenance;
