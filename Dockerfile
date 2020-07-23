FROM node:13.12.0-alpine as build

WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
COPY . ./

RUN yarn install && yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
