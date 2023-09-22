FROM node:12-alpine
WORKDIR /app
COPY *.json .
COPY src/ .
RUN npm install
CMD npm start
EXPOSE 3000