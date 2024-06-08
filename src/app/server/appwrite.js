'use server'

import { Client, Account } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65e36a7c482aff2fa7ed')
  .setKey('91b5eec7bb8687fc2f2ed09aec514eb6c3cd0da68a9faec8145593e041d3fd320ca18a7a761e8fdd947953ed6fd23b20e945668fd558cac2b8d26c719c19f45e71203b464b7ebfbc58f84faf4fa15cd899c2e8eefc59f8c16e794cd7e98fdbfa42bd97f92cda9486a0c8eda72a7751aa080384b366257ca8ad380e111c6db1b8')

  const session = cookies().get("my-custom-session");
  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    },
  };
}


export async function createAdminClient() {
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65e36a7c482aff2fa7ed')
    .setKey('91b5eec7bb8687fc2f2ed09aec514eb6c3cd0da68a9faec8145593e041d3fd320ca18a7a761e8fdd947953ed6fd23b20e945668fd558cac2b8d26c719c19f45e71203b464b7ebfbc58f84faf4fa15cd899c2e8eefc59f8c16e794cd7e98fdbfa42bd97f92cda9486a0c8eda72a7751aa080384b366257ca8ad380e111c6db1b8')

  return {
    get account() {
      return new Account(client);
    },
  };
}


export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  
