"use client"
import { Shield } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function Header() {

    const pathname = usePathname();
    const isHomePage = pathname === "/";

  return (
    <div className={`p-4 flex justify-between items-center ${ isHomePage ? "bg-blue-50": "bg-white border-b border-blue-50"}`}>
      <Link href="/" className="flex items-center">
        <Shield className="w-6 h-6 text-blue-600 mr-2" />
        <h1 className=" text-xl font-semibold">DatumDex</h1>
      </Link>

      <div className=" flex items-center space-x-4">
        <SignedIn>
          <Link href="/receipts">
            <Button variant="outline">My Receipts</Button>
          </Link>
          <Link href="/manage-plan">
            <Button variant="outline">Manage Plan</Button>
          </Link>
          <UserButton />
        </SignedIn>

        <SignedOut>
           <SignInButton mode="modal">
             <Button>Login</Button>
           </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
