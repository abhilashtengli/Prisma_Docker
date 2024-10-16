import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser (username : string, password : string, firstName : string, lastName : string, email : string){

    const existingUser = await prisma.user.findUnique({
        where: { username , email},
      });
    
      if (existingUser) {
        console.log("Username already exists. Choose a different username.");
        return; // Avoid inserting the same username again
      }

 const res = await   prisma.user.create({
       data: {
        username,
        password,
        firstName,
        lastName,
        email
       }
    })
    console.log(res);
    
}

insertUser("abhi_tengli", "abhi@123", "Abhilash", "tengli ", "abhi02@gmail.com");