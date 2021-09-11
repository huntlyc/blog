---
title: WordPress on Docker Quickstart
slug: wordpress-on-docker-quickstart
date: 2018-01-27
tags: ['Docker', 'WordPress']
published: true
canonical_url: false
description: Super quick guide to getting the official WordPress Docker image running with HTTPS without the need for an additional image for HTTPS proxy. The guide assumes that you know the basics of docker and just want to get an https version of WordPress going.
cover_image: /assets/img/uploads/docker.jpg
---

Super quick guide to getting the official WordPress Docker image running with HTTPS without the need for an additional image for HTTPS proxy. The guide assumes that you know the basics of docker and just want to get an https version of WordPress going.

This guide assumes you've installed [docker](https://docs.docker.com/install/) and [docker-compose](https://docs.docker.com/compose/install/). Just as a point of order - I had permission issues on Arch when I first installed and started the docker service.  It was a long time ago so I can't recall the steps I took to rectify it. Your mileage may vary depending on your platform - but for the purposes of this guide, I hope you're on Linux/OSX!

Also this guide is pretty much just an expanded version of [this GitHub issue answer](https://github.com/docker-library/wordpress/issues/46#issuecomment-347409659) by AlexanderOMara

## Base Setup

Create your project folder - for the rest of this guide, I'll call mine "projectx".

Inside the projectx/ folder create 2 files: *Dockerfile* and *docker-compose.yml*. Next, create a directory called *wp-app*.

## Dockerfile

Here is a base Docker file to get the official WordPress image to use https:

```dockerfile
    FROM wordpress:latest
    RUN apt-get update && apt-get install -y --no-install-recommends ssl-cert && rm -r /var/lib/apt/lists/* && a2enmod ssl && a2ensite default-ssl
    EXPOSE 80 443
```

Dockerfile
## Docker Compose File

And here is your docker-compose.yml file, swap out environment variables for your own. Also, take note of the example.test part, that's the URL we're going to view the WordPress installation on when the containers are up and running…

```yaml
version: '3.3'

services:
  wpdb:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: myRootPassword
      MYSQL_DATABASE: wp_db_name
      MYSQL_USER: wp_db_user
      MYSQL_PASSWORD: mySuperSecretPass

  wp:
    build:
      context: ./
    depends_on:
      - wpdb
    volumes:
      - ./wp-app:/var/www/html
    extra_hosts:
      - "example.test:127.0.0.1"
    ports:
      - "80:80"
      - "443:443"
    restart: always
    environment:
      WORDPRESS_DB_HOST: wpdb:3306
      WORDPRESS_DB_USER: wp_db_user
      WORDPRESS_DB_NAME: wp_db_name
      WORDPRESS_DB_PASSWORD: mySuperSecretPass
volumes:
  db_data: {}
```

_docker-compose.yml contents_

## Setting Sail

You want to run the following command: **`docker-compse build`**. This will use the Dockerfile to create the image for the WordPress container, if what I just said sounds like obfuscated English, turn back now and go and read the [Docker intro](https://docs.docker.com/get-started/).

Next run **`docker-compose up`** and if the sun and stars have aligned in a mystical way, it will build all the required images and get the containers running. You can access all WordPress code in the wp-app folder.

Happy trails!
