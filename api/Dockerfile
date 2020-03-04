FROM node:12.2.0-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN yarn install --silent

EXPOSE 6001

CMD ["yarn", "start"]
