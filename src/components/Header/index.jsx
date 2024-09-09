import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/image/kulikovlogo.png";

const Header = () => {
  return (
    <div className="py-[20px] bg-[#59084d]">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="">
            <a href="/admin">
              <img src={logo} alt="" />
            </a>
          </div>
          <nav className="text-2xl flex items-center gap-[30px] text-[#c330b2]">
            <Link to="/Menu">МЕНЮ</Link>
            <Link to="/Home"> ВСЕ ЗАКАЗЫ</Link>
            <Link to="/tort">ТОРТЫ</Link>
            <input
              type="text"
              placeholder="Search"
              className="w-[150px] outline-none border-none rounded-[8px] py-[2px] px-[10px]"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
