FROM node:12

WORKDIR /usr/src/app

COPY server ./server

COPY client ./client

COPY package*.json ./

RUN yarn

COPY ./client/package*.json ./client

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]
