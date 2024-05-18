import { Account ,Client} from "appwrite";
import { useState } from "react";

const client = new Client({});
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65e36a7c482aff2fa7ed')

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

export {ID} from 'appwrite';
