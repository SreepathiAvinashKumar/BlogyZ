'use client'

import { Card, Input, Button, Typography, } from "@material-tailwind/react";
import { NavBar } from "../components/NavBar";
import { Client, Databases, ID } from "appwrite";
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import AlertMessage from "../components/AlertMessage";
import FooterLevel from "../components/Footer";
import Skeleton from "../components/Skeleton";
import {useRouter} from "next/navigation";




const modules = {

  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["link", "image", "video"]
  ]
}

function Post() {
  const [value1, setValue] = useState('');

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');

  const [docStatus, setdocStatus] = useState(false);

  async function handleCreateDoc() {

    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('65e36a7c482aff2fa7ed');

    const databases = new Databases(client);

    const result = await databases.createDocument(
      '663ee032001ee51813d2', // databaseId
      '663ee03c0018afa72422',
      ID.unique().toString(),
      { 'title': title, 'image': image, 'author': author, 'slug': slug, 'content': value1 },
      []
    );

    setAuthor('');
    setImage('');
    setSlug('');
    setTitle('');
    setValue('');
    setdocStatus(true);
    router.push('/');
  }

  const router = useRouter();

  return (
    <>
      <NavBar />

      {docStatus && <AlertMessage status={"success"} which={"create-blog"} />}
      <div className="flex  justify-center my-3 w-full">

        <Card shadow={true} className="bg-neutral text-white items-center">
          <Typography variant="h3" color="blue-gray ">
            Write Blog
          </Typography>
          <Typography className="mt-2 max-w-[40rem] font-normal">
            This is a great place to introduce yourself to your readers and tell them a little bit about your background, your interests, and what you plan to write about on your blog.
          </Typography>
          <form className="mt-5 mb-4 flex flex-col items-center justify-between gap-5  sm:flex-row sm:items-center">
            <div className="flex flex-col w-80">
              <Typography variant="h6" color="white" className="">
                Title
              </Typography>
              <Input
                size="sm"
                onChange={(e) => { setTitle(e.target.value) }}
                //   placeholder="name@mail.com"
                className=" !border-t-green-200 text-white focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="white" className="">
                Image
              </Typography>

              <Input
                type="url"
                size="sm"
                onChange={(e) => { setImage(e.target.value) }}
                placeholder="Image URL"
                className=" !border-t-green-200 focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="white" className="">
                Author
              </Typography>

              <Input
                type="text"
                size="sm"
                onChange={(e) => { setAuthor(e.target.value) }}
                placeholder="Author Name"
                className=" !border-t-green-200 focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />


              <Typography variant="h6" color="white" className="">
                Slug
              </Typography>

              <Input
                type="text"
                size="sm"
                onChange={(e) => { setSlug(e.target.value) }}
                placeholder="Slug value"
                className=" !border-t-green-200 focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />


              <Typography variant="h6" color="white" className="">
                Tags
              </Typography>

              <Input
                type="text"
                size="sm"
                onChange={(e) => { setSlug(e.target.value) }}
                placeholder="Slug value"
                className=" !border-t-green-200  focus:!border-white"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

            </div>

            <div>
              <Typography variant="h6" color="white" className="mb-4">
                Content
              </Typography>
{ReactQuill ? <ReactQuill className="editor-input bg-neutral-950 h-80 w-full" theme="snow" value={value1} onChange={setValue} modules={modules} /> : <Skeleton/>}
              <Button onClick={handleCreateDoc} className="mt-16 bg-blue-500" fullWidth>
                Publish
              </Button>

            </div>

          </form>
        </Card>

      </div>
      <FooterLevel />

    </>
  );
}

export default Post;