FROM node:18.18-alpine3.18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001

VOLUME /app

CMD ["npm", "start"]