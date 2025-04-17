#!/bin/sh
export JSON_STRING='window.configs = { \
    VITE_BASE_URL: "'${VITE_BASE_URL}'", \
}'
sed "s|//CONFIGURATIONS_PLACEHOLDER|${JSON_STRING}|" /usr/share/nginx/html/catalog/index.html.tmpl > /tmp/index.html

exec "$@"