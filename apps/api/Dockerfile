FROM node:14.17.6-alpine3.11
WORKDIR /app
COPY ./dist/apps/api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
# dependencies that nestjs needs
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
CMD node ./main.js