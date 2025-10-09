# Calculadora Dra Aline - PWA com Vite ⚡

Um aplicativo Progressive Web App (PWA) para simular taxas no cartão de crédito e fazer cálculos médicos, agora migrado para **Vite** para melhor performance e compatibilidade.

## 🚀 Funcionalidades

- ✅ **PWA Completo** - Instalável em qualquer dispositivo
- ✅ **Funciona Offline** - Aplicação funciona sem internet após primeira visita
- ✅ **Performance Otimizada** - Build ultra-rápido com Vite
- ✅ **Hot Module Replacement** - Desenvolvimento ágil
- ✅ **Service Worker Automático** - Cache inteligente via Workbox
- ✅ **Responsivo** - Funciona em desktop, tablet e mobile

## 🛠 Tecnologias

- **React 16.x** - Interface de usuário
- **Vite** - Build tool moderna e rápida 
- **Vite PWA Plugin** - Funcionalidades PWA automáticas
- **Workbox** - Service Worker e estratégias de cache
- **Styled Components** - Estilização
- **Material-UI** - Componentes de interface
- **React Router** - Navegação SPA

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## 🔧 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/wesleyvicen/calculadoraDraAline.git
   cd calculadoraDraAline
   ```

2. **Instale as dependências**
   ```bash
   npm install --legacy-peer-deps
   ```

## 🚀 Scripts Disponíveis

### Desenvolvimento
```bash
npm start        # Inicia servidor de desenvolvimento (porta 3000)
npm run dev      # Alias para npm start
```

### Build de Produção
```bash
npm run build    # Gera build otimizado na pasta 'build'
npm run preview  # Visualiza o build de produção localmente
```

### Testes
```bash
npm test         # Executa testes com Vitest
```

## 🌐 PWA Features

### Instalação
- Prompt automático de instalação no navegador
- Funciona em todos os dispositivos (iOS, Android, Desktop)
- Ícone personalizado na tela inicial

### Cache Offline
- **Recursos estáticos**: Cache permanente (JS, CSS, imagens)
- **Fontes externas**: Cache de Google Fonts e Font Awesome
- **Fallback offline**: Aplicação funciona mesmo sem internet

### Service Worker
- Gerado automaticamente pelo Vite PWA Plugin
- Estratégias de cache otimizadas
- Update automático quando nova versão disponível

## 📁 Estrutura do Projeto

```
calculadoraDraAline/
├── public/                  # Arquivos públicos (ícones, manifest, etc.)
│   ├── favicon.ico
│   ├── icon-192x192.png
│   ├── icon-512x512.png
│   └── robots.txt
├── src/                     # Código fonte
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/              # Páginas da aplicação
│   ├── styles/             # Estilos globais
│   └── index.js            # Ponto de entrada
├── build/                  # Build de produção (gerado)
├── vite.config.js          # Configuração do Vite
├── index.html              # Template HTML principal
└── package.json
```

## 🔧 Configuração do Vite

O projeto está configurado com:

- **Plugin React**: Suporte completo ao React com JSX
- **Plugin PWA**: Geração automática de manifest e service worker
- **JSX Support**: Arquivos `.js` tratados como JSX
- **Build otimizado**: Minificação e tree-shaking automáticos

## 📱 Como Instalar o PWA

### Desktop (Chrome/Edge)
1. Acesse a aplicação no navegador
2. Clique no ícone de "Instalar" na barra de endereços
3. Confirme a instalação

### Mobile (iOS/Android)
1. Abra no navegador
2. Toque em "Adicionar à Tela Inicial"
3. Confirme a instalação

## 🐛 Resolução de Problemas

### Erro de OpenSSL (Node.js)
Se encontrar erros relacionados ao OpenSSL com versões mais recentes do Node.js:
```bash
# Use a versão legada do OpenSSL (não mais necessário com Vite)
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

### Conflitos de Dependências
```bash
# Use legacy peer deps se necessário
npm install --legacy-peer-deps
```

### Cache do Service Worker
Para forçar atualização do service worker em desenvolvimento:
```bash
# Limpe o cache do navegador ou use aba anônima
```

## 🚀 Deploy

O projeto pode ser deployado em qualquer serviço de hospedagem estática:

- **Netlify**: Arraste a pasta `build/`
- **Vercel**: Conecte o repositório GitHub
- **GitHub Pages**: Configure com Actions
- **Nginx/Apache**: Sirva a pasta `build/`

## 📊 Performance

Com Vite, o projeto agora tem:
- ⚡ **Dev server instantâneo** (< 1s para iniciar)
- 🔥 **Hot Module Replacement** ultra-rápido
- 📦 **Build otimizado** com tree-shaking
- 🎯 **Bundle size reduzido**

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 License

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍⚕️ Sobre

Desenvolvido para **Dra. Aline** - Calculadora especializada para uso médico e financeiro.

---

**Migrado para Vite** ⚡ - Agora mais rápido e moderno!