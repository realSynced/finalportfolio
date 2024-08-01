import { Inter } from "next/font/google";
import "./globals.css";
import Lenis from '@/app/ui/lenis'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Made By Dric | Portfolio",
  description: "Welcome to Dric's Portfolio!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary overflow-x-hidden`}>
        <Lenis>
          {children}
        </Lenis>
      </body>
    </html>
  );
}
