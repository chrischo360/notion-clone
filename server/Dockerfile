FROM node:12
WORKDIR /server
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]l