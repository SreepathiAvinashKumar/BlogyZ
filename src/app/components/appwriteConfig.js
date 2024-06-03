import { Account ,Client} from "appwrite";
import { useState } from "react";

const client = new Client({});
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID)

    export async function isUserLoggedIn() {
        try {
         await account().get();
          return true;
        } catch (error) {
          return false;
        }
      }   

    // ... your initilization functions

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}


    export const account = new Account(client);
