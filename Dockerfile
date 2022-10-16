FROM node:lts-alpine

COPY src src
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY prisma prisma
COPY .env.docker .env

RUN npm install

CMD ["npm", "run", "start:migrate"]
