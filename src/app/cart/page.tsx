import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row flex flex-col text-orange-500">
      {/* Product container */}
      <div className="h1/2 gap-4 lg:px-20 xl:px-40 lg:h-full lg:w-2/3 p-4 flex flex-col lg:justify-center">
        {/* Single item */}
        <div className="flex items-center justify-between mt-4 ">
          <Image src="/temporary/p1.png" height={100} width={100} alt="" />
          <div>
            <h1 className="uppercase text-xl font-bold "> Silica </h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer ">X</span>
        </div>

        {/* Single item */}
        <div className="flex items-center justify-between mt-4 ">
          <Image src="/temporary/p1.png" height={100} width={100} alt="" />
          <div>
            <h1 className="uppercase text-xl font-bold "> Silica </h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer ">X</span>
        </div>

        {/* Single item */}
        <div className="flex items-center justify-between mt-4 ">
          <Image src="/temporary/p1.png" height={100} width={100} alt="" />
          <div>
            <h1 className="uppercase text-xl font-bold "> Silica </h1>
            <span className="">Large</span>
          </div>
          <h2 className="font-bold">$79.90</h2>
          <span className="cursor-pointer ">X</span>
        </div>
      </div>

      {/* Payment container */}
      <div className="h1/2 lg:px-20 xl:px-40 2xl:text-xl p-4 bg-fuchsia-50 flex lg:h-full lg:w-1/3 flex-col gap-4 justify-center">
        <div className="flex justify-between 2xl:gap-40">
          <span className=""> Subtotal (3items) </span>
          <span className=""> $81.73</span>
        </div>
        <div className="flex justify-between 2xl:gap-44">
          <span className=""> Service cost</span>
          <span className="text-green-500">Free!</span>
        </div>
        <div className="flex justify-between 2xl:gap-40">
          <span className=""> Total(Inc. GST) </span>
          <span className="text-green-500"> Free! </span>
        </div>
        <hr className="" />
        <div className="flex justify-between 2xl:gap-40">
          <span className=""> Delivery </span>
          <span className=""> $81.70 </span>
        </div>
        <button className="bg-orange-500 self-end text-white p-3 rounded-md">
          checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
