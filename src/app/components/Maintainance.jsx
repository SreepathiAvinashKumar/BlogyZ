'use client'

import React from "react";
import { Typography } from "@material-tailwind/react";

export function MaintenanceSectionPage({siteName}) {
  return (
    <div className="h-screen px-8 mx-auto grid place-items-center text-center">
      <div>
       
       <h1>{siteName} page</h1>
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-7 !text-2xl md:text-3xl max-w-xl mx-auto !leading-snug"
        >
          We&apos;re currently undergoing maintenance to improve your
          experience.
        </Typography>
        <Typography className="!mt-4 md:max-w-2xl text-[18px] font-normal text-gray-500">
          Please bear with us while we make these enhancements. We&apos;ll be
          back shortly. Thank you for your patience!
        </Typography>
      </div>
    </div>
  );
}

export default MaintenanceSectionPage;