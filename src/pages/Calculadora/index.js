import React, { useState, useEffect } from "react";
import { Container } from "./styles";

export default function App() {
    const [valorCompra, setValorCompra] = useState(0);
    const [valorEntrada, setValorEntrada] = useState(0);
    const [parcelas, setParcelas] = useState([]);
    const [taxaDebito, setTaxaDebito] = useState(2);
    const [debitoTotal, setDebitoTotal] = useState(0);
    const [cartao, setCartao] = useState("0");

    useEffect(() => {
        const taxa = {
            master: [3.69,5.99,6.29,7.15,7.99,8.79,9.59,10.39,11.19,11.99,12.79,13.49],
            visa: [3.69,5.99,6.29,7.15,7.99,8.79,9.59,10.39,11.19,11.99,12.79,13.49],
            hiper: [4.88,7.38,7.68,8.54,9.38,10.18,10.98,11.78,12.58,13.38,14.18,14.88],
            elo: [4.88,7.38,7.68,8.54,9.38,10.18,10.98,11.78,12.58,13.38,14.18,14.88],
        };
        function handleChangeInput() {
            if (!valorCompra) {
                setParcelas([]);
                return;
            }
            if (isNaN(valorEntrada)) {
                setValorEntrada(0);
            }
            if (cartao === "0" || cartao === "1") {
                const parcelas = taxa.master.map((item, index) => {
                    const valor = valorCompra - valorEntrada;
                    const totalFinal = (100 * valor) / (100 - item)
                    const percentual = (item * totalFinal) / 100;
                    const valueReturn = valor + percentual;
                    const valorParcelas = (totalFinal) / (index + 1);

                    return {
                        parcela: index + 1,
                        valorTotal: valueReturn.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                        percentual: percentual,
                        valorParcelas: valorParcelas.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                        totalFinal: totalFinal.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                    };
                });
                setParcelas(parcelas);
            }
            if (cartao === "2") {
                const parcelas = taxa.hiper.map((item, index) => {
                    const valor = valorCompra - valorEntrada;
                    const totalFinal = (100 * valor) / (100 - item)
                    const percentual = (item * totalFinal) / 100;
                    const valueReturn = valor + percentual;
                    const valorParcelas = (totalFinal) / (index + 1);

                    return {
                        parcela: index + 1,
                        valorTotal: valueReturn.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                        percentual: percentual,
                        valorParcelas: valorParcelas.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                        totalFinal: totalFinal.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                    };
                });
                setParcelas(parcelas);
            }
            if (cartao === "3") {
                const parcelas = taxa.elo.map((item, index) => {
                    const valor = valorCompra - valorEntrada;
                    const totalFinal = (100 * valor) / (100 - item)
                    const percentual = (item * totalFinal) / 100;
                    const valueReturn = valor + percentual;
                    const valorParcelas = (totalFinal) / (index + 1);

                    return {
                        parcela: index + 1,
                        valorTotal: valueReturn.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                        percentual: percentual,
                        valorParcelas: valorParcelas.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                        totalFinal: totalFinal.toLocaleString("pt-BR", {
                            currency: "BRL",
                            currencyDisplay: "symbol",
                            style: "currency",
                        }),
                    };
                });
                setParcelas(parcelas);
            }
            if (cartao === "0" || cartao === "1") {
                setTaxaDebito(1.7);
            } else {
                setTaxaDebito(2.98);
            }
            const valor = valorCompra - valorEntrada;
            const percentualDeb = (100 * valor) / (100 - taxaDebito)
            const debTotal = (percentualDeb).toLocaleString("pt-BR", {
                currency: "BRL",
                currencyDisplay: "symbol",
                style: "currency",
            });
            setDebitoTotal(debTotal);
        }
        handleChangeInput();
    }, [valorCompra, valorEntrada, taxaDebito, cartao]);

    return (
        <>
            <Container>
                <div className={"logo"}>
                    <img src={require("../../images/logo.png")} width="250" height="87" alt={"Calculadora de Taxas"} />
                </div>
                <div className={"boxImage"}>
                    <form>
                        <div className="group">
                            <label>Valor da compra:</label>
                            <input type="number" required autoFocus={true} onChange={(e) => setValorCompra(e.target.value)} placeholder={"R$ 0,00"} />
                        </div>

                        <div className="group">
                            <label>Entrada em dinheiro:</label>
                            <input type="number" required onChange={(e) => setValorEntrada(e.target.value)} placeholder={"R$ 0,00"} />
                        </div>
                        <div className="group">
                            <label>Bandeira do Cartão:</label>
                            <select name="select" onChange={(e) => setCartao(e.target.value)}>
                                <option value={"0"}>Mastercard</option>
                                <option value={"1"}>Visa</option>
                                <option value={"2"}>Hipercard</option>
                                <option value={"3"}>Elo</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div className={"boxTable"}>
                    <table>
                        <thead>
                            <tr>
                                <th>PARCELAS</th>
                                <th>VALOR PARCELAS</th>
                                <th>VALOR TOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {debitoTotal === 0 ? (
                                <tr></tr>
                            ) : (
                                <tr>
                                    <td>Débito </td>
                                    <td>{debitoTotal}</td>
                                    <td>{debitoTotal}</td>
                                </tr>
                            )}

                            {parcelas.map((item) => (
                                <tr key={item.parcela.toString()}>
                                    <td>{item.parcela} x</td>
                                    <td>{item.valorParcelas}</td>
                                    <td>{item.totalFinal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={"divw"}>
                        <a className={"whatsapp"} href={"https://api.whatsapp.com/send?phone=5581996016299&text=Tenho%20interesse"} target={"blank"}>
                            <em className="fab fa-whatsapp"></em> ENTRE EM CONTATO PELO WHATSAPP
                        </a>
                    </div>
                </div>
            </Container>
        </>
    );
}
