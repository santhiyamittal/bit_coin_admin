FROM node:12.22.1


WORKDIR /usr/src/app

RUN npm ci

RUN npm install -g @angular/cli:11.2.14

COPY package.json .
RUN npm install
COPY . .
CMD ["ng", "serve", "-o"]

EXPOSE 80
