# FROM node:10

# RUN mkdir -p /usr/src/app

# WORKDIR /usr/src/app

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package*.json ./
# COPY . .

# RUN npm install
# # Use 'ci' instead of 'install' for production
# # RUN npm ci --only=production

# # Bundle app source
# RUN npm run build

# EXPOSE 3001

# CMD ["npm", "start"]

FROM node:12.17.0-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install
RUN npm run build

## Stage two , where the app actually runs

FROM node:12.17.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /usr/src/app/dist ./dist
EXPOSE 3001
CMD npm start
