"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Carticon from "./Carticon";
const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {open ? (
        <Image
          onClick={() => setOpen(false)}
          src="/close.png"
          className="cursor-pointer"
          height={20}
          width={20}
          alt=""
        />
      ) : (
        <Image
          onClick={() => setOpen(true)}
          className="cursor-pointer"
          src="/open.png"
          height={20}
          width={20}
          alt=""
        />
      )}
      {open && <div className="bg-yellow-300 w-full mt-2 z-10 text-xl flex gap-10 flex-col items-center justify-center absolute left-0 h-[calc(100vh-6rem)]">
        {links.map((link) => (
          <Link onClick={() => setOpen(false)} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        {!user ? (
          <Link onClick={() => setOpen(false)} href="/login">
            Login
          </Link>
        ) : (
          <Link onClick={() => setOpen(false)} href="/orders">
            orders
          </Link> 
        )}
        <Carticon />
      </div>} 
    </div>
  );
};

export default Menu;
