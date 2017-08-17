FROM ubuntu:16.04
MAINTAINER Scalisi Vincenzo <xxxx.xxx@xxxxx.fr>


# Install base
RUN apt-get update && apt-get install -y \ 
    apache2 \
    git

RUN a2enmod headers
RUN a2enmod deflate
RUN a2enmod ssl
    
# Copy config file
ADD ./apache2.conf /etc/apache2/apache2.conf
ADD ./sites-available/ope.conf /etc/apache2/sites-available/ope.conf

ADD ./server.crt /etc/apache2/server.crt
ADD ./server.key /etc/apache2/server.key

# enable / disable host conf
RUN a2dissite 000-default
RUN a2ensite ope

WORKDIR /var/www
EXPOSE 80
CMD /usr/sbin/apache2ctl -D FOREGROUND