# Forca LIBRAS

Jogo da Forca com reconhecimento de sinais de LIBRAS usando MediaPipe Tasks Vision e TensorFlow.js. Construído com Next.js (App Router), React 19, Tailwind CSS v4 e componentes shadcn/ui.

## Visão Geral

Este projeto permite jogar Forca enquanto a câmera detecta, em tempo real, o gesto feito com a mão. A detecção usa o HandLandmarker (MediaPipe) para extrair landmarks e um modelo TensorFlow.js para classificar as letras. Há regras hardcoded para alguns sinais (R, T, N) e fallback para o modelo quando necessário.

Principais páginas e componentes:

- `src/app/page.tsx` — página inicial com botão “Iniciar o jogo”.
- `src/app/game/page.tsx` — página do jogo, integra câmera, detecção de sinais, estado do jogo e HUD.
- `src/app/analytics` — página simples de métricas locais (localStorage) e exemplo de dados de IP/geo.
- `src/components/GameCanvas.tsx` — loop de vídeo, inicialização do MediaPipe, renderização e detecção em tempo real.
- `src/components/adviseModal.tsx` — modal de aviso que abre automaticamente por 5s ao acessar `/game`.
- `src/lib/modelService.ts` — carregamento do modelo TFJS (em `/public/libras-model`).
- `src/lib/signLogic.ts` — regras hardcoded para alguns sinais e integração com o modelo.
- `src/lib/metrics.ts` — métricas persistidas em `localStorage`.
- `src/middleware.ts` — exemplo de coleta de IP/geo (apenas demonstrativo).

## Requisitos

- Node.js >= 18.17
- npm, pnpm ou yarn

## Instalação e Execução

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Ambiente de desenvolvimento:

   ```bash
   npm run dev
   # abra http://localhost:3000
   ```

3. Build de produção:

   ```bash
   npm run build
   npm run start
   ```

Scripts disponíveis (`package.json`):

- `dev` — inicia o servidor de desenvolvimento do Next.
- `build` — compila a aplicação.
- `start` — inicia a aplicação compilada.
- `lint` — roda o ESLint.

## Como Jogar

1. Acesse `http://localhost:3000` e clique em “Iniciar o jogo”.
2. Conceda permissão para a câmera quando solicitado.
3. Ao entrar em `/game`, o **AdviseModal** abre automaticamente por 5 segundos (overlay escuro com blur) para dar tempo da câmera carregar.
4. Faça o gesto da letra desejada com a mão; a detecção em tempo real aparece no HUD.
5. Acerte as letras da palavra. O jogo controla vidas, combinações (combo) e mostra telas de vitória/derrota.

## Reconhecimento de Sinais

- MediaPipe HandLandmarker (Tasks Vision) extrai landmarks da mão.
- O TensorFlow.js classifica os landmarks em letras com o modelo em `public/libras-model/model.json`.
- Algumas letras têm regras hardcoded (R, T, N) para maior robustez; caso nenhuma regra se aplique, usa-se o modelo.

Arquivos relevantes:

- `src/components/GameCanvas.tsx` — inicializa MediaPipe, requisita `getUserMedia`, e executa o loop de detecção.
- `src/lib/modelService.ts` — carrega o modelo via caminho relativo `'/libras-model/model.json'` (sem depender de `window`).
- `public/hand_landmarker.task` — arquivo necessário pelo MediaPipe.
- `public/libras-model/` — artefatos do modelo TFJS.


## Estrutura do Projeto (resumo)

```
public/
  hand_landmarker.task
  libras-model/
    model.json
    group1-shard1of1.bin
src/
  app/
    page.tsx
    game/page.tsx
    analytics/
    globals.css
    layout.tsx
  components/
    GameCanvas.tsx
    adviseModal.tsx
    ui/
  lib/
    modelService.ts
    signLogic.ts
    metrics.ts
  middleware.ts
```

## Créditos

- [MediaPipe Tasks Vision](https://developers.google.com/mediapipe)
- [TensorFlow.js](https://www.tensorflow.org/js)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)