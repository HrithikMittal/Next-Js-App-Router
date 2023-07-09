import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <header>[header]</header>
        <div> {children}</div>
        <div>[footer]</div>
      </body>
    </html>
  );
}
