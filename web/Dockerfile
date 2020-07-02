# pull official base image
FROM node:lts as builder

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
RUN npm install

# add app
COPY . ./

# start app
#CMD ["npm", "run", "start"]

FROM nginx:stable
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app /usr/share/nginx/html