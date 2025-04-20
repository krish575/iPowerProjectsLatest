import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "i-Power Projects",
  description: "Operated by Trunal Patel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="en">
      <body>
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  );
}
