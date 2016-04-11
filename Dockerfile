FROM node:latest
MAINTAINER  David Smith <david@startingdreams.com>
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 3000
ENTRYPOINT ["npm", "start"]