import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
 
export function PaginationPart() {
  const [active, setActive] = React.useState(1);
 
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () => setActive(index),
    });
 
  const next = () => {
    if (active === 5) return;
 
    setActive(active + 1);
  };
 
  const prev = () => {
    if (active === 1) return;
 
    setActive(active - 1);
  };
 
  return (
    <div className="flex bg-neutral-950  justify-center  items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 text-red"
        onClick={prev}
        disabled={active === 1}
      >
        Previous
      </Button>
      
      <div className="flex items-center gap-2 text-red">
        <IconButton className="text-red" {...getItemProps(1)}>1</IconButton>
        <IconButton className="text-red" {...getItemProps(2)}>2</IconButton>
        <IconButton className="text-red" {...getItemProps(3)}>3</IconButton>
        <IconButton className="text-red" {...getItemProps(4)}>4</IconButton>
        <IconButton className="text-red" {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 text-red"
        onClick={next}
        disabled={active === 5}
      >
        Next
      </Button>
    </div>
  );
}