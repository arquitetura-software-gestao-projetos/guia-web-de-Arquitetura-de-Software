# Guia Web de Arquitetura de Software

Site acadêmico que apresenta três conceitos de arquitetura de software a partir de artigos publicados no site de Martin Fowler, relacionando cada conceito ao impacto na gestão de projetos.

## Uso de inteligência artificial

**A equipe utilizou ferramentas de Inteligência Artificial como apoio à elaboração/revisão do conteúdo e à implementação visual do site.** Os integrantes devem conferir as informações, os resumos e as análises com os artigos originais antes da entrega.

## Páginas

- [Página inicial](index.html)
- [Monolith First](monolith-first.html) — [artigo original](https://martinfowler.com/bliki/MonolithFirst.html)
- [Application Boundary](application-boundary.html) — [artigo original](https://martinfowler.com/bliki/ApplicationBoundary.html)
- [Serverless Architectures](serverless.html) — [artigo original](https://martinfowler.com/articles/serverless.html)

## Integrantes

- [Eduardo Walace](https://www.linkedin.com/in/eduardo-walace/)
- [Davi Rocha](https://www.linkedin.com/in/davi-rocha-de-farias/)
- [Lucas Azeredo](https://www.linkedin.com/in/lucas-azeredo-gon%C3%A7alves-a079a8349/)
- [Lucas Kauan](https://www.linkedin.com/in/lucas-kauan-b6a09033a/)

## Tecnologias

- HTML5 para estrutura e conteúdo.
- CSS3 puro para paleta, composição editorial, responsividade, tipografia e animações discretas.
- JavaScript puro para alternância de idioma (PT/EN), menu mobile e efeitos de entrada.
- SVG inline para os diagramas técnicos dos três conceitos.

## Direção visual

A identidade visual foi pensada como uma **planta técnica de software impressa em papel**: fundo quente, linhas de grade discretas, cotas e rótulos monoespaçados, títulos editoriais e composições assimétricas. Os diagramas são SVGs próprios e não dependem de imagens externas.

### Paleta

| Cor | Código | Aplicação |
| --- | --- | --- |
| Azul-tinta | `#1F3A4D` | Navegação, títulos de destaque e superfícies escuras |
| Papel quente | `#F4F1E9` | Fundo principal |
| Terracota | `#D45D35` | Numeração, linhas, marcadores e detalhes |
| Grafite azulado | `#232B33` | Texto principal |
| Cinza-azulado | `#53616B` | Texto secundário |
| Papel profundo | `#E9E4D8` | Citações e fundos alternativos |
| Azul acinzentado | `#456B78` | Conexões e diagramas |
| Azul-claro | `#DCE7E8` | Etiquetas e áreas técnicas |
| Terracota-claro | `#F3DFD4` | Destaques quentes |
| Branco suave | `#FFFDF7` | Superfícies claras |
| Cinza de borda | `#D5D0C4` | Divisórias e contornos |

O verde-floresta da proposta anterior foi substituído pelo azul-tinta, mais associado a documentação técnica e sistemas. O terracota foi mantido como acento pontual, sem ser usado para parágrafos. Cada artigo recebe uma variação própria de azul, mantendo a linguagem visual unificada.

A tipografia combina Source Serif 4 nos títulos, DM Sans no texto corrido e DM Mono em números e rótulos técnicos. As fontes são carregadas do Google Fonts; há fontes locais alternativas para manter a legibilidade caso não carreguem.

## Publicação

O projeto não precisa de build, framework ou servidor próprio. Para testar, abra `index.html` no navegador. Para publicar, envie os arquivos ao repositório e habilite o GitHub Pages na branch e pasta desejadas.

Os links entre páginas e os arquivos CSS/JS usam caminhos relativos, compatíveis com um site de projeto no GitHub Pages.

## Estrutura

```text
assets/
└── img/
    ├── equipe-planejamento-software.jpg
    └── software-architecture-map.svg
index.html
monolith-first.html
application-boundary.html
serverless.html
styles.css
script.js
README.md
```
