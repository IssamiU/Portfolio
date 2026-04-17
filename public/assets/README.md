# Assets

Estrutura padronizada para arquivos estáticos do portfólio.

## Organização

```
public/assets/
├── images/       # Imagens, thumbnails, banners, screenshots de projetos
│   └── projects/ # Subpasta opcional por projeto: projects/<slug>/cover.jpg
├── videos/       # Vídeos demo (.mp4, .webm)
└── documents/    # PDFs (currículo, certificados)
```

## Como referenciar

Tudo dentro de `/public` é servido na raiz. Use caminhos absolutos:

```ts
thumbnail: "/assets/images/projects/api-3/cover.jpg",
video:     "/assets/videos/api-3/demo.mp4",
pdf:       "/assets/documents/api-3/relatorio.pdf",
banner:    "/assets/images/projects/api-3/banner.jpg",
images: [
  "/assets/images/projects/api-3/01.jpg",
  "/assets/images/projects/api-3/02.jpg",
],
```

## Convenção de nomes

- minúsculas, separados por hífen: `gestao-tarefas-cover.jpg`
- prefixo por projeto: `<slug-do-projeto>/<nome>.<ext>`
- formatos: `.jpg`/`.webp` para fotos, `.png` para arte com transparência, `.mp4`/`.webm` para vídeo

## Currículo

Coloque o PDF em `public/assets/documents/curriculo.pdf` — o site já aponta para esse caminho.
