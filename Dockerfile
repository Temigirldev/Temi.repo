#Pull image from docker hub
FROM nginx:alpine

#Copy all file to /html
COPY . /usr/share/nginx/html