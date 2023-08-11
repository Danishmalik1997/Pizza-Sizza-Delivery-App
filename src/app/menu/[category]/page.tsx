import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-orange-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full even:bg-fuchsia-50 h-[60vh] border-r-2 border-b-2 border-orange-500 sm:w-1/2 lg:w-1/3 p-4 flex-col justify-between group"
        >
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" className=" object-contain" fill />
            </div>
          )}

          {/* Text Container  */}
          <div className="flex item-center justify-between font-bold">
            <h1 className="text-2x uppercase p-2"> {item.title} </h1>
            <h2 className="group-hover:hidden text-xl"> {item.price} </h2>
            <button className="hidden group-hover:block uppercase bg-orange-500 text-white p-2 rounded-md">
              Add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
