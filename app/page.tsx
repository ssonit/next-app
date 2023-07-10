"use client";

import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";

interface HomeProps {}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <div>
      <Icons.user className="w-8 h-8"></Icons.user>
      <Button variant={"default"} size={"lg"}>
        Button
      </Button>
    </div>
  );
};

export default Home;
