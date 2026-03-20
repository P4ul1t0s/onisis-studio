# 🚗 Onisis Studio AI

Aplicação web para transformar fotos de carros em imagens com aparência de estúdio usando IA.

---

## 🧠 O que esse projeto faz

* Recebe fotos de carros (externas, internas e close-ups)
* Processa usando IA (Replicate / Flux)
* Retorna imagens com qualidade de estúdio

---

## 🛠️ Tecnologias

* Frontend: HTML, CSS, JavaScript
* Backend: Node.js + Express
* IA: Replicate API
* Modelo: black-forest-labs/flux-2-pro

---

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js (versão 18 ou superior)
  👉 https://nodejs.org/

Para verificar:

```bash
node -v
npm -v
```

---

## 📦 1. Baixar o projeto

### Opção A — Clonar com Git

```bash
git clone https://github.com/P4ul1t0s/onisis-studio
cd onisis-studio
```

### Opção B — Baixar ZIP

* Clique em **Code → Download ZIP**
* Extraia o arquivo
* Abra a pasta no terminal

---

## 📦 2. Instalar dependências

```bash
npm install
```

---

## 🔑 3. Criar conta e gerar token no Replicate

1. Acesse:
   👉 https://replicate.com/account/api-tokens

2. Crie um novo token

3. Copie o valor gerado (exemplo: `r8_...`)

⚠️ Esse token é **secreto** (funciona como senha)

---

## ⚙️ 4. Configurar o token

### ✔️ Método recomendado: `.env`

Crie um arquivo chamado `.env` na raiz do projeto:

```env
REPLICATE_API_TOKEN=r8_seu_token_aqui
```

---

### 📄 Arquivo `.env.example`

O projeto inclui um arquivo `.env.example`:

```env
REPLICATE_API_TOKEN=your_token_here
```

👉 Use ele como modelo

---

## 🔒 Segurança

* ❌ Nunca suba o `.env` para o GitHub
* ❌ Nunca compartilhe seu token
* ✅ Use `.env.example` como referência

Certifique-se de que o `.env` está no `.gitignore`:

```gitignore
.env
```

---

## 🧠 Como isso funciona no código

O backend usa:

```js
process.env.REPLICATE_API_TOKEN
```

Ou seja:
👉 ele lê o valor definido no `.env`

---

## ▶️ 5. Rodar o projeto

```bash
node server.js
```

Abra no navegador:

```
http://localhost:3000
```

---

## 💻 Alternativa (sem `.env`)

Você pode rodar definindo o token direto no terminal:

### 🪟 Windows (CMD)

```cmd
set REPLICATE_API_TOKEN=r8_seu_token
node server.js
```

### 🪟 Windows (PowerShell)

```powershell
$env:REPLICATE_API_TOKEN="r8_seu_token"
node server.js
```

### 🍎 Mac / 🐧 Linux

```bash
export REPLICATE_API_TOKEN=r8_seu_token
node server.js
```

---

## 🧪 Como usar

1. Abra o sistema no navegador
2. Envie fotos nas categorias:

   * Exterior
   * Interior
   * Close-up
3. Limite: até 10 imagens por envio
4. Clique em **Processar**
5. Baixe os resultados

---

## 🧠 Observações importantes

* Fotos externas usam fundo de estúdio
* Fotos internas usam apenas iluminação (sem fundo)
* Close-ups usam tratamento de detalhe

---

## 💰 Custos

Cada imagem enviada = 1 chamada à API

Exemplo:

* 10 imagens → 10 chamadas → custo proporcional

---

## 🚨 Problemas comuns

### ❌ "Token não definido"

👉 Verifique se o `.env` existe e está correto

---

### ❌ "Erro ao processar imagem"

👉 Pode ser:

* token inválido
* limite excedido
* problema na API

---

### ❌ "npm install falhou"

👉 Verifique se Node.js está instalado corretamente
