import type { Metadata } from "next";
import { Toaster } from 'sonner';
import { Montserrat, } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/components/NavBar";
import Footer from "./ui/components/Footer";
// import { userLogOut, userLogIn, userRegister} from '@/app/lib/userLogic'

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SnapEvent",
  description: "Book tickets. Attend Events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col gap-4`}>
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
