# syntax=docker/dockerfile:1

# Stage 1: Instalar dependências e gerar Prisma Client
FROM node:20-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY prisma ./prisma
RUN npx prisma generate

# Stage 2: Build em modo standalone
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Reutiliza node_modules do estágio de deps
COPY --from=deps /app/node_modules ./node_modules

# Copia fontes necessárias para o build
COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY postcss.config.mjs ./
COPY public ./public
COPY src ./src
COPY prisma ./prisma

# Garante Prisma Client atualizado
RUN npx prisma generate

# Build (usa output standalone definido em next.config.ts)
RUN npm run build

# Stage 3: Runtime mínimo
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

# Copia build standalone e assets
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/prisma ./prisma

EXPOSE 3000
CMD ["node", "server.js"]