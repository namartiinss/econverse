# EconVerse - Teste Técnico Front-End

**Deploy:** [https://econverse-iota.vercel.app/](https://econverse-iota.vercel.app/)

**Preview do Projeto:**

![Banner EconVerse](/public/banner.png)

---

## Métricas de Performance

O projeto foi validado utilizando o **Google PageSpeed Insights**, considerando métricas de desempenho, acessibilidade, boas práticas e SEO.

### Desktop

* **Desempenho:** 99
* **Acessibilidade:** 87
* **Boas Práticas:** 100
* **SEO:** 100

![PageSpeed Desktop](/public/pagespeed-1.png)

---

### Mobile

* **Desempenho:** 80
* **Acessibilidade:** 87
* **Boas Práticas:** 96
* **SEO:** 100

![PageSpeed Mobile](/public/pagespeed.png)


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
git clone https://github.com/namartiinss/econverse.git
```
```bash
cd econverse
```

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

### **SEO e Acessibilidade**

* **Meta tags básicas:**
  Foram definidas as tags `title` e `meta description` no `index.html`

* **Open Graph / Twitter Cards:**
  Foram adicionadas as meta tags `og:title`, `og:description`, `og:image`, `twitter:card` e `twitter:image` para otimizar o compartilhamento em redes sociais. As imagens de preview foram disponibilizadas na pasta `public/`.

* **Canonical & Robots:**
  Foi adicionada a tag `<link rel="canonical">` onde necessário e mantidos atualizados os arquivos `public/robots.txt` e `public/sitemap.xml`.

* **Structured Data (JSON-LD):**
  Foi implementada marcação estruturada `application/ld+json` utilizando schemas como `Product`, `Organization` e `BreadcrumbList` para melhor compreensão pelos motores de busca.

* **Acessibilidade (a11y):**
  Foram utilizados textos alternativos (`alt`) em imagens, markup semântico adequado e contraste acessível. O projeto foi validado com ferramentas como axe e Lighthouse para melhoria da experiência do usuário e indexação.

* **Arquitetura (CSR):**
  O projeto foi desenvolvido como aplicação client-side utilizando Vite + React, garantindo carregamento otimizado e estrutura escalável.

**Ambiente / Pré-requisitos:**
 - Node.js (recomendado >= 18)
 - npm 9+ ou yarn (os comandos aqui usam `npm`)
