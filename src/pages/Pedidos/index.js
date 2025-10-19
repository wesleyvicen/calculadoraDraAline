import React, { useState, useEffect, useRef } from "react";
import { Container, GlobalStyle } from "./styles";
// import './styles.css';
import logo from "../../images/logo.png";

// Dados dos produtos organizados por categoria
const productsData = {
  Restauracao: [
    { name: "Acido foscorico", campoAberto: false },
    { name: "Adesivo", campoAberto: false },
    { name: "Ionomero", campoAberto: false },
    { name: "Carbono", campoAberto: false },
    { name: "Resina", campoAberto: true },
    { name: "Dycal", campoAberto: false },
    { name: "MicroBrush", campoAberto: true },
    { name: "Fio Dental", campoAberto: false },
    { name: "ZOE", campoAberto: false },
    { name: "Vaselina solida", campoAberto: false },
    { name: "Hidroxido PA", campoAberto: false },
    { name: "Discos de Polimento", campoAberto: true },
    { name: "Mandril", campoAberto: false },
    { name: "Lixa de Resina", campoAberto: false },
    { name: "Lixa de aço", campoAberto: false },
    { name: "Matriz", campoAberto: true },
    { name: "Tiras de Poliéster", campoAberto: false },
    { name: "Cinta Profilática", campoAberto: false },
    { name: "Pincel", campoAberto: false },
    { name: "Fio Retrator", campoAberto: false },
    { name: "Hemostop", campoAberto: false },
    { name: "Tricresol", campoAberto: false },
    { name: "Formocresol", campoAberto: false },
    { name: "Otosporin", campoAberto: false },
    { name: "Fluor", campoAberto: false },
    { name: "Matriz Pre-moldada", campoAberto: false },
    { name: "Cunha", campoAberto: false },
    { name: "Resina Flow", campoAberto: false },
  ],
  Anestesico: [
    { name: "BenzoTop", campoAberto: false },
    { name: "Lidocaina", campoAberto: false },
    { name: "Mepvacaina", campoAberto: false },
  ],
  Limpeza: [
    { name: "Pasta Profilatica", campoAberto: false },
    { name: "Escova de Robinson", campoAberto: false },
    { name: "Taça de Borracha", campoAberto: false },
    { name: "Pedra Pomes", campoAberto: false },
  ],
  Ortodontia: [
    { name: "Tubo simples", campoAberto: true },
    { name: "Tubo duplo", campoAberto: true },
    { name: "Tubo simples conversivel", campoAberto: true },
    { name: "Tubo triplo", campoAberto: true },
    { name: "Botão lingual", campoAberto: true },
    { name: "Stop", campoAberto: true },
    { name: "Esporão", campoAberto: false },
    { name: "Tubo cruzado", campoAberto: false },
    { name: "Gancho Bola", campoAberto: false },
    { name: "Aparelho autoligado", campoAberto: false },
    { name: "Aparelho convencional", campoAberto: false },
    { name: "Fio niti", campoAberto: true },
    { name: "Fios de Aço", campoAberto: true },
    { name: "Fio Termo Ativado", campoAberto: true },
    { name: "Fio copper niti", campoAberto: true },
    { name: "Elastico corrente", campoAberto: true },
    { name: "Elastico unitario", campoAberto: true },
    { name: "Amarrilho 010 / 008 / 012", campoAberto: false },
    { name: "Caixa para elastico", campoAberto: false },
    { name: "Cera Ortodontica", campoAberto: false },
    { name: "Saqinho para elastico intraoral", campoAberto: false },
    { name: "Elasticos intraoral", campoAberto: true },
    { name: "Caixa de aparelho", campoAberto: false },
    { name: "Elastico separador", campoAberto: false },
    { name: "Placa rigida 1mm", campoAberto: false },
    { name: "Placa rigida 2mm", campoAberto: false },
    { name: "Mola Aberta", campoAberto: false },
    { name: "Mola Fechada", campoAberto: false },
    { name: "Protetor de fio", campoAberto: false },
    { name: "Fio TMA Vareta", campoAberto: false },
  ],
  Descartaveis: [
    { name: "Luva", campoAberto: false },
    { name: "Agulha gengival 25mm", campoAberto: false },
    { name: "Bisturi 15", campoAberto: false },
    { name: "Fio de sutura 3/8*** 3-0", campoAberto: false },
    { name: "Sugador normal", campoAberto: false },
    { name: "Sugador cirugico", campoAberto: false },
    { name: "Touca", campoAberto: false },
    { name: "Babador", campoAberto: false },
    { name: "Capote", campoAberto: false },
    { name: "Gaze", campoAberto: false },
    { name: "Gaze não esteril", campoAberto: false },
    { name: "Algodão", campoAberto: false },
    { name: "Mascara Cirurgica", campoAberto: false },
    { name: "Mascara descartavel", campoAberto: false },
    { name: "Lençol de borracha", campoAberto: false },
    { name: "Copo descatavel", campoAberto: false },
    { name: "Papel toalha dobrado", campoAberto: false },
    { name: "Papel toalha rolo", campoAberto: false },
    { name: "Etiqueta de preço", campoAberto: false },
    { name: "Pano de chão", campoAberto: false },
    { name: "Luva Limpeza pesada (P)", campoAberto: false },
    { name: "Toalha de mão Branco", campoAberto: false },
    { name: "Bolsa hotdog", campoAberto: false },
  ],
  Moldagem: [
    { name: "Alginato", campoAberto: false },
    { name: "Gesso", campoAberto: false },
    { name: "Silicona de condensação", campoAberto: false },
    { name: "Cera 7", campoAberto: false },
  ],
  Esterilizacao: [
    { name: "Agua destilada", campoAberto: false },
    { name: "Papel Gral", campoAberto: false },
  ],
  Clareamento: [
    { name: "Placa flexivel 1mm", campoAberto: false },
    { name: "Gel clareador caseiro", campoAberto: false },
    { name: "Gel clareador consultório", campoAberto: false },
    { name: "Dessensibilizante Gluma", campoAberto: false },
    { name: "Top dam", campoAberto: false },
  ],
  Radiografia: [
    { name: "Filme", campoAberto: false },
    { name: "Fixador", campoAberto: false },
    { name: "Revelador", campoAberto: false },
  ],
  Mercado: [
    { name: "Alcool 70ª", campoAberto: false },
    { name: "Agua sanitaria", campoAberto: false },
    { name: "Bolsa de Lixo preta", campoAberto: false },
    { name: "Bolsa de lixo Infectado", campoAberto: false },
    { name: "Papel higienico", campoAberto: false },
    { name: "Papel reutilizavel", campoAberto: false },
    { name: "Lustra moveis", campoAberto: false },
    { name: "Desinfetante", campoAberto: false },
    { name: "Bom Ar", campoAberto: false },
    { name: "Sabonete liquido", campoAberto: false },
    { name: "Bombril", campoAberto: false },
    { name: "Veja Gold multiuso azul", campoAberto: false },
    { name: "Bucha (Esponja)", campoAberto: false },
    { name: "Pastilha agua azul", campoAberto: false },
    { name: "Vassoura do Mop", campoAberto: false },
  ],
};

const PedidoPage = () => {
  const [category, setCategory] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([
    { name: "", quantity: "" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ type: "", text: "" });
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingOrder, setPendingOrder] = useState({
    selected: [],
    others: [],
    msg: "",
    category: "",
  });

  // Carregar produtos selecionados e outros produtos do localStorage ao trocar categoria
  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem("formData")) || {};
    if (category && formData[category]) {
      if (Array.isArray(formData[category])) {
        // Compatibilidade retroativa: só produtos selecionados
        setSelectedProducts(formData[category]);
        setOtherProducts([{ name: "", quantity: "" }]);
      } else {
        setSelectedProducts(formData[category].selectedProducts || []);
        setOtherProducts(
          formData[category].otherProducts || [{ name: "", quantity: "" }]
        );
      }
    } else {
      setSelectedProducts([]);
      setOtherProducts([{ name: "", quantity: "" }]);
      setSearchQuery("");
    }
  }, [category]);

  // Salvar produtos selecionados e outros produtos no localStorage sempre que mudar
  useEffect(() => {
    if (!category) return;
    const formData = JSON.parse(localStorage.getItem("formData")) || {};
    formData[category] = {
      selectedProducts,
      otherProducts,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [selectedProducts, otherProducts, category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setAlert({ type: "", text: "" });
    setOtherProducts([{ name: "", quantity: "" }]);
  };

  // refs para os campos de quantidade
  const quantityRefs = useRef({});

  const handleProductCheck = (product, checked) => {
    setSelectedProducts((prev) => {
      const exists = prev.find((p) => p.name === product.name);
      if (checked) {
        if (exists) {
          return prev;
        } else {
          // Após adicionar, dar foco no campo de quantidade
          setTimeout(() => {
            if (quantityRefs.current[product.name]) {
              quantityRefs.current[product.name].focus();
            }
          }, 100);
          return [...prev, { name: product.name, quantity: "" }];
        }
      } else {
        return prev.filter((p) => p.name !== product.name);
      }
    });
  };

  const handleQuantityChange = (productName, value) => {
    setSelectedProducts((prev) => {
      // Se não existe, adiciona (caso usuário digite antes de marcar)
      const exists = prev.find((p) => p.name === productName);
      if (exists) {
        return prev.map((p) =>
          p.name === productName ? { ...p, quantity: value } : p
        );
      } else {
        return [...prev, { name: productName, quantity: value }];
      }
    });
  };

  const handleOtherProductChange = (idx, field, value) => {
    setOtherProducts((prev) => {
      let updated = [...prev];
      updated[idx][field] = value;
      // Adiciona novo campo se o último for preenchido
      if (
        field === "name" &&
        idx === updated.length - 1 &&
        value.trim() !== ""
      ) {
        updated.push({ name: "", quantity: "" });
      }
      // Remove campo extra se o penúltimo for apagado
      if (
        field === "name" &&
        idx === updated.length - 2 &&
        value.trim() === "" &&
        updated.length > 1 &&
        updated[updated.length - 1].name.trim() === "" &&
        updated[updated.length - 1].quantity === ""
      ) {
        updated = updated.slice(0, -1);
      }
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      setAlert({ type: "error", text: "Selecione uma categoria." });
      return;
    }
    // Converter quantidade para número antes de filtrar
    const selected = selectedProducts.filter((p) => {
      const qtd = Number(p.quantity);
      return p.name && !isNaN(qtd) && qtd > 0;
    });
    const others = otherProducts.filter((p) => {
      const qtd = Number(p.quantity);
      return p.name.trim() && !isNaN(qtd) && qtd > 0;
    });
    if (selected.length === 0 && others.length === 0) {
      setAlert({
        type: "error",
        text: "Selecione pelo menos um produto e quantidade.",
      });
      return;
    }
    let msg = `*Pedidos para a Categoria: ${category}*\n\n`;
    selected.forEach((item) => {
      msg += `- ${item.name}: ${item.quantity}\n`;
    });
    others.forEach((item) => {
      msg += `- ${item.name}: ${item.quantity}\n`;
    });
    setPendingOrder({ selected, others, msg, category });
    setConfirmOpen(true);
  };

  const handleConfirmOrder = () => {
    setMessage(pendingOrder.msg);
    window.open(
      `https://wa.me/?text=${encodeURIComponent(pendingOrder.msg)}`,
      "_blank"
    );
    setAlert({ type: "success", text: "Redirecionando para o WhatsApp..." });
    setSelectedProducts([]);
    setOtherProducts([{ name: "", quantity: "" }]);
    localStorage.removeItem("formData");
    setConfirmOpen(false);
  };

  // Determina se existe pelo menos um produto com quantidade válida (> 0)
  const hasAnyProduct = React.useMemo(() => {
    const sel = selectedProducts.some((p) => {
      const qtd = Number(p.quantity);
      return !isNaN(qtd) && qtd > 0;
    });
    const oth = otherProducts.some((p) => {
      const qtd = Number(p.quantity);
      return p.name && p.name.trim() !== "" && !isNaN(qtd) && qtd > 0;
    });
    return sel || oth;
  }, [selectedProducts, otherProducts]);

  // Lista filtrada de produtos para exibição com base na busca
  const displayedProducts = React.useMemo(() => {
    if (!category) return [];
    const q = (searchQuery || "").trim().toLowerCase();
    if (!q) return productsData[category];
    return productsData[category].filter((p) => p.name.toLowerCase().includes(q));
  }, [category, searchQuery]);

  return (
    <>
      <GlobalStyle />
      <Container>
      <div className={"logo"}>
        <img
          src={logo}
          width="250"
          height="87"
          alt={"Calculadora de Taxas"}
        />
      </div>
      <div className="boxImage">
        <form onSubmit={handleSubmit}>
          <div className="group">
            <label>Categoria</label>
            <select value={category} onChange={handleCategoryChange}>
              <option value="">Selecione uma Categoria</option>
              {Object.keys(productsData).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          {category && (
            <>
              <div className="group">
                <label>Buscar item</label>
                <input
                  type="text"
                  placeholder="Procure por nome de produto..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="products-list">
                <h3>Produtos da Categoria: {category}</h3>
                {displayedProducts.map((product, idx) => {
                  const checked = selectedProducts.some((p) => p.name === product.name);
                  const quantity = selectedProducts.find((p) => p.name === product.name)?.quantity || "";
                  return (
                    <div
                      key={product.name}
                      className={`product-item ${checked ? "checked" : ""}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleProductCheck(product, !checked)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleProductCheck(product, !checked);
                        }
                      }}
                    >
                      <input
                        type="checkbox"
                        className="product-checkbox"
                        checked={checked}
                        onChange={(e) => handleProductCheck(product, e.target.checked)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <span className="product-name">{product.name}</span>
                      <input
                        type="number"
                        className="product-quantity"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(product.name, e.target.value)}
                        disabled={!checked}
                        min="0"
                        ref={(el) => (quantityRefs.current[product.name] = el)}
                        onClick={(e) => e.stopPropagation()}
                        onFocus={(e) => e.stopPropagation()}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="other-products">
                <h3>Outro Produto</h3>
                {otherProducts.map((prod, idx) => (
                  <div key={idx} className="other-product-item">
                    <input
                      type="text"
                      className="other-name"
                      placeholder="Digite outro produto"
                      value={prod.name}
                      onChange={(e) =>
                        handleOtherProductChange(idx, "name", e.target.value)
                      }
                    />
                    <input
                      type="number"
                      className="other-quantity"
                      placeholder="Qtd"
                      value={prod.quantity}
                      onChange={(e) =>
                        handleOtherProductChange(
                          idx,
                          "quantity",
                          e.target.value
                        )
                      }
                      disabled={!prod.name.trim()}
                      min="0"
                    />
                  </div>
                ))}
              </div>
              <button type="submit" className="submit-btn" disabled={!hasAnyProduct} aria-disabled={!hasAnyProduct}>
                Enviar
              </button>
            </>
          )}
        </form>
        {alert.text && (
          <div
            className={`alert ${
              alert.type === "error" ? "alert-error" : "alert-success"
            }`}
          >
            {alert.text}
          </div>
        )}
      </div>
      {/* Modal de confirmação mais estilizado */}
      {confirmOpen && (
        <div
          className="modal-backdrop"
          onClick={(e) => {
            // fechar ao clicar no backdrop, mas não ao clicar dentro do modal
            if (e.target.classList.contains("modal-backdrop")) {
              setConfirmOpen(false);
            }
          }}
        >
          <div
            className="confirm-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-title"
          >
            <header>
              <h4 id="confirm-title">Confirmar Pedido</h4>
              <button
                aria-label="Fechar"
                className="btn btn-secondary"
                onClick={() => setConfirmOpen(false)}
              >
                ✕
              </button>
            </header>

            <p className="description">Confira seu pedido antes de enviar:</p>

            <p>
              <strong>Categoria:</strong> {pendingOrder.category}
            </p>

            <ul>
              {pendingOrder.selected.map((item, i) => (
                <li key={i}>
                  {item.name} x{item.quantity}
                </li>
              ))}
              {pendingOrder.others.map((item, i) => (
                <li key={i + 1000}>
                  {item.name} x{item.quantity}
                </li>
              ))}
            </ul>

            <div className="modal-actions">
              <button className="btn btn-primary" onClick={handleConfirmOrder}>
                Confirmar e Enviar
              </button>
              <button className="btn btn-secondary" onClick={() => setConfirmOpen(false)}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      </Container>
    </>
  );
};

export default PedidoPage;
