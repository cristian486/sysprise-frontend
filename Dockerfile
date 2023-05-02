FROM node:16.20.0-alpine3.17 AS build
WORKDIR /sysprise/frontend
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine3.17-slim
COPY --from=build /sysprise/frontend/build /usr/share/nginx/html