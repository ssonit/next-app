import { NextPage } from "next";

interface HeaderProps {
  classNameHeader: string;
}

const Header: NextPage<HeaderProps> = ({ classNameHeader }) => {
  return <div className={classNameHeader}>Header</div>;
};

export default Header;
