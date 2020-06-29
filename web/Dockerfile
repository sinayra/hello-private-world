# pull official base image
FROM node:lts

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
RUN npm install

# add app
COPY . ./

EXPOSE 3000

# start app
CMD ["npm", "run", "start"]