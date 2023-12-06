# pull the base image
FROM node:18

# set the working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY ./package*.json ./

RUN npm install

# add the app
COPY . .

# Expose development port
EXPOSE 8080

# start the app
CMD ["npm", "run", "dev", "--", "--host"]
