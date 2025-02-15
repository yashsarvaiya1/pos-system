"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === "/" ? "mr-4 font-bold" : "mr-4 text-blue-500"}>
        Home
      </Link>
      <Link href="/about" className={pathname === "/about" ? "mr-4 font-bold" : "mr-4 text-blue-500"}>
        About Us
      </Link>
      <Link href="/products/1" className={pathname.startsWith("/products/1") ? "mr-4 font-bold" : "mr-4 text-blue-500"}>
        Product 1
      </Link>
    </nav>
  );
}