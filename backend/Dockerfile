FROM node:20-alpine

WORKDIR /app
RUN apk add --no-cache bash netcat-openbsd
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate || true
RUN npm run build
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 3000
CMD ["/usr/local/bin/docker-entrypoint.sh"]
