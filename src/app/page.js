'use client'

import { useState, useEffect } from 'react';

import { Blogs } from "./components/Blogs";

import { NavBar } from "./components/NavBar";

import { ThemeProvider } from "@material-tailwind/react";

import { Client, Databases } from 'appwrite';

import FooterLevel from './components/Footer';

// import { PaginationPart } from './utils/PaginationPart';

import { register } from 'swiper/element/bundle';

import AuroraBackgroundDemo from './components/Aurora_background';

import FeatureSection16 from './components/ui/Features';


register();

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65e36a7c482aff2fa7ed');





export default function Home() {

  const [blogPosts, setblogPosts] = useState([]);


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const databases = new Databases(client);

    const result = databases.listDocuments(
      '663ee032001ee51813d2',
      '663ee03c0018afa72422',
      []
    );
    

    result.then(function (response) {
      setblogPosts(response.documents);
    }), function (error) {
      console.log(error);
    }

  }, []);

  return (
    <ThemeProvider>
      
      <NavBar />

      <AuroraBackgroundDemo/>
      {/* <CarouselCustom /> */}

      <FeatureSection16 />

      <Blogs blogPosts={blogPosts} />

      <FooterLevel />
    </ThemeProvider>

  );
}
