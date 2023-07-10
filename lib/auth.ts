import { NextAuthOptions, getServerSession } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [],
  pages: {
    signIn: "/sign-in",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
