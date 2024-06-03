'use client'
import { Button, Input, Typography } from "@material-tailwind/react";

export function NewsLetter3() {
  return (
    <section className="py-2 container max-w-4xl">
      <div className="grid ">
        <div className="flex items-start flex-col  gap-4 md:flex-row">
          <Input color="white" className="text-white !border-t-green-200 focus:!border-white !text-white " placeholder="Enter your Email" />
          <Button className="flex-shrink-0 md:w-fit w-full">subscribe</Button>
        </div>
      </div>
    </section>
  );
}
export default NewsLetter3;