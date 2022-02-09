FROM node:12.22.1


WORKDIR /usr/src/app

RUN npm ci

RUN npm install -g @angular/cli

COPY package.json .
RUN npm install
COPY . .
CMD ["ng", "serve", "-o"]

EXPOSE 80
