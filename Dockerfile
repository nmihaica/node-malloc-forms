#FROM node:8
#FROM node:12.16.2-alpine
FROM node:10-alpine

# Install bash
RUN /bin/sh -c "apk add --no-cache bash"

# Set /app as workdir
RUN mkdir /app
ADD . /app
WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY wait-for-it.sh /wait-for-it.sh 
RUN chmod +x /wait-for-it.sh

COPY wait-for-command.sh wait-for-command.sh 
RUN chmod +x wait-for-command.sh

COPY docker_entrypoint.sh docker_entrypoint.sh 
RUN chmod +x docker_entrypoint.sh

RUN yarn install --frozen-lockfile
COPY . .
