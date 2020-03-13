import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const activeStyles = "text-white bg-gray-900";
  const inactiveStyles =
    "mt-1 text-gray-300 hover:text-white hover:bg-gray-700 focus:text-white";
  const sharedStyles =
    "flex items-center px-2 py-2 text-base font-medium leading-6 transition duration-150 ease-in-out rounded-md group focus:outline-none focus:bg-gray-700 ";

  return (
    <Link href={href}>
      <a className={sharedStyles + (isActive ? activeStyles : inactiveStyles)}>
        {children}
      </a>
    </Link>
  );
};
