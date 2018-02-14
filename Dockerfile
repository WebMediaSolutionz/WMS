FROM node:alpine
RUN mkdir app
COPY package.json /app/
WORKDIR /app/
RUN npm install
RUN npm i node-gyp @angular/cli@latest && npm rebuild node-sass --force
COPY . /app/
RUN npm run build:prod
EXPOSE 80 4200
CMD node server.js