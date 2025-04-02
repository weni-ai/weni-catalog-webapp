ARG NODE_VERSION="20.18.0"
ARG BASE_VERSION="alpine3.17"
ARG OLD_IMAGE="catalog-webapp:latest"
ARG KEEP_DAYS=60

FROM node:${NODE_VERSION}-${BASE_VERSION} AS builder

WORKDIR /app

RUN apk add --no-cache git

COPY package.json yarn.lock ./
RUN yarn install

COPY . ./

RUN yarn build

FROM ${OLD_IMAGE} AS old_css

FROM nginxinc/nginx-unprivileged:1.25
ARG OLD_IMAGE=${OLD_IMAGE}
ARG KEEP_DAYS=${KEEP_DAYS}

COPY --chown=nginx:nginx nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx docker/headers /usr/share/nginx/html/headers
COPY --chown=nginx:nginx docker/file_handler.sh /
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html/catalog/
COPY --from=old_css --chown=nginx:nginx /usr/share/nginx/html/catalog/assets/all.txt /usr/share/nginx/html/catalog/assets/*.css /usr/share/nginx/html/catalog/assets/

COPY docker-entrypoint.sh /

RUN cd /usr/share/nginx/html/catalog/ \
    && /file_handler.sh css

COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html/catalog/

RUN mv /usr/share/nginx/html/catalog/index.html /usr/share/nginx/html/catalog/index.html.tmpl \
    && cd /usr/share/nginx/html/catalog/ \
    && ln -s /tmp/index.html
    
EXPOSE 8080
ENTRYPOINT ["bash","/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
