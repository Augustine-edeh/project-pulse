import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Project Pulse: A Next.js Project Management Tool",
  description:
    "Project Pulse is a personal task management application built with Next.js. Designed to help you organize, track, and prioritize your daily tasks effortlessly, Project Pulse provides a user-friendly interface and powerful features to keep you on top of your personal goals and deadlines. Manage your to-do list, set reminders, and monitor your progress with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="modal-root"></div>
        {children}
      </body>
    </html>
  );
}
