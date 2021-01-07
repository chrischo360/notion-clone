FROM node:12

COPY . .

RUN yarn

CMD node dist/index.js


# FROM node:latest

# WORKDIR /usr/src/app

# COPY package.json ./
# COPY yarn.lock ./

# RUN yarn
# RUN yarn build

# COPY . .

# EXPOSE 8080
# CMD ["node", "dist/index.js"]