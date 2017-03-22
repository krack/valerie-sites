FROM krack/docker-apache-html5:1.0
MAINTAINER Sylvain Gandon <krack_6@hotmail.com>

COPY ./dist/  $HTTPD_PREFIX/htdocs/