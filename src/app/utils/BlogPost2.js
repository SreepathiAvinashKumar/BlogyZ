'use client'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";



import Link from "next/link";
import Loading from "../components/Loading";
import Skeleton from "../components/Skeleton";
import { useState, useEffect } from "react";


export function BlogPost({ BlogPosts }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);


    const MAX_WORDS = 8; // Maximum number of words to display

    const truncateContent = (content) => {
        const words = content.split(" ");
        if (words.length > MAX_WORDS) {
            return words.slice(0, MAX_WORDS).join(" ") + "...";
        }
        return content;
    };

    function stripHtmlTags(html) {
        var tempElement = document.createElement('div');
        tempElement.innerHTML = html;

        return tempElement.textContent || tempElement.innerText || '';
    }







    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-w-[96rem]">
            {  BlogPosts.map((post,index) => (
                 (loading && !BlogPosts) ? <Skeleton/> : <Card key={index} className="overflow-hidden  bg-neutral-950 text-white  hover:animate-pulse">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none"
                    >
                        <img
                            src={post.image}
                            alt="ui/ux review check"
                        />
                    </CardHeader>

                    <CardBody className="max-h-[11rem] ">
                        <Typography variant="h6" color="blue-gray" className="md:text-[0.9rem] lg:text-[1rem]">
                            {post.title}
                        </Typography>
                        <Typography variant="small" color="gray" className="mt-4 text-sm  max-w-[22rem] font-normal mx-1">
                         {truncateContent(stripHtmlTags(post.content))}
                        </Typography>
                    </CardBody>
                    
                    <CardFooter className="flex justify-self-end  justify-between">
                           
  
                            <div className="flex  items-center  ">
                            <Link href={` ../blog/${post.slug}`}> Read more.. </Link>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1}
                                stroke="currentColor"
                                className="h-4 w-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                            </div>

                        
                        <Typography className="font-normal">January 10</Typography>
                    </CardFooter>

                </Card>
            ))}
        </div>
    );
}
