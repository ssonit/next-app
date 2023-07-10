import SignIn from "@/components/SignIn";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NextPage } from "next";
import Link from "next/link";

interface pageProps {}

const page: NextPage<pageProps> = ({}) => {
  return (
    <div>
      <Link
        href={"/"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "self-start space-y-6"
        )}
      >
        Home
      </Link>

      <SignIn></SignIn>
    </div>
  );
};

export default page;
