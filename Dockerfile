FROM node:8.11

RUN mkdir app

COPY package.json /app/

WORKDIR /app/

RUN npm install && npm i node-gyp @angular/cli@1.7.4 \
    && npm rebuild node-sass --force

COPY . /app/

RUN npm run build:prod

EXPOSE 80 4200

CMD node server.js