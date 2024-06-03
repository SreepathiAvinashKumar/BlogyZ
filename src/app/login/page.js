"use client";
import {
  Card,
  Input,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import FooterLevel from "../components/Footer";
import { useContext, useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import AlertMessage from "../components/AlertMessage";
import { motion } from "framer-motion";
import { ImgWithShadow } from "../components/ui/ImageWithShadow";
import AuthContext from "../components/AuthContext";
import Link from "next/link";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    await login(email, password);
  };

<<<<<<< HEAD
=======
  const handleSignUp = () => {
    // Your sign-up logic here
  };

  const handleSignIn = () => {
    // Your sign-in logic here
  };
>>>>>>> 4fc79af861b163f66008b9fd25bb0b1f0fddb23c

  return (
    <>
      <NavBar user={user} />
      <motion.div
        initial={{ opacity: 0.0, y: 5 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-1"
      >
        <div className="flex bg-neutral-950 flex-row py-6 justify-around justify-center items-center md:flex-wrap">
          {user && <AlertMessage status={"success"} which={"signup"} />}
          <ImgWithShadow />
          <Card
            shadow={true}
            className="max-w-[56rem] bg-neutral mb-8 max-h-[36rem] self-center p-6 items-center"
          >
            <Typography variant="h2" color="white">
              Account
            </Typography>
            <Typography color="white" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
            <form className="mt-7 !text-white max-w-screen-lg sm:w-96">
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" className="-mb-3">
                  Your Name
                </Typography>
                <Input
                  size="lg"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  placeholder="name"
                  className="!border-t-green-200 focus:!border-white !text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Email
                </Typography>
                <Input
                  type="email"
                  size="lg"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="name@mail.com"
                  className="!border-t-green-200 focus:!border-white !text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  placeholder="********"
                  className="!border-t-green-200 focus:!border-white !text-white"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div className="">
                <Button
                  onClick={handleSignIn}
                  className="mt-6 mx-2 color-white bg-blue-600"
              fullWidth  > 
                  Sign in
                </Button>
                
                <Typography className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                  Already have an account?
                  <Link href="../signup" className="font-medium m-2 text-white">
                    Sign Up
                  </Link>
                </Typography>
              </div>
            </form>
          </Card>
        </div>
      </motion.div>
      <FooterLevel />
    </>
  );
};

export default Login;
