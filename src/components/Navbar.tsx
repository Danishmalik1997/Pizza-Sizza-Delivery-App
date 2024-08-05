import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Carticon from "./Carticon";
import PizzaImage from '../../public/pizza-sizza.jpg'
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className= "lg:px-10 h-10 p-4 font-bold flex text-orange-500 items-center justify-between md:h-24 border-b-2 border-orange-500 uppercase">
      <Link href='./' className="text-xl font-bold flex flex-col items-center">
      <Image src={PizzaImage} alt="pizza image" width={100} height={50}/>
      <p>Sizza</p>
      </Link>
      
      <div className="hidden md:flex  gap-4">

      </div>

      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center">
      <Link href="/menu">Menu</Link>
      <Link href="/menu/burgers">Products</Link>
      <Link href="/orders">Orders</Link>            
      <Carticon />
      </div>
    </div>
  );
};

export default Navbar;
