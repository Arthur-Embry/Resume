FROM node:18

WORKDIR /app

COPY package.json .

RUN npm cache clean --force

#remove node_modules folder and papckage lock if they exist
RUN rm -rf node_modules package-lock.json

RUN npm install

COPY . .

RUN npm install -D tailwindcss postcss autoprefixer
RUN npx tailwindcss init -p

CMD ["npm", "run", "dev"]
