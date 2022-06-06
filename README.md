# Gatsby + Strapi v4 + MariaDB/MySQL + Docker

- Create a **.env** file in the project root folder with these vars:

| Key                 | Value                         |
|---------------------|-------------------------------|
| MYSQL_ROOT_PASSWORD | ***                           |
| MYSQL_DATABASE      | ***                           |
| MYSQL_USER          | ***                           |
| MYSQL_PASSWORD      | ***                           |
| APP_KEYS            | *Random string*               |
| API_TOKEN_SALT      | *Random string*               |
| ADMIN_JWT_SECRET    | *Random string*               |
| STRAPI_TOKEN        | *Create in Strapi, see below* |

- Run `docker compose up` in the root folder to start the containers
- Visit [http://localhost:1337/](http://localhost:1337/) (Strapi)
- Register, then generate a new "Full access" token in **Settings > API Tokens**
- Copy the token to the **.env** `STRAPI_TOKEN` var
- Create a **User** collection type with an email; add some users
- Restart Docker Compose
- Visit [http://localhost/](http://localhost/) to confirm it all works