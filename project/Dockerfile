FROM node:18-alpine

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

RUN npm install esbuild@0.24.2

COPY . .

# Expose both ports
EXPOSE 3000

# Start both services
CMD ["npm", "run", "dev"]