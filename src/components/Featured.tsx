import { featuredProducts } from "@/data";
import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll scroll-smooth mt-4 text-orange-500">
      <div className="w-max flex ">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="md:w-[50vw] p-4 hover:bg-fuchsia-50 md:h-[60vw] xl:w-[33vw] xl:h-[54vw] w-screen h-[60vh] flex flex-col items-center justify-around"
          >
            {/* Image container */}
            {item.img && (
              <div className=" relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* text container */}
            <div className="flex flex-1 flex-col items-center justify-center gap-4">
              <h1 className="text-xl font-bold uppercase"> {item.title} </h1>
              <p className="text-center p-4 2xl:p-8"> {item.desc} </p>
              <span className="text-lg font-bold ">₹{item.price} </span>
              <button className="bg-orange-500 w-contain p-3 rounded-2xl text-white">
                     Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
