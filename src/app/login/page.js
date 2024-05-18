'use client'

import {
  Card,
  Input,
  Button,
  Typography,
  Spinner
} from "@material-tailwind/react";
import FooterLevel from "../components/Footer";
import { ID, account, isUserLoggedIn } from "../components/appwriteConfig";
import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import AlertMessage from "../components/AlertMessage";
import { motion } from "framer-motion";
import { ImgWithShadow } from "../components/ui/ImageWithShadow";
import { useRouter } from "next/navigation";

function login() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  // const [isLoading, setLoading] = useState(true);
  const [signupVal,setSignupVal] = useState(false);
  const [isUserLog, setUserLog] = useState(false);

  async function getUser() {
    const user = await getLoggedInUser();

    if(user){
        return true;
    }
        return false;
  }

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
          setUserLog( await getUser());
      } catch (error) {
          console.error('Error checking user login status:', error);
      }
    };
    checkUserLogin();

  }, []);


  
}


  const handleSignIn = async () => {
    try {
      await account.createEmailPasswordSession(email, password);
      setUserLog(true);
      setEmail('');
      setPassword('');
      // router.push('/');
        } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignUp = async () => {
    try {
      await account.create(ID.unique(), email, password, username);
      await handleSignIn();
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await account.deleteSession('current');
      setUser(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };


  return (
    <>
    <NavBar userStatus={isUserLog} updateUserState={handleClick} />
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
    <div className="flex bg-neutral-950 flex-row justify-around justify-center items-center md:flex-wrap ">
     
      {signupVal && <AlertMessage status={"success"} which={"signup"} />}
    <ImgWithShadow/>

      <Card  shadow={true} className="max-w-[56rem] bg-neutral mb-8  max-h-[36rem] self-center  p-6  items-center">

        <Typography variant="h2" color="white">Account</Typography>
        <Typography color="white" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>


        <form className="mt-7  !text-white  max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" className="-mb-3">
              Your Name
            </Typography>

            <Input
              size="lg"
              onChange={(e) => { setUsername(e.target.value) }}
              placeholder="name"
              className=" !border-t-green-200 focus:!border-white !text-white"
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
              placeholder="name@mail.com"
              className=" !border-t-green-200 focus:!border-white !text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => { setEmail(e.target.value) }}
            />

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>

            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-green-200 focus:!border-white !text-white"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>

          <div className="flex justify-center">
          <Button onClick={handleSignUp} className="mt-6 mx-2 color-white bg-blue-600" >
            Sign up

          </Button>

          <Button onClick={handleSignIn} className="mt-6 mx-2 bg-blue-600">
            Sign In
          
          </Button>
          </div>
        </form>
      </Card>
    </div>
    </motion.div>
      <FooterLevel/>
    </>
  );


export default login;
