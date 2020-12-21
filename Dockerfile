FROM node:10

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Code for production
# RUN npm ci --only=production

COPY . .

# RUN mongod --version

# Bundle app source
RUN npm run build


EXPOSE 3001

# CMD ["npm", "start"]
RUN npm run start
