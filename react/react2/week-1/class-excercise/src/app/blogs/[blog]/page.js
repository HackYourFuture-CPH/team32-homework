"use client";

import { usePathname } from "next/navigation";

export default function MyBlog() {
  const pathname = usePathname();

  const path_title = pathname?.split('/').pop(); // Extract last part of path

  const title = path_title
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return <p>Current pathname: {title}</p>;
}
