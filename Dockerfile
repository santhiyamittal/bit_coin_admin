FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
 
RUN npm install

COPY . .
EXPOSE 4200

CMD ["ng","serve","--host","0.0.0.0"]

