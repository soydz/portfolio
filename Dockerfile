# Etapa 1: Instalar dependencias
FROM node:24-slim AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN corepack enable && corepack prepare pnpm@9 --activate
ENV PNPM_ENABLE_PRE_POST_INSTALL_SCRIPTS=true
RUN pnpm install --frozen-lockfile

# Etapa 2: Compilar la aplicación
FROM node:24-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN corepack enable && corepack prepare pnpm@9 --activate
RUN pnpm build

# Etapa 3: Servir con Node.js (producción)
FROM node:24-slim AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone/. .
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3100

ENV NODE_ENV=production
ENV PORT="3100"
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]