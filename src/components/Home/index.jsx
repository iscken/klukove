import React from "react";
import { useSelector } from "react-redux";
import HomeCart from "../HomeCart";
// import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { basket } = useSelector((s) => s.bas);
  console.log(basket);
  return (
    <div className="py-[50px]">
      <div className="container">
        <div className="">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-2xs text-[white]  uppercase bg-gray-900 dark:bg-gray-700 dark:text-gray-200 cursor-pointer">
              <tr>
                <th scope="col" class="px-16 py-3">
                  <span class="sr-only">Image</span>
                </th>
                <th scope="col" class="px-6 py-3">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty
                </th>
                <th scope="col" class="px-6 py-3">
                  Price
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            {basket.map((el, idx) => (
              <HomeCart el={el} key={idx} />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
