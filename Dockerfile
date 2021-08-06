FROM node:12.17.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

ADD . /usr/src/app

# TypeScript
RUN npm run tsc:deploy

# Start - currently run in compose file
# CMD npm run start:deploy
