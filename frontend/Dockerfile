FROM node:22-alpine AS builder
# WORKDIR ist /workspace/frontend, damit ../backend/... auflösbar ist
WORKDIR /workspace/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
# Backend-OpenAPI-Spec für generate:api-types (Pfad: ../backend/...)
COPY backend/src/main/resources/openapi/ /workspace/backend/src/main/resources/openapi/
ARG VITE_OIDC_AUTHORITY
ARG VITE_OIDC_CLIENT_ID
ARG VITE_OIDC_REDIRECT_URI
ARG VITE_OIDC_POST_LOGOUT_REDIRECT_URI
RUN npm run generate:api-types && npm run build

FROM nginx:alpine
COPY --from=builder /workspace/frontend/dist /usr/share/nginx/html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
