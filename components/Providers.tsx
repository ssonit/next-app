"use client";

import { NextPage } from "next";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: NextPage<ProvidersProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Providers;
