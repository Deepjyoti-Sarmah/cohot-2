import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async () => {
    await client.user.create({
        data: {
            email: "asd",
            name: "adsads"
        }
    })
    return NextResponse.json({
        message: "hi there"
    })
}

// pGanadhish Mardikar,ganadhishmardikar7160@gmail.com,8956716111,wVT1Bn,Maharashtra,,Course With Folder,Live 0-1,3499,2023-11-10 14:32:13,2026-11-10,2023-11-10 14:19:15

// Abraham Richard ,abrahamrichard422@gmail.com,9137791357,iJkcBp,Maharashtra,,Course With Folder,Live 0-1,3499,2023-11-10 14:48:08,2026-11-10,2023-11-10 14:46:22

// Adarsha S,adarsha.a913@gmail.com,8147033448,3fE5pC,Karnataka,,Course With Folder,Live 0-1,3499,2023-11-10 15:07:37,2025-10-10,2023-11-10 15:03:33

// Aryan,aryan2001rathi@gmail.com,9997958578,ml1FCd,Uttar Pradesh,,Course With Folder,Live 0-1,3499,2023-11-10 15:49:58,2025-10-10,2023-11-10 14:48:27

// Mohd Faizan,faizan.mohd09@gmail.com,9650138262,mCLZ0g,Delhi,,Course With Folder,Live 0-1,3499,2023-11-10 19:58:24,2025-10-10,2023-11-10 19:53:46
