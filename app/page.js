"use client";
import React from "react";
import Header from "./Header/page";
import Card from "./Card/page";
import Button from "./Button/page";

const page = () => {
  return (
    <>
      <Header />
      <div className="2xl:container">
        <div className="w-[90%] mx-auto grid grid-cols-1 md: grid-cols-2">
          <div className=" flex flex-col py-18 px-18 md:flex-row justify-between items-center space-y-2 py-24 px-24">
            <div className="space-y-9 py-5 mr-32">
              <h1 className="text-2xl  md:text-3xl  lg:text-5xl mb-4 font-bold">
                Elevate Your Business with our Dashboard Solution
              </h1>
              <p className="text-xl md:text-base lg:text-xl mb-16 md:mb-28">
                Experience interactive maps, pinpoint BC points, search via
                pincode, and visualize data with dynamic charts. Empower your
                journey effortlessly!
              </p>
              <Button />
            </div>
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
