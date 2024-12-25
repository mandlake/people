import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="header">
      <div className="container mx-auto flex justify-between items-center p-3">
        <Link href={"/"} className=" text-blue-600 text-xl font-bold">
          SARAMIN
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href={"/login"}>로그인</Link>
            </li>
            <li>
              <Link href={"/join"}>회원가입</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
