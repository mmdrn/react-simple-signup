FROM node:14.20.1-alpine3.16 AS build-ui

USER node

WORKDIR /tmp/build

COPY --chown=node:node ./ /tmp/build

RUN set -eux; \
    npm install; \
    npm run build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build-ui /tmp/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]