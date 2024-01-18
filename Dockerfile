FROM node:21.6.0 as builder

# Create app directory
WORKDIR /usr/src/app

# Copy package json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build application
RUN npm run build


FROM node:21.6.0

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 3000

RUN npm install -g serve

COPY --from=builder /usr/src/app/dist/ .

CMD ["serve", "-s"]
