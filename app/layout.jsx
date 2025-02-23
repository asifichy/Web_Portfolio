import { Inter } from 'next/font/google';
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asif's Portfolio",
  description: "Created with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className='{inter.className}'>
        <ThemeProvider attribute="class" defaultTheme="light"/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
