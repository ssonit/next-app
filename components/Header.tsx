import { cn } from "@/lib/utils";
import { NextPage } from "next";

interface HeaderProps {
  classNameHeader: string;
}

const Header: NextPage<HeaderProps> = ({ classNameHeader }) => {
  return <div className={cn("", classNameHeader)}>Header</div>;
};

export default Header;
