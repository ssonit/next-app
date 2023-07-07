"use client";

import { Button } from "@/components/ui/Button";
import { NextPage } from "next";

interface HomeProps {}

const Home: NextPage<HomeProps> = ({}) => {
  return (
    <div>
      <Button variant={"subtle"} size={"lg"}>
        Button
      </Button>
    </div>
  );
};

export default Home;
