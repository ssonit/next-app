import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen pt-12 antialiased bg-slate-50">
        <div className="container h-full mx-auto max-w-7xl">
          Navbar
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
