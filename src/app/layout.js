import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["400", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` grid place-items-center h-screen`}>{children}</body>
    </html>
  );
}
