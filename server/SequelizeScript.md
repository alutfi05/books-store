# books-store

## Sequelize Script

```bash

npx sequelize-cli db:create

npx sequelize-cli model:generate --name author --attributes name:string,dateOfBirth:date,city:string

npx sequelize-cli model:generate --name book --attributes title:string,image:string,synopsis:text,price:integer,publicationYear:integer,categoryId:integer,authorId:integer,publisherId:integer

npx sequelize-cli model:generate --name category --attributes name:string

npx sequelize-cli model:generate --name publisher --attributes name:string

npx sequelize-cli db:migrate

```
