'use client'
import { Alert, Button } from "@material-tailwind/react";
import React from "react";

 
 function AlertMessage({which,status}) {

    const [open, setOpen] = React.useState(true);
   
    return (
      <>
        <Alert color={status === "success" ? "green" : "red"} className="absolute top-[6rem] my-[1px] z-10"
          open={open}
          onClose={() => setOpen(false)}
          animate={{
            mount: { y: 0 },
            unmount: { y: 100 },
          }}
        >

      { which === "signup" ? "Signup Created Successfully"
      : which === "signin" ? " Login Created Successfully"
      : which === "create-blog" ? "Blog Created Successfully "
      : "Neither"}
        </Alert>
      </>
    );
  }



export default AlertMessage;