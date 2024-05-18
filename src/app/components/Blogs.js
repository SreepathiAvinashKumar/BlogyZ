'use client'

import { useEffect, useState } from "react";
import { BlogPost } from "./BlogPost";


export function Blogs({blogPosts}) {
    

    return (
     <>
     <BlogPost BlogPosts = {blogPosts}/>
     </>
    );
}