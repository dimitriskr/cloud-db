# syntax=docker/dockerfile:1

FROM ubuntu

RUN apt-get update -y
RUN apt-get install curl -y
# Using Debian, as root
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update -y
RUN apt-get install -y nodejs

ENV NODE_ENV=development
WORKDIR /app
COPY . /app
RUN npm install -g npm@7.17.0
RUN npm install --save sharedb
#COPY example/ example/
#RUN cd example/ && ls -alh
RUN npm install
CMD npm run build && npm start
#CMD npm start


EXPOSE 8081