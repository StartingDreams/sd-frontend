FROM node:latest
MAINTAINER  David Smith <david@startingdreams.com>
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE $FRONTEND_PORT
ENTRYPOINT ["npm", "start"]