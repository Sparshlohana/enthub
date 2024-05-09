import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enthub",
  description: "Its an entertainment hub for all the movie lovers made by $par$h",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/movie.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
