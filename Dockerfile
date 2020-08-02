FROM node:14.3.0

WORKDIR /usr/app

COPY ./package*.json ./
RUN npm ci

COPY ./ ./

CMD ["npm","run","start"]