// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import ReduxProvider from "@/providers/ReduxProvider";
// import { AuthProvider } from "@/context/AuthContext"; // ✅ Auth context

import ReduxProvider  from "./providers.jsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Transaction App",
  description: "Secure app",
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
         
            {children}
          
        </ReduxProvider>
      </body>
    </html>
  );
}
