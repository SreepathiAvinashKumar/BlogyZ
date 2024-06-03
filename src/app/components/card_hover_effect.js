'use client'
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../utils/cn";
import Image from "next/image";

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const MAX_WORDS = 10;
  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(" ") + "...";
    }
    return content;
  };

  function stripHtmlTags(html) {
    // Create a temporary element to parse the HTML
    var tempElement = document.createElement("div");
    tempElement.innerHTML = html;

    // Return the text content of the temporary element
    return tempElement.textContent || tempElement.innerText || "";
  }

  const Card = ({ className, children }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full flex p-3 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
          className
        )}
      >
        <div className="relative z-50 ">
          <div className="p-3 flex flex-col justify-center items-center">{children}</div>
        </div>
      </div>
    );
  };

  const CardTitle = ({ className, children }) => {
    return (
      <h5
        className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}
      >
        {children}
      </h5>
    );
  };

  const CardDescription = ({ className, children }) => {
    return (
      <p
        className={cn(
          "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
          className
        )}
      >
        {children}
      </p>
    );
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10",
        className
      )}
    >
      {items &&
        items.map((item, idx) => (
          <Link
            href={`../blog/${item.slug}`}
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200  dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <Card className="">
              <Image alt="Car_Photo" src={item.image} width={300} height={300} />
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>
                {stripHtmlTags(truncateContent(item.content))}
              </CardDescription>
            </Card> 
          </Link>
        ))}
    </div>
  );
};

export { HoverEffect };
