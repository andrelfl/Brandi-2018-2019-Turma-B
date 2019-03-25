# Brandi-2018-2019-Turma-B
Este Projeto consiste na criação de uma aplicação web para gestão de fichas de restauro de modo a facilitar o processo de preenchimento, armazenamento e preservação das mesmas.

## Pasta Backend
Pasta que contém os ficheiros para o funcionamento do Backend

## Pasta Frontend
Pasta que contém os ficheiros para o funcionamento do Frontend

# COMANDOS SERVIDOR

**Sincronizar repositório com o git:** 
<br/>cd brandiB/  
<br/>sudo git pull


**Criar frontend estático:**
<br/>cd Frontend/
<br/>cd notes.../
<br/>npm run build
<br/>rm /home/operador/brandiB_FE/*
<br/>cp -avr /build/* /home/operador/brandiB_FE

**Iniciar serviços:**
<br/>service nginx reload/start
<br/>pm2 reload/delete/start login

# GIT COMMANDS
**Para clonar um repositório git:**
<br/>git clone [link_repositório] [pasta destino]

**pasta destino opcional. Se o comando for executado sem este argumento é criada uma pasta com o nome do repositório já com o git inicializado**

**Para sincronizar um repositório local com o que está no git:**
 **Necessário estar na pasta onde esta o repositório**
<br/>git pull

**Para ver se existem alterações face ao repositório no git:**
<br/>git status

# BACKEND
**Para iniciar o backend entrar na pasta brandiB/Backend/NodeLogin/ e executar:**

<br/>pm2 start/reload login.js

# FRONTEND
**Para gerar novo frontend é preciso primeiro fazer git pull**
**Depois entrar na pasta brandiB/Frontend/notes... e executar:**

<br/>npm run build

**Depois de executado é preciso substituir as antigas páginas web pelas novas:**

<br/>cp -avr brandiB/Frontend/notes.../build/* /home/operador/brandiB_FE
<br/>service nginx restart

# Outras explicações úteis

<br/>As páginas web localizam-se em: /home/operador/brandiB_FE
<br/>Esta localização e outras definições encontram-se maioritariamente em: /etc/nginx/nginx.conf

<br/>PM2 é a aplicação que permite que outras aplicações corram em simultâneo no background:

<br/>pm2 start/reload/delete [file] ## Permite iniciar/reiniciar/parar uma app

<br/>pm2 status ## permite ver as apps a correr em background

## Frameworks utilizadas
### Backend
```
Ferramentas:
-NodeJS
-MySQL
Ferramentas de teste:
-Postman
```
### Frontend
```
Ferramentas:
-ReactJS
Ferramentas de teste:
-Selenium
```

