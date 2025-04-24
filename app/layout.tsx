import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Happy birthday to Ayo & Nike Oyekola",
  description: "Great day celebrating the Oyekolas' birthday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}
