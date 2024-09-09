import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "../ProductCart";
// import food from "../../assets/image/food bg.jpg";
import foods from "../../assets/image/лапша.jpg";

const Menu = () => {
  const { product } = useSelector((s) => s.pro);
  console.log(product);
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="flex items-center justify-center text-white flex-col gap-[40px]">
          <div className="w-full flex  items-center justify-between">
            <img src={foods} alt="" className="w-[200px]" />
            <div className="flex items-center flex-col text-center">
              <h1 className="text-5xl font-bold">Welcome to Kulikov</h1>
              <p>
                Welcome to TheMealDB: An open, crowd-sourced database of Recipes
                from around the world. We also offer a free recipe API for
                anyone wanting to use it, with additional features for
                subscribers.
              </p>
              <button className=" flex items-center justify-center text-white font-bold border-2 border-solid border-green-700  py-[5px] w-[130px] rounded-[10px] bg-[orange]">
                <p className="text-green-700">М</p>Банк
              </button>
            </div>
            <img src={foods} alt="" className="w-[200px]" />
          </div>
          <div className="border-b-2 border-solid w-[1234px]"></div>

          <div className=" flex flex-col items-center gap-5">
            <input
              type="text"
              placeholder="Search"
              className="w-[1221px] h-[30px] py-5 px-[30px] rounded-[10px] bg-slate-500 text-white outline-none"
            />
            <button className="w-[321px]  py-3 rounded-[10px] bg-slate-500 text-white outline-none">
              Search
            </button>
          </div>
          <div className="border-b-2 border-solid border-white w-[1234px]"></div>
          <div className="flex items-center justify-center flex-wrap gap-[20px]">
            {product.map((el) => (
              <ProductCart el={el} />
            ))}
          </div>
        </div>
        <div className="py-[50px] flex items-center justify-center flex-col">
          <div className="w-full border-b-2 border-[white]"></div>
          <h1 className="text-white text-2xl font-bold">Coffee And Tea</h1>
        </div>
      </div>
    </div>
  );
};

export default Menu;
