# Use official Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port if using express
EXPOSE 3000

# Command to run the app
CMD ["node", "dist/index.js"]
