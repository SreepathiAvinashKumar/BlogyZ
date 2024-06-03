"use client";

import Link from "next/link";
import Loading from "./Loading";
import Skeleton from "./Skeleton";
import { useState, useEffect } from "react";
import { HoverEffect } from "./card_hover_effect";

export function BlogPost({ BlogPosts }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="">
      <HoverEffect items={BlogPosts} />
    </div>
  );
}
