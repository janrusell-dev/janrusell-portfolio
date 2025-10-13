import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Jan Rusell Engracial | Portfolio",
  description: "Code-in-Motion Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-neutral-50`}
      >
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem
        disableTransitionOnChange>
        
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <Header/>
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <Footer/>
          
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
