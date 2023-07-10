import { NextPage } from "next";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface NavbarProps {}

const Navbar: NextPage<NavbarProps> = ({}) => {
  return (
    <div>
      <Link href={"/sign-in"} className={buttonVariants()}>
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;
