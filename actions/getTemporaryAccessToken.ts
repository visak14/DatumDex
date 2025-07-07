"use server";

import { currentUser } from "@clerk/nextjs/server";
import { SchematicClient } from "@schematichq/schematic-typescript-node";
const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({ apiKey });
 

export async function getTemporaryAccessToken() {
    console.log("Getting temporary access token");
    const user  = await currentUser()

    if( !user) {
        console.log("User not found");
        return null;
    }

    console.log(`Issuing temporary access token for user: ${user.id}`);

    
    const resp = await client.accesstokens.issueTemporaryAccessToken({
        resourceType:"company",
        lookup: {
            id:user.id
        },
    })

    console.log("Temporary access token issued successfully" , resp.data ? "Token received": "No token in response" )
    return resp.data?.token 
}