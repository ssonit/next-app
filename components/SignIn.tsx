import { NextPage } from "next";
import { Icons } from "./Icons";

interface SignInProps {}

const SignIn: NextPage<SignInProps> = ({}) => {
  return (
    <div>
      <Icons.google className="w-8 h-8 mx-auto"></Icons.google>
      <h1 className="tracking-tight">Welcome back</h1>
    </div>
  );
};

export default SignIn;
