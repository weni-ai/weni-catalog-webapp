# syntax = docker/dockerfile:1

ARG NODE_VERSION="18.19.1"
ARG BASE_VERSION="alpine3.19"
# ARG OLD_IMAGE="catalog:latest"
ARG KEEP_DAYS=60

FROM node:${NODE_VERSION}-${BASE_VERSION} AS builder

WORKDIR /app

# # Add build arguments for env variables
# ARG PUBLIC_PATH_URL
# ARG API_BASE_URL
# ARG BUILD_ENV_ARGS

# Set them as environment variables
# ENV PUBLIC_PATH_URL=${PUBLIC_PATH_URL}
# ENV API_BASE_URL=${API_BASE_URL}

RUN apk add --no-cache git

COPY package.json yarn.lock ./

# RUN --mount=type=cache,target=/root/.npm NPM_CONFIG_CACHE=/root/.npm npm install
RUN yarn install

COPY . ./

# RUN npm run build-only
RUN yarn build

# FROM ${OLD_IMAGE} AS old_css

FROM nginxinc/nginx-unprivileged:1.25-alpine
# ARG OLD_IMAGE=${OLD_IMAGE}
ARG KEEP_DAYS

COPY --chown=nginx:nginx docker/nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx docker/headers /usr/share/nginx/html/headers
COPY --chown=nginx:nginx docker/file_handler.sh /
COPY --chown=nginx:nginx docker/docker-entrypoint.sh /
COPY --from=builder --chown=nginx:nginx /app/dist /usr/share/nginx/html/catalog/
# COPY --from=old_css --chown=nginx:nginx /usr/share/nginx/html/catalog/assets/all.tx[t] /usr/share/nginx/html/catalog/assets/*.css /usr/share/nginx/html/catalog/assets/
RUN mv /usr/share/nginx/html/catalog/index.html /usr/share/nginx/html/catalog/index.html.tmpl \
    && cd /usr/share/nginx/html/catalog/ \
    && ln -s /tmp/index.html \
    && /file_handler.sh css

EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]
