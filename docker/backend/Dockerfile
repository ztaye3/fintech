# docker/backend/Dockerfile

# Lightweight linux alpine distribution for fast build
FROM python:3.8.3-alpine

WORKDIR /equb
ADD ./backend/requirements.txt /equb/backend/


RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

ADD ./docker /equb/docker
ADD ./backend /equb/backend