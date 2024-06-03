'use client'

import React from "react";
import { Card, CardBody, Typography, Avatar} from "@material-tailwind/react";

export function FeatureSection16() {
  return (
    <section className="lg:py-28 py-10 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <Typography
          color="blue-gray"
          className="mb-2 font-bold uppercase"
        >
          Features
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-4xl"
        >
          Turn your idea into a blog
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-lg !text-gray-500"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          thoughts. If you have the opportunity to write blogs Just Write.
        </Typography>
      </div>


      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">

        <Card
          className="col-span-1 bg-black text-white overflow-hidden"
          shadow={true}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Innovative and Creative
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              We get insulted by others, lose trust for those We get back.
            </Typography>
            <img
              src="https://static.wixstatic.com/media/b917b3_b81662860f9b46829d4efe2798a74e7b~mv2.webp?w=3840&q=50"
              alt="iphone"
              widt
              className="w-full xl:h-[370px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-cover object-center"
            />
          </CardBody>
        </Card>

        <Card
          className="col-span-2 text-white bg-black overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center ">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Student Ecosystem
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-6 !text-gray-500">
              It becomes harder for us to give others hand. We get our heart by
              people we love.
            </Typography>
            <img
              src="https://static.wixstatic.com/media/b917b3_9f508f4ad62a483b96f8977917b623a0~mv2.webp"
              alt="laptop"
              className="w-full lg:h-[380px] md:h-[300px] h-[220px] lg:translate-y-16 translate-y-10 object-cover object-center"
            />
          </CardBody>
        </Card>
      </div>
     
    </section>
  );
}
export default FeatureSection16;