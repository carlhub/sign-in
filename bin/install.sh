#!/bin/sh

echo "updating apt repos"
sudo apt-get update 

echo "setting up apt repos"
echo "adding mongo key"
sudo apt-key adv \
   --keyserver hkp://keyserver.ubuntu.com:80 \
   --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list 

echo "adding neo4j key"
wget -O - https://debian.neo4j.org/neotechnology.gpg.key | sudo apt-key add -
echo 'deb http://debian.neo4j.org/repo stable/' | sudo tee -a /etc/apt/sources.list.d/neo4j.list


echo "updating apt repos"
sudo apt-get update 


echo "installing mongo"
sudo apt-get install -y mongodb-org 

echo "installing node"
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - &&
sudo apt-get install -y nodejs 

echo "installing npm modules locally"
npm install


