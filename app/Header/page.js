import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-between px-44 py-10 mb-3 bg-cyan-500 text-white">
        <h2>Pronalysis</h2>
        <div className="flex gap-3 text-slate-50">
          <Link href="/Language">Language</Link>
        </div>
      </div>
    </>
  );
};

export default Header;
