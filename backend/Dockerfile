FROM node:lts-alpine

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]