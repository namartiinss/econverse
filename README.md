# EconVerse - Teste FrontEnd

[Colocar imagem]

Projeto front-end para o teste técnico da Econverse.

**Resumo:**
 - Implementação em React com Vite + TypeScript, estrutura de componentes atômicos/moleculares/organismos e estilização em SCSS.

**Tecnologias principais:**
 - React 19
 - Vite
 - TypeScript
 - Sass (SCSS)
 - ESLint
 - Swiper

**Como rodar (desenvolvimento):**
1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra o navegador em http://localhost:5173 (Vite mostrará a porta se for diferente).

**Build e preview (produção):**

```bash
npm run build
npm run preview
```

**Scripts disponíveis:**
 - `dev`: inicia o servidor Vite em modo desenvolvimento.
 - `build`: compila TypeScript (`tsc -b`) e gera o build do Vite.
 - `preview`: serve o build gerado localmente via Vite.
 - `lint`: executa o ESLint (`eslint .`).

**Estrutura principal do projeto (resumo):**
 - `src/` - código fonte
	 - `components/` - componentes organizados por átomos, moléculas, organismos e templates
	 - `hooks/` - hooks personalizados (ex.: `useProducts.ts`)
	 - `styles/` - SCSS globais, tokens e mixins
	 - `assets/` - imagens e recursos estáticos
	 - `page/` - páginas (ex.: `home`)

**Pontos importantes sobre o código:**
 - Organização por atomic design facilita reuso de componentes.
 - Estilização escrita em SCSS modular (module.scss em componentes).
 - O projeto usa TypeScript; o build roda `tsc -b` antes do `vite build`.
 - `swiper` é usado para carrosséis em `organisms/SwiperProducts`.

**Ambiente / Pré-requisitos:**
 - Node.js (recomendado >= 18)
 - npm 9+ ou yarn (os comandos aqui usam `npm`)
