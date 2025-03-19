"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const pathname = usePathname();

  return (
    <div className="mt-2 flex flex-col gap-2 text-center">
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="focus:border-grey-500 focus:ring-grey-500 dark:focus:border-grey-500 dark:focus:ring-grey-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:ring-4 dark:border-gray-600 dark:bg-black dark:text-white dark:placeholder-gray-400"
        />
      </div>
      <div className="mb-4 flex gap-2">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");

          return (
            <Link
              href={link.href}
              key={link.name}
              className={`rounded-sm px-3 py-2 md:p-0 dark:text-white ${
                isActive
                  ? "bg-blue-700 px-3 py-2 text-white md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  : "text-gray-900 hover:bg-gray-100 md:border-0 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {children}
    </div>
  );
}
