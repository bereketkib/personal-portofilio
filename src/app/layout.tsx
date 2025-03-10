import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "next-themes";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bereket Jenay - Software Developer",
  description:
    "Personal portfolio website of Bereket Kibreab, a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className="bg-white dark:bg-gray-900"
    >
      <body
        className={`${montserrat.variable} min-h-screen flex flex-col bg-white dark:bg-gray-900 font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
            <ScrollProgress />
          </div>
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
