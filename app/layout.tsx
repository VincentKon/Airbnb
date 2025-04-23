import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ClientOnly from "@/components/ClientOnly";
import Modal from "@/components/modals/Modal";
import RegisterModal from "@/components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import prismadb from "./libs/prismadb";
import LoginModal from "@/components/modals/LogInModal";
import getCurrentUser from "./actions/getCurrentUser";
import RentModal from "@/components/modals/RentModal";
import SearchModal from "@/components/modals/SearchModal";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airbnb",
  description:
    "Online marketplace that connects hosts with travelers looking for unique stays and experiences.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        <ClientOnly>
          <ToasterProvider></ToasterProvider>
          <SearchModal></SearchModal>
          <RegisterModal></RegisterModal>
          <LoginModal></LoginModal>
          <RentModal></RentModal>
          <Navbar currentUser={currentUser}></Navbar>
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
