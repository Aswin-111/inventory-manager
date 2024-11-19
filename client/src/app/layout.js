"use client"
import localFont from "next/font/local";
import "./globals.css";
import SideBar from "./snippets/sidebar/sidebar";


import util from './utils/util'
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Dorakart",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col overflow-hidden`}
      >


<div className="">

        <div className="w-full h-[13vh] px-10 flex items-center justify-between text-xl">

          <div className="ml-[5rem] font-semibold">Dorakart 🛒</div>

        
        <div>
      
        </div>
        </div>

        <div className="ml-10 w-[16vw] h-[80vh] bg-slate-400 text-white overflow-hidden rounded-xl">
          <SideBar />
        </div>


        
      
      <div className="w-[82vw] absolute top-0 left-[19vw] h-[100%] overflow-hidden scroll "
        >{children}</div>


</div>
      </body>
    </html>
  );
}
