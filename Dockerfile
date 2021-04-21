FROM node:12.17.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Bundle app source
RUN npm run build:deploy


## Stage two , where the app actually runs
FROM node:12.17.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY --from=0 /usr/src/app/dist ./dist

# CMD npm run start:deploy
