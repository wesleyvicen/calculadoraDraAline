import React, { useState, useEffect } from "react";
import { Container } from "./styles";

export default function App() {
  const [valorCompra, setValorCompra] = useState(0);
  const [valorEntrada, setValorEntrada] = useState(0);
  const [parcelas, setParcelas] = useState([]);
  const [procedimento, setProcedimento] = useState("0");
  const [historico, setHistorico] = useState([]);
  const procedimentoOptions = ["Material (DENTISTA)", "Material (CONSULTÓRIO)"];
  const [valorPagarDentista, setValorPagarDentista] = useState(0);

  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    document.title = 'Porcentagens - Calculadora';
    function calcularParcelas() {
      if (!valorCompra) {
        setParcelas([]);
        return;
      }
      if (isNaN(valorEntrada)) {
        setValorEntrada(0);
      }
      let taxa;
      if (procedimento === "0") {
        taxa = [40];
      } else if (procedimento === "1") {
        taxa = [60];
      }

      const parcelas = taxa.map((item, index) => {
        const valor = valorCompra - valorEntrada;
        const totalFinal = (100 * valor) / (100 - item);
        const percentual = (item * totalFinal) / 100;
        const valueReturn = valor + percentual;

        const valorPagarDentista = valor - (valor * item) / 100;
        setValorPagarDentista(valorPagarDentista);

        return {
          parcela: index + 1,
          valorTotal: valueReturn.toLocaleString("pt-BR", {
            currency: "BRL",
            currencyDisplay: "symbol",
            style: "currency",
          }),
          percentual: percentual,
          valorPagarDentista: valorPagarDentista.toLocaleString("pt-BR", {
            currency: "BRL",
            currencyDisplay: "symbol",
            style: "currency",
          }),
        };
      });

      setParcelas(parcelas);
    }

    calcularParcelas();

    if (historico.length > 0) {
      const somaValores = historico.reduce((total, calculo) => total + calculo.valorPagarDentista, 0);
      setValorTotal(somaValores);
    } else {
      setValorTotal(0);
    }
  }, [valorCompra, valorEntrada, procedimento, historico]);

  const handleCalcular = () => {
    
    const novoCalculo = {
      valorCompra: valorCompra,
      valorEntrada: valorEntrada,
      procedimento: procedimentoOptions[procedimento],
      parcelas: parcelas,
      valorPagarDentista: valorPagarDentista,
    };
    setHistorico([...historico, novoCalculo]);
   
  };

  return (
    <>
      <Container>
        <div className={"logo"}>
          <img src={require("../../images/logo.png")} width="250" height="87" alt={"Calculadora de Taxas"} />
        </div>
        <div className={"boxImage"}>
          <form>
            <div className="group">
              <label>Valor do Procedimento:</label>
              <input type="number" required autoFocus={true} onChange={(e) => setValorCompra(e.target.value)} placeholder={"R$ 0,00"} />
            </div>

            <div className="group">
              <label>Descontos</label>
              <input type="number" required onChange={(e) => setValorEntrada(e.target.value)} placeholder={"R$ 0,00"} />
            </div>
            <div className="group">
              <label>Procedimentos</label>
              <select name="select" onChange={(e) => setProcedimento(e.target.value)}>
                <option value={"0"}>Material (DENTISTA)</option>
                <option value={"1"}>Material (CONSULTÓRIO)</option>
              </select>
            </div>
            <div className="divw">
            <a className={"whatsapp"}onClick={handleCalcular}>
                Salvar
              </a>
            </div>
          </form>
        </div>
        <div className={"boxTable"}>
          <table>
            <thead>
              <tr>
                <th>VALOR PARA O DENTISTA</th>
              </tr>
            </thead>
            <tbody>
              {parcelas.map((item) => (
                <tr key={item.parcela.toString()}>
                  <td>{item.valorPagarDentista}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {historico.length > 0 && (
          <div className={"historico"}>
            <h3 style={{ textAlign: "center" ,color: "green"}}>Soma dos Valores a Pagar a Dentista: {valorTotal}</h3>
            <h2 style={{ textAlign: "center" }}>Histórico de Cálculos</h2>
            {historico.map((calculo, index) => (
              <div key={index} className="calculo">
                <table>
                  <thead>
                    <tr>
                      <th>VALOR DO PROCEDIMENTO</th>
                      <th>DESCONTO</th>
                      <th>VALOR PARA O DENTISTA</th>
                      <th>PROCEDIMENTO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{calculo.valorCompra}</td>
                      <td>{calculo.valorEntrada}</td>
                      <td>{calculo.valorPagarDentista}</td>
                      <td>{calculo.procedimento}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        )}


      </Container>
    </>
  );
}
