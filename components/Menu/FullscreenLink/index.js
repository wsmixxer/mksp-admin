import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { classnames } from "tailwindcss-classnames";

export default ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <a
        className={classnames(
          "flex mt-1 items-center px-2 py-2 text-base font-medium leading-6 transition duration-150 ease-in-out rounded-md group focus:outline-none focus:bg-gray-700",
          {
            "text-white bg-mixxer-positive-red": isActive === true,
            "text-gray-300 hover:text-white hover:bg-gray-800 focus:text-white":
              isActive == false
          }
        )}
      >
        {children}
      </a>
    </Link>
  );
};
