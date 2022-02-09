FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json .
 
RUN npm install 

COPY . .

CMD /usr/src/app/node-modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck


