FROM node:14.7.0

WORKDIR /app

ADD package.json /app

RUN yarn


COPY . /app
RUN yarn build

CMD ["yarn","run","start"]
