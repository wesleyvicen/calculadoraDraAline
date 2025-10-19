import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import logo from '../../images/logo.png';

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
  document.title = 'Porcentagens - Utilitários Dra. Aline Oliveira';
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
    <Container maxWidth="sm" sx={{ bgcolor: '#fff', minHeight: '100vh', py: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img src={logo} width="180" height="60" alt="Calculadora de Taxas" style={{ objectFit: 'contain' }} />
      </Box>
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <form>
          <Box sx={{ mb: 2 }}>
            <Typography fontWeight={600} mb={1}>Valor do Procedimento:</Typography>
            <input type="number" required autoFocus={true} onChange={(e) => setValorCompra(e.target.value)} placeholder="R$ 0,00" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography fontWeight={600} mb={1}>Descontos</Typography>
            <input type="number" required onChange={(e) => setValorEntrada(e.target.value)} placeholder="R$ 0,00" style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography fontWeight={600} mb={1}>Procedimentos</Typography>
            <select name="select" onChange={(e) => setProcedimento(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc' }}>
              <option value={"0"}>Material (DENTISTA)</option>
              <option value={"1"}>Material (CONSULTÓRIO)</option>
            </select>
          </Box>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <button type="button" onClick={handleCalcular} style={{ background: '#310204', color: '#fff', fontWeight: 700, border: 'none', borderRadius: 6, padding: '10px 32px', fontSize: '1.1rem', cursor: 'pointer' }}>Salvar</button>
          </Box>
        </form>
      </Paper>
      <Paper elevation={2} sx={{ p: 2, mb: 3, borderRadius: 3 }}>
        <Typography fontWeight={600} mb={2}>Valor para o Dentista</Typography>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: 8, background: '#f5f5f5', color: '#310204' }}>VALOR PARA O DENTISTA</th>
            </tr>
          </thead>
          <tbody>
            {parcelas.map((item) => (
              <tr key={item.parcela.toString()}>
                <td style={{ padding: 8 }}>{item.valorPagarDentista}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
      {historico.length > 0 && (
        <Paper elevation={1} sx={{ p: 2, borderRadius: 3, mb: 2 }}>
          <Typography variant="h6" color="success.main" fontWeight={700} textAlign="center" mb={2}>
            Soma dos Valores a Pagar a Dentista: R$ {valorTotal}
          </Typography>
          <Typography variant="h6" textAlign="center" mb={2}>Histórico de Cálculos</Typography>
          {historico.map((calculo, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ padding: 6, background: '#f5f5f5', color: '#310204' }}>VALOR DO PROCEDIMENTO</th>
                    <th style={{ padding: 6, background: '#f5f5f5', color: '#310204' }}>DESCONTO</th>
                    <th style={{ padding: 6, background: '#f5f5f5', color: '#310204' }}>VALOR PARA O DENTISTA</th>
                    <th style={{ padding: 6, background: '#f5f5f5', color: '#310204' }}>PROCEDIMENTO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: 6 }}>{calculo.valorCompra}</td>
                    <td style={{ padding: 6 }}>{calculo.valorEntrada}</td>
                    <td style={{ padding: 6 }}>{calculo.valorPagarDentista}</td>
                    <td style={{ padding: 6 }}>{calculo.procedimento}</td>
                  </tr>
                </tbody>
              </table>
            </Box>
          ))}
        </Paper>
      )}
    </Container>
  );
}
