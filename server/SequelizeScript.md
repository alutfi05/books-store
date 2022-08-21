# books-store

## Sequelize Script

```bash

npx sequelize-cli db:create

npx sequelize-cli model:generate --name author --attributes name:string,dateOfBirth:date,age:integer,city:string

npx sequelize-cli model:generate --name book --attributes title:string,synopsis:string,price:integer,publicationYear:integer,categoryId:integer,authorId:integer,publisherId:integer

npx sequelize-cli model:generate --name category --attributes name:string

npx sequelize-cli db:migrate

npx sequelize-cli model:generate --name publisher --attributes name:string

```
