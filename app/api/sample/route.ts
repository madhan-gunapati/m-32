// //TESTING the working of prisma

// import { PrismaClient } from "@/lib/generated/prisma";

// const prisma = new PrismaClient();

import prisma from "@/lib/prisma";

export async function GET() {
    const user = await prisma.user.create({
        data: {
            email: "manu@gmail.com",
            name: "Manu", 
            hashed_password: "123456"
        },
    });
    console.log(user);
    // This is a sample API route that returns a JSON response
    return new Response(JSON.stringify({ message: "Hello from the sample API route!" }), {
        headers: { "Content-Type": "application/json" },
    });
}