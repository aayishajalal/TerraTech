import React from "react";
import Link from "next/link";
const Button = () => {
  return (
    <>
      <button className="text-base  px-3 py-2.5 bg-cyan-500 rounded-md text-white ">
        <Link href="#">View Dashboard</Link>
      </button>
    </>
  );
};

export default Button;
