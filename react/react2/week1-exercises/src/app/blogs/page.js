"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Blog() {
  const pathname = usePathname();
  return (
    <div>
      <h1>Blog Page</h1>
      <p>Welcome to the blog page!</p>
      <nav>
        <ul>
          <li className={pathname === "/blogs" ? "active" : ""}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className={pathname === "/blogs/new-post" ? "active" : ""}>
            <Link href="/blogs/new-post">New Post</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
