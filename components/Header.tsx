import React from "react";
import Link from "next/link";
import { Bebas_Neue } from "@next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <style jsx global>
        {`
          .logo {
            font-family: ${bebasNeue.style.fontFamily};
          }
        `}
      </style>
      <div className="relative bg-emerald-900 mb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <span className="sr-only">JapanimationDB</span>
                <h1 className="logo text-3xl uppercase">
                  Japanimation<span className="font-bold text-black">DB</span>
                </h1>
              </Link>
            </div>
            {/* <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
