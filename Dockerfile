FROM node:latest
MAINTAINER  David Smith <david@startingdreams.com>
WORKDIR /var/www
COPY . /var/www
EXPOSE 3000
ENTRYPOINT ["npm", "start"]