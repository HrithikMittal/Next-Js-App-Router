import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <header>[header]</header>
      <body>{children}</body>
      <footer>[footer]</footer>
    </html>
  );
}
