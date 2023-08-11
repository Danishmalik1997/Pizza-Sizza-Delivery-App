import Link from "next/link";
import { pizzas } from "@/data";
import React from "react";
import Menu from "./Menu";
import Carticon from "./Carticon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className= "lg:px-10 h-10 p-4 font-bold flex text-orange-500 items-center justify-between md:h-24 border-b-2 border-orange-500 uppercase">
      <div className="hidden md:flex  gap-4">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href={`/menu/${pizzas.id}`}>Products</Link>
      </div>
      <div className="text-xl font-bold">
        <Link href="/">Pizza Sizza</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <div className="md:absolute top-2 right-3 lg:static flex bg-orange-300 cursor-pointer items-center gap- px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 789 </span>
        </div>
        <div className="gap-2">
          {!user ? <Link href="/login">Login</Link> 
          :
          <Link href="/orders">Orders</Link>
          }        
        </div>
        <Carticon />
      </div>
    </div>
  );
};

export default Navbar;
