FROM node:8.2

ADD . /web

WORKDIR /web

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

