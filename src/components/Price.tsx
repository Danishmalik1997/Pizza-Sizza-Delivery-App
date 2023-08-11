'use client'
import React, { useEffect } from "react";
import {useState} from 'react';
type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(()=> { 
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  },[quantity,selected,options,price])
  
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold"> ${total.toFixed(2)} </h2>
      {/* Options container */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="p-2 min-w-[6rem] ring-1 ring-orange-500 rounded-md"
            key={option.title}
            style={{
               background: selected === index ? "rgb(249 115 22)" : "white",
               color: selected === index ? "white" : "orange"
            }}
            onClick={()=>setSelected(index)}
              >
            {option.title}
          </button>
        ))}
      </div>
      {/* Quantity and Add button container */}
      <div className="flex items-center flex-row justify-between ring-1 ring-orange-500 rounded-md pl-2">
        <span className="">Quantity</span>
        <div className="felx ">
          <button onClick={()=> setQuantity((prev)=> prev >1 ? prev-1 : 1)} className="mr-2">{"<"}</button>
          <span>{quantity}</span>
          <button onClick={()=> setQuantity((prev)=> prev< 9 ? prev+1 : 9)} className="ml-2">{">"}</button>
        </div>
        <div>
          <button className="p-2 uppercase bg-orange-500 text-white ring-1 ring-orange-500 rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
