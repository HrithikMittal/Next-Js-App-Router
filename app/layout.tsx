import { ReactNode } from "react";
import Link from "next/link";
import "./global.css";
import NavBar from "../components/nav-bar";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body className="flex flex-col px-4 py-2 min-h-screen bg-orange-50">
        <header>
          <NavBar />
        </header>
        <div className="flex flex-1 py-3"> {children}</div>
        <div className="border-t py-3 text-center text-xs">
          Please checkout me on{" "}
          <a
            href="https://adhikanshmittal.com"
            className="text-orange-800 hover:underline"
          >
            adhikanshmittal.com
          </a>
        </div>
      </body>
    </html>
  );
}
