FROM nginx

RUN mkdir /wwwroot
COPY nginx.conf /etc/nginx/nginx.conf

COPY ./dist/bundle.js /wwwroot/bundle.js
COPY ./dist/index.html /wwwroot/index.html
COPY ./dist/spectre.min.css /wwwroot/spectre.min.css

RUN service nginx start
