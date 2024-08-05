import React from "react";
import Link  from "next/link";
import Image from "next/image";
const Carticon = () => {
  return (
    <Link href="/cart" className="flex flex-row gap-2 items-center">
      <Image src="/cart.png" height={20} width={20} alt="" />
      <span> Cart(0) </span>
    </Link>
  );
};

export default Carticon;
