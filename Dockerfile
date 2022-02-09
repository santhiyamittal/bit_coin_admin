FROM node:12.22.1

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .
 
RUN npm install 
RUN node_modules/.bin/ng build --prod
COPY . .


CMD /usr/src/app/node-modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck


