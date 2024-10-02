"use client"
import React from "react";
import Link from "next/link";
import FixedWidewidth from "@/components/FixedWidewidth";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className=" border-b border-zinc-200 fixed w-[100%] top-0 backdrop-blur-md p-4">
      <FixedWidewidth className="flex justify-between">
        <p>Dokchat</p>
              <div className="flex gap-[1rem]">
                  <Link href='/pricing' className={buttonVariants({size:'sm',variant:'ghost'})}>Pricing</Link>
          <LoginLink className={buttonVariants({size:'sm',variant:'ghost'})}>Sign-in</LoginLink>
          <RegisterLink className={buttonVariants({size:'sm'})}>Get Started</RegisterLink>
        </div>
      </FixedWidewidth>
    </nav>
  );
};

export default Navbar;
