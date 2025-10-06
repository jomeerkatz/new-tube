"use client";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "lucide-react";
const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button>
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};

export default AuthButton;
