FROM node:latest

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn build

EXPOSE 8080
CMD ["node", "dist/index.js"]