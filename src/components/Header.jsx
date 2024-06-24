import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="p-3 px-5 flex justify-between shadow-sm">
      <img src="/logo.svg" width={45} height={100} />
      {isSignedIn ? (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard"}>
            <Button variant="outline">DashBoard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
