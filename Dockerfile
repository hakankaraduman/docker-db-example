FROM node:12.13.0-alpine
COPY /src /app
WORKDIR /app
RUN npm install
CMD npm start