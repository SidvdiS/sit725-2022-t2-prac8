FROM node:11-alpine

WORKDIR /app

COPY . .

EXPOSE 3000

RUN npm install

CMD ["npm", "start"]