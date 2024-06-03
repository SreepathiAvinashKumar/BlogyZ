'use client'

import React, { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { Client,Account } from "appwrite";
import AuthContext from "./AuthContext";


const client = new Client({});
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65e36a7c482aff2fa7ed')
    
    const account = new Account(client);

export async function getLoggedInUser() {
  try {
     if(account.get()){
      return account.get();
     }
  } catch (error) {
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await account.get();
        setUser(user);
        router.push("/");
      } catch (error) {
        console.log('No user session found', error);
        router.push("/login");
      }
      setLoading(false);
    };
    getUser();
  }, []);

  const login = async (email, password) => {
    const response = await account.createEmailPasswordSession(email, password);
    setUser(response.user);
    router.push("/");
  };

  const logout = () => {
    if (user) {
      account.deleteSession("current");
      setUser(null);
      router.push("/login");
    }
  };

  const signup = async (email, password, username) => {
    await account.create(ID.unique(), email, password, username);
    await account.createEmailSession(email, password);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, loading,login, logout, signup }}>
      
     <div> {!loading && children}</div>

    </AuthContext.Provider>
  );
};

