'use client'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
} from "@material-tailwind/react";


import { useEffect, useState } from "react";

import { NavBar } from "@/app/components/NavBar";

import { Client, Databases, Query, ID } from 'appwrite';
import TracingBeam from "@/app/components/ui/TracingBeam";


const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.PROJECT_ID);


const BlogPage = ({ params }) => {


    const [blogPosts, setBlogPosts] = useState();
    const { slug } = params;

    useEffect(() => {
        const databases = new Databases(client);

        const result = databases.listDocuments(
            '663ee032001ee51813d2',
            '663ee03c0018afa72422', [
            Query.equal('slug', slug)
        ]
        );

        result.then(function (response) {
            // console.log(response);
            setBlogPosts(response.documents[0]);
        }), function (error) {
            console.log(error);
        }

    }, []);


    return (
        <div>
            <NavBar />
            <TracingBeam className="">
            <div className="antialiased pt-4 relative">
                {blogPosts &&  <Card className=" bg-neutral-950 overflow-hidden">
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0 rounded-none flex justify-center items-center "
                    >
                        <img
                            src={blogPosts.image}
                            alt="ui/ux review check"
                            className="object-fill h-full w-full"
                        />
                    </CardHeader>
                    <CardBody className="text-center ">
                        <Typography  variant="h4" color="white">
                           {blogPosts.title}
                        </Typography>
                        <Typography variant="lead" color="white" className="m-5 px-5 leading-loose font-normal" dangerouslySetInnerHTML={{ __html: blogPosts.content }} >
                        
                        </Typography>
                    </CardBody>
                    <CardFooter className="flex items-center justify-between">
                        <div className="flex items-center -space-x-3">
                            <Tooltip content="Natali Craig">
                                <Typography color="white">{blogPosts.author}</Typography>
                            </Tooltip>
                           
                        </div>
                        <Typography color="white" className="font-normal">{blogPosts.timestamp}</Typography>
                    </CardFooter>
                </Card> }

                </div>
                </TracingBeam>
        </div>
    )

}

export default BlogPage;
