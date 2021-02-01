#!/bin/bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/../" >/dev/null 2>&1 && pwd )"

cd $DIR/
git submodule update --init
apt-get update -y
apt-get install --no-install-recommends -y \
    php7.4 \
    php7.4-gd \
    php7.4-zip \
    php7.4-curl \
    php7.4-xml \
    php7.4-mbstring \
    php7.4-sqlite \
    curl \
    vim \
    lsof
