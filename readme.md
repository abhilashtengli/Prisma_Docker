# Prisma 
- [Prisma installation ] (https://projects.100xdevs.com/tracks/gZf9uBBNSbBR7UCqyyqT/prisma-4)
- after adding schema migrate schema (npx prisma migrate dev --name User_schema)

## To generate prisma client 
- npx prisma generate  (.\node_modules\@prisma\client)

# Docker 

1. docker ps (to check images)
2. docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
3. update database URL
4. To check the db 
   - docker exec -it ceba5d36da75 /bin/bash  
   - psql -h localhost -U postgres
   - \dt; (to explore the database)