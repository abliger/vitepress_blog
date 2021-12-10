FROM nginx:latest

RUN rm /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/
COPY card/6768961_blog.abliger.site.key /root/card/
COPY card/6768961_blog.abliger.site.pem /root/card/

COPY .vitepress/dist  /usr/share/nginx/html/
EXPOSE 443
