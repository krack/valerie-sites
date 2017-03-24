FROM krack/docker-apache-html5:test
MAINTAINER Sylvain Gandon <krack_6@hotmail.com>

COPY ./dist/  $HTTPD_PREFIX/htdocs/