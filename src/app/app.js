'use client'
import { useState, useEffect } from 'react';
import { Client, Databases } from 'appwrite';
import { ThemeProvider } from "@material-tailwind/react";
import { Blogs } from "./components/Blogs";
import { NavBar } from "./components/NavBar";
import FooterLevel from './components/Footer';
import { register } from 'swiper/element/bundle';
import AuroraBackgroundDemo from './components/Aurora_background';

register();

const client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65e36a7c482aff2fa7ed');

export default function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const databases = new Databases(client);
    const result = databases.listDocuments('663ee032001ee51813d2', '663ee03c0018afa72422', []);

    result.then(function (response) {
      setBlogPosts(response.documents);
    }, function (error) {
      console.log(error);
    });
  }, []);

  return (
    <ThemeProvider>
      <NavBar />
      <AuroraBackgroundDemo />
      <Blogs blogPosts={blogPosts} />
      <FooterLevel />
    </ThemeProvider>
  );
}
