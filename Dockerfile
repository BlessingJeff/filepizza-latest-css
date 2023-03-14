FROM node:alpine
MAINTAINER Alexander Kern <fileBurger@kern.io>

COPY . ./
RUN npm install && npm run build

ENV NODE_ENV production
EXPOSE 80
CMD node ./dist/index.js
