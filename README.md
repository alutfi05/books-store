# books-store

- before using server app:
```bash
    cd server/
    npm install 
```

- setup your database 
```bash
    npx sequelize init
```
- then config your credential in file `server/config/config.json`

    ```
    {
        "development": {
            "username": "postgres",     //change this for development
            "password": "root",         //change this for development
            "database": "database_development",     //change this for development
            "host": "127.0.0.1",
            "dialect": "postgres"       //change this for development with DB you prefer
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {             //change this for production
            "username": "root",     //change this for production
            "password": null,       //change this for production
            "database": "database_production",      //change this for production
            "host": "127.0.0.1",    //change this for production
            "dialect": "mysql"      //change this for production with DB you prefer
        }
    }
    ```

