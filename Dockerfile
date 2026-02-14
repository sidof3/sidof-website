# Stage 1: Build the Angular app
FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
# Install dependencie
RUN npm ci

RUN npm install -g @angular/cli
# Copy all files
COPY . .
RUN npm run build --configuration=production 

# Stage 2: Serve the Angular app with Nginx
FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf


COPY --from=build /app/dist/mkdm-app-ui/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]