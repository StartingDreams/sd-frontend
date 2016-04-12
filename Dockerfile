FROM node:latest
MAINTAINER  David Smith <david@startingdreams.com>
WORKDIR /var/www
COPY . /var/www
EXPOSE 30080
EXPOSE 30443
ENTRYPOINT ["npm", "start"]