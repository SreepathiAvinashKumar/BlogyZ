'use client'

import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Select, Option,Textarea
} from "@material-tailwind/react";
import { NavBar } from "../components/NavBar";
import Image from "next/image";
import FooterLevel from "../components/Footer";
import AuroraBackground from "../components/ui/aurora_background";
import { motion } from "framer-motion";


const contact = () => {

    return (
        <>
        <NavBar/>
    
      <motion.div
        initial={{ opacity: 0.0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=""
      >
       <div className="flex items-center bg-neutral-950 justify-center flex-wrap">
       <Image className="mx-12" width={600} height={300} src={"https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /> 

         <Card className="flex justify-center  bg-neutral items-center px-1 py-5" color="white" shadow={true}>
            <Typography variant="h2" color="white">
                Contact Us
            </Typography>

            <form action="https://formsubmit.co/458119730fe160202ef8a7de0fd7f758" method="POST" className=" mb-2  w-80 max-w-screen-lg">

                <div className=" flex flex-col gap-6 container">
                    <Typography variant="h6" color="white" className="-mb-2">
                        Your Name
                    </Typography>

                    <Input
                        size="lg"
                        name="name"
                        placeholder="Jone Deph"
                        className=" !border-t-green-100 focus:!border-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="white" className="-mb-2">
                        Your Email
                    </Typography>
                    <Input
                        size="lg"
                        name="email"
                        placeholder="name@mail.com"
                        className=" !border-t-green-100 focus:!border-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Typography variant="h6" color="white" className="-mb-2">
                        Phone Number
                    </Typography>
                    <Input
                        type="number"
                        size="lg"
                        name="number"
                        placeholder="+91"
                        className="!border-t-green-100 focus:!border-white"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />

                    <Typography variant="h6" color="white" className="-mb-2">
                        Note
                    </Typography>
  
                    <Textarea className="!border-t-green-100 focus:!border-white" name="note" size="lg" label="Message" />
 
                </div>

                <Button  type="submit" className="mt-4 bg-blue-500" fullWidth>
                    Submit
                </Button>

            </form>
        </Card>

       </div>
       </motion.div>

       <FooterLevel/>
  
       </>
    );
}

export default contact;