To run services run the docker-compose file inside the root folder.  
Database can be accesed via adminer container on :8080 with credentials

```
postgres
example
forms
```

SQL command to fetch JSON

```
SELECT content ->> 'products' AS product
FROM content;
```

![run](other/run.gif)

[ ] Setup auth
[ ] Create user model
[ ] Create authentication services
