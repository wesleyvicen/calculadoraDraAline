import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Paper,
  Grid,
  Alert,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Dados dos produtos organizados por categoria
const productsData = {
    "Restauracao": [
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
        { name: "Resina Flow", campoAberto: false }
    ],
    "Anestesico": [
        { name: "BenzoTop", campoAberto: false },
        { name: "Lidocaina", campoAberto: false },
        { name: "Mepvacaina", campoAberto: false }
    ],
    "Limpeza": [
        { name: "Pasta Profilatica", campoAberto: false },
        { name: "Escova de Robinson", campoAberto: false },
        { name: "Taça de Borracha", campoAberto: false },
        { name: "Pedra Pomes", campoAberto: false }
    ],
    "Ortodontia": [
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
        { name: "Fio TMA Vareta", campoAberto: false }
    ],
    "Descartaveis": [
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
        { name: "Bolsa hotdog", campoAberto: false }
    ],
    "Moldagem": [
        { name: "Alginato", campoAberto: false },
        { name: "Gesso", campoAberto: false },
        { name: "Silicona de condensação", campoAberto: false },
        { name: "Cera 7", campoAberto: false }
    ],
    "Esterilizacao": [
        { name: "Agua destilada", campoAberto: false },
        { name: "Papel Gral", campoAberto: false }
    ],
    "Clareamento": [
        { name: "Placa flexivel 1mm", campoAberto: false },
        { name: "Gel clareador caseiro", campoAberto: false },
        { name: "Gel clareador consultório", campoAberto: false },
        { name: "Dessensibilizante Gluma", campoAberto: false },
        { name: "Top dam", campoAberto: false }
    ],
    "Radiografia": [
        { name: "Filme", campoAberto: false },
        { name: "Fixador", campoAberto: false },
        { name: "Revelador", campoAberto: false }
    ],
    "Mercado": [
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
        { name: "Vassoura do Mop", campoAberto: false }
    ]
};

const PedidoPage = () => {
  const [category, setCategory] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [otherProducts, setOtherProducts] = useState([{ name: '', quantity: '' }]);
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState({ type: '', text: '' });
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingOrder, setPendingOrder] = useState({ selected: [], others: [], msg: '', category: '' });

  // Carregar produtos selecionados e outros produtos do localStorage ao trocar categoria
  useEffect(() => {
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    if (category && formData[category]) {
      if (Array.isArray(formData[category])) {
        // Compatibilidade retroativa: só produtos selecionados
        setSelectedProducts(formData[category]);
        setOtherProducts([{ name: '', quantity: '' }]);
      } else {
        setSelectedProducts(formData[category].selectedProducts || []);
        setOtherProducts(formData[category].otherProducts || [{ name: '', quantity: '' }]);
      }
    } else {
      setSelectedProducts([]);
      setOtherProducts([{ name: '', quantity: '' }]);
    }
  }, [category]);

  // Salvar produtos selecionados e outros produtos no localStorage sempre que mudar
  useEffect(() => {
    if (!category) return;
    const formData = JSON.parse(localStorage.getItem('formData')) || {};
    formData[category] = {
      selectedProducts,
      otherProducts
    };
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [selectedProducts, otherProducts, category]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setAlert({ type: '', text: '' });
    setOtherProducts([{ name: '', quantity: '' }]);
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
          return [...prev, { name: product.name, quantity: '' }];
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
        field === 'name' &&
        idx === updated.length - 1 &&
        value.trim() !== ''
      ) {
        updated.push({ name: '', quantity: '' });
      }
      // Remove campo extra se o penúltimo for apagado
      if (
        field === 'name' &&
        idx === updated.length - 2 &&
        value.trim() === '' &&
        updated.length > 1 &&
        updated[updated.length - 1].name.trim() === '' &&
        updated[updated.length - 1].quantity === ''
      ) {
        updated = updated.slice(0, -1);
      }
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category) {
      setAlert({ type: 'error', text: 'Selecione uma categoria.' });
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
      setAlert({ type: 'error', text: 'Selecione pelo menos um produto e quantidade.' });
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
    window.open(`https://wa.me/?text=${encodeURIComponent(pendingOrder.msg)}`, '_blank');
    setAlert({ type: 'success', text: 'Redirecionando para o WhatsApp...' });
    setSelectedProducts([]);
    setOtherProducts([{ name: '', quantity: '' }]);
    localStorage.removeItem('formData');
    setConfirmOpen(false);
  };

  const renderProducts = () => {
    if (!category || !productsData[category]) return null;
    return (
      <FormGroup>
        {productsData[category].map((product, idx) => {
          const checked = selectedProducts.some((p) => p.name === product.name);
          const quantity = selectedProducts.find((p) => p.name === product.name)?.quantity || '';
          return (
            <Paper
              key={product.name}
              sx={{
                p: 2.5,
                mb: 2.5,
                borderRadius: 3,
                background: '#e6f8fd',
                color: '#222',
                border: '2px solid #3ec46d',
                boxShadow: 'none',
                transition: 'all 0.25s cubic-bezier(.4,2,.6,1)',
                position: 'relative',
                overflow: 'hidden',
              }}
              elevation={checked ? 8 : 2}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(e) => handleProductCheck(product, e.target.checked)}
                        sx={{
                          color: '#3ec46d',
                          '&.Mui-checked': {
                            color: '#3ec46d',
                          },
                        }}
                      />
                    }
                    label={
                      <Typography
                        fontWeight={checked ? 700 : 500}
                        color={'#222'}
                        sx={{ letterSpacing: 0.5, fontSize: '1.08rem' }}
                      >
                        {product.name}
                      </Typography>
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Qtd"
                    type="number"
                    size="small"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(product.name, e.target.value)}
                    disabled={!checked}
                    inputProps={{ min: 0 }}
                    inputRef={el => quantityRefs.current[product.name] = el}
                    sx={{
                      bgcolor: '#fff9c4',
                      borderRadius: 2,
                      input: {
                        color: '#310204',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        letterSpacing: 0.5,
                      },
                      '& .MuiInputLabel-root': {
                        color: '#310204',
                      },
                    }}
                  />
                </Grid>
              </Grid>
              {/* Nenhum destaque extra ao selecionar, visual limpo */}
            </Paper>
          );
        })}
      </FormGroup>
    );
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
  <Card sx={{ width: '100%', boxShadow: 6, borderRadius: 4 }}>
        <CardHeader
          title={<Typography variant="h4" color="primary.dark">Cadastro de Produtos</Typography>}
          sx={{ textAlign: 'center', pb: 0 }}
        />
        <Divider />
        <CardContent>
          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">Categoria</InputLabel>
                <Select
                  labelId="category-label"
                  id="categorySelect"
                  value={category}
                  label="Categoria"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value=""><em>Selecione uma Categoria</em></MenuItem>
                  {Object.keys(productsData).map((cat) => (
                    <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              {category && (
                <>
                  <Typography variant="h6" color="primary" sx={{ mb: 1, fontWeight: 600 }}>
                    Produtos da Categoria: {category}
                  </Typography>
                  <Box>{renderProducts()}</Box>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="subtitle1" color="secondary" sx={{ fontWeight: 500 }}>
                    Outro Produto
                  </Typography>
                  <Stack spacing={2}>
                    {otherProducts.map((prod, idx) => (
                      <Paper
                        key={idx}
                        sx={{
                          p: 2.5,
                          borderRadius: 3,
                          background: '#e6f8fd',
                          border: '2px solid #3ec46d',
                          boxShadow: 'none',
                        }}
                      >
                        <Grid container spacing={2} alignItems="center">
                          <Grid item xs={7}>
                            <TextField
                              fullWidth
                              placeholder="Digite outro produto"
                              value={prod.name}
                              onChange={(e) => handleOtherProductChange(idx, 'name', e.target.value)}
                              variant="outlined"
                              size="small"
                              sx={{
                                bgcolor: '#fff9c4',
                                borderRadius: 2,
                                input: {
                                  color: '#310204',
                                  fontWeight: 700,
                                  fontSize: '1.1rem',
                                  letterSpacing: 0.5,
                                },
                                '& .MuiInputLabel-root': {
                                  color: '#310204',
                                },
                              }}
                            />
                          </Grid>
                          <Grid item xs={5}>
                            <TextField
                              label="Qtd"
                              type="number"
                              size="small"
                              value={prod.quantity}
                              onChange={(e) => handleOtherProductChange(idx, 'quantity', e.target.value)}
                              inputProps={{ min: 0 }}
                              disabled={!prod.name.trim()}
                              variant="outlined"
                              sx={{
                                bgcolor: '#fff9c4',
                                borderRadius: 2,
                                input: {
                                  color: '#310204',
                                  fontWeight: 700,
                                  fontSize: '1.1rem',
                                  letterSpacing: 0.5,
                                },
                                '& .MuiInputLabel-root': {
                                  color: '#310204',
                                },
                              }}
                            />
                          </Grid>
                        </Grid>
                      </Paper>
                    ))}
                  </Stack>
                </>
              )}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
                startIcon={<WhatsAppIcon />}
                sx={{ fontWeight: 700, letterSpacing: 1, py: 1.5 }}
              >
                Enviar
              </Button>
            {/* Modal de confirmação */}
            <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)} PaperProps={{
              sx: { borderRadius: 4, p: 1, minWidth: 340, bgcolor: '#f8fafc' }
            }}>
              <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, pb: 0 }}>
                <CheckCircleOutlineIcon color="success" sx={{ fontSize: 32 }} />
                <Typography variant="h6" color="success.main" fontWeight={700}>
                  Confirmar Pedido
                </Typography>
              </DialogTitle>
              <DialogContent sx={{ pt: 1, pb: 2 }}>
                <Typography variant="subtitle1" sx={{ mb: 2, color: 'text.secondary' }}>
                  Confira seu pedido antes de enviar:
                </Typography>
                <Paper elevation={0} sx={{ bgcolor: '#e6f8fd', border: '2px solid #3ec46d', borderRadius: 2, p: 2, mb: 2 }}>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1, color: '#310204' }}>
                    Categoria: {pendingOrder.category}
                  </Typography>
                  <ul style={{ margin: 0, paddingLeft: 18, color: '#222', fontSize: '1.08rem', fontWeight: 500 }}>
                    {pendingOrder.selected.map((item, i) => (
                      <li key={i}>{item.name} <b>x{item.quantity}</b></li>
                    ))}
                    {pendingOrder.others.map((item, i) => (
                      <li key={i + 1000}>{item.name} <b>x{item.quantity}</b></li>
                    ))}
                  </ul>
                </Paper>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Após confirmar, você será redirecionado para o WhatsApp.
                </Typography>
              </DialogContent>
              <DialogActions sx={{ px: 3, pb: 2, justifyContent: 'space-between' }}>
                <Button onClick={() => setConfirmOpen(false)} color="inherit" sx={{ fontWeight: 600, borderRadius: 2 }}>
                  Cancelar
                </Button>
                <Button onClick={handleConfirmOrder} color="success" variant="contained" sx={{ fontWeight: 700, borderRadius: 2 }} startIcon={<WhatsAppIcon />}>
                  Confirmar e Enviar
                </Button>
              </DialogActions>
            </Dialog>
              {alert.text && (
                <Alert severity={alert.type}>{alert.text}</Alert>
              )}
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PedidoPage;
