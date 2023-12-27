"use client";

import React from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { getFromLocalStorage } from "@/utils/local-storage";
import { logoutUser } from "@/services/authService";
import { useSelector } from "react-redux";

const navbarData = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Shop", path: "/" },
  { id: 3, title: "About", path: "/" },
  { id: 4, title: "Contact", path: "/" },
];

const Header = () => {
  const userInfo = getFromLocalStorage("userInfo");
  const totalCart = useSelector((state: any) => state.cartReducer.cart.length);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <Navbar className="container mx-auto" rounded={true}>
      <Navbar.Brand href="/">
        <span className="text-3xl font-bold text-cyan-500">ecommerce</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <Link
          className="text-2xl text-cyan-500 hover:text-cyan-700 duration-500 flex items-center"
          href="/cart">
          <FaShoppingCart />
          <span>
            <sup className="text-[16px] text-cyan-900">({totalCart})</sup>
          </span>
        </Link>
        {userInfo ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img={
                  "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                }
                rounded={true}
              />
            }>
            <Dropdown.Header>
              <span className="block text-sm">{userInfo.fullName}</span>
              <span className="block truncate text-sm font-medium">
                {userInfo.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item>
              <a className="w-full" onClick={handleLogout} href="/">
                Sign out
              </a>
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link href="/login">
            <button
              // onClick={handleLogin}
              className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 hover:bg-cyan-500 rounded">
              LOGIN
            </button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {navbarData.map((item) => (
          <Navbar.Link key={item.id} href={item.path}>
            <span className="text-lg hover:text-cyan-500 duration-500">
              {item.title}
            </span>
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
