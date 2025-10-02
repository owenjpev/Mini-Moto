import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface MainProps {
    image?: string;
    noPadding?: boolean;
    noImage?: boolean
    children: ReactNode;
}

export default function Main({ image = "/background.jpg", noPadding, noImage, children }: MainProps) {
    return (
        <>
            <Header />
            <main className={`w-full min-h-[calc(100vh-64px)] ${noPadding ?? "px-6 py-16"} flex flex-col justify-center items-center bg-custom text-white`}>
                {children}
            </main>
            <Footer />
        </>
    );
}
