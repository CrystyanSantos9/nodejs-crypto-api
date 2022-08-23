FROM node:14-alpine

# 1 crio o diretório onde ficará os módulos do node_modules/ seto a pasta do usuario node e todo o seu conteúdo pertece ao user node
# garanto assim todas as permissões dentro dessa pasta para meu usuaŕio node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#seto esse diretório como onde vamos trabalhar/iniciar
WORKDIR /home/node/app

#pegar apoio do cache do node, só instala se essa parte mudar
COPY yarn.lock ./
COPY package*.json ./

# To avaid running with root e já trocar para o usuário
USER node
RUN npm install
#alterando para root para instalar bash
USER root
# RUN apk update && apk upgrade && apk add bash

# copiando tudo o que está em nossa máquina host de dev para dentro do container já com as devidas permissões
COPY --chown=node:node . .

EXPOSE 8087

CMD ["node", "app.js"]


