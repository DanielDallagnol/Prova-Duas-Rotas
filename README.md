# Prova Duas Rotas

Aplicação em **React + TypeScript** desenvolvida para estudo e prática de **roteamento**, **componentização** e **boas práticas de versionamento**, utilizando Vite e integração contínua com deploy automático no Vercel.

---

## 🚀 Deploy
**Produção:** [https://prova-duas-rotas.vercel.app](https://prova-duas-rotas.vercel.app)

---

## 📌 Funcionalidades
- Roteamento com `react-router-dom` (duas rotas principais)
- Componentes reutilizáveis:
  - `Box`
  - `Card`
  - `Alert`
  - `Loading Bar`
- Estilização customizada
- Alerts dinâmicos
- Paginação
- Deploy automatizado no **Vercel** a cada push na branch `main`

---

## 🛠 Tecnologias
- **React 18**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **ESLint + Prettier**
- **Vercel** (deploy automático)

---

## 📂 Estrutura do projeto
src/
  Components/
    Alert.tsx          # Componente de alerta com customização de cor
    Box.tsx            # Componente de container para layout
    Button.tsx         # Botão estilizado e reutilizável
    Card.tsx           # Exibição de conteúdo em formato de card
    Lista.tsx          # Lista dinâmica para exibir dados
    Titulo.tsx         # Componente para títulos de página/seção
  Pages/
    Dados.tsx          # Página com dados carregados dinamicamente
    Post.tsx           # Página para exibir conteúdo de post
    PrimeiraPagina.tsx # Página inicial
  assets/              # Imagens e recursos estáticos
App.css                # Estilos globais
App.tsx                # Componente raiz
Router.tsx             # Configuração de rotas
index.css              # Estilo base
main.tsx               # Ponto de entrada da aplicação
vite-env.d.ts          # Tipos para Vite



---

## 📈 Fluxo de Desenvolvimento
O projeto segue **Conventional Commits** para padronização e rastreabilidade:

- `feat:` novas funcionalidades  
  Exemplo: `feat: add primeira pagina`
- `fix:` correções e ajustes  
  Exemplo: `fix: mudar a cor do alert`
- `chore(release):` versionamento e releases  
  Exemplo: `chore(release): 0.0.9`

**Controle de Versão:**  
- Versões incrementais `0.0.x` para cada entrega estável
- Histórico de commits limpo e objetivo
- Deploy automático configurado no Vercel

---

## 📦 Como Rodar Localmente
```bash
# Clonar o repositório
git clone https://github.com/DanielDallagnol/Prova-Duas-Rotas.git

# Acessar a pasta
cd Prova-Duas-Rotas

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
