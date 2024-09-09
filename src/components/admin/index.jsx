import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/Reduser/KlukCreatSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  function getObject() {
    let obj = {
      id: Date.now(),
      image,
      name,
      price,
    };
    dispatch(getProduct(obj));
    setImage("");
    setName("");
    setPrice("");
  }
  return (
    <div className="">
      <div className="cantainer">
        <div className="flex items-center justify-center flex-col gap-3 ">
          <input
            className="py-3 px-[10px] w-[321px] bg-transparent border-b-2 outline-none text-white"
            type="text"
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image"
            value={image}
          />
          <input
            className="py-3 px-[10px] w-[321px] bg-transparent border-b-2 outline-none text-white"
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            value={name}
          />
          <input
            className="py-3 px-[10px] w-[321px] bg-transparent border-b-2 outline-none text-white"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="price"
            value={price}
          />
          <button
            className="py-2 w-[200px] border-2 border-solid border-gray-400 text-white font-bold outline-none"
            onClick={getObject}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
