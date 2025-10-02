"use client"

import React, { useState } from "react";
import Link from "next/link";
import { ClipboardIcon, InformationCircleIcon, ChatBubbleLeftIcon, CreditCardIcon, UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className={`sticky top-0 z-50 w-full border-b border-zinc-700 bg-black`}>
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
                <Link href="/" className="text-lg font-bold tracking-wide text-white">
                    <img src="/logo.png" className="h-14" />
                </Link>
                <nav className="hidden items-center gap-10 text-sm text-white md:flex" aria-label="Primary">
                    <Link href="/events" className="flex justify-center items-center gap-1">
                        <ClipboardIcon className="h-4 w-4" />
                        <p>Events</p>
                    </Link>
                    <Link href="/memberships" className="flex justify-center items-center gap-1">
                        <CreditCardIcon className="h-4 w-4" />
                        <p>Memberships</p>
                    </Link>
                    <Link href="/requirements" className="flex justify-center items-center gap-1">
                        <InformationCircleIcon className="h-4 w-4" />
                        <p>Info / Requirements</p>
                    </Link>
                    <Link href="/contact" className="flex justify-center items-center gap-1">
                        <ChatBubbleLeftIcon className="h-4 w-4" />
                        <p>Contact</p>
                    </Link>
                </nav>
                <div className="hidden md:flex justify-center items-center gap-4 text-white">
                    <ShoppingCartIcon className="h-6 w-6" />
                    <UserCircleIcon className="h-6 w-6" />
                </div>
                <button type="button" onClick={() => setOpen(v => !v)} className="inline-flex items-center rounded-md p-2 text-gray-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 md:hidden" aria-label="Toggle menu" aria-expanded={open}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${open ? "hidden" : "block"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${open ? "block" : "hidden"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <div className={`md:hidden ${open ? "block" : "hidden"}`}>
                <div className="space-y-2 border-t border-zinc-700 bg-black p-6 text-white text-lg">
                    <Link href="/events" className="flex justify-start items-center gap-2">
                        <ClipboardIcon className="h-5 w-5" />
                        <p>Events</p>
                    </Link>
                    <Link href="/memberships" className="flex justify-start items-center gap-2">
                        <CreditCardIcon className="h-5 w-5" />
                        <p>Memberships</p>
                    </Link>
                    <Link href="/requirements" className="flex justify-start items-center gap-2">
                        <InformationCircleIcon className="h-5 w-5" />
                        <p>Info / Requirements</p>
                    </Link>
                    <Link href="/contact" className="flex justify-start items-center gap-2 mb-8">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        <p>Contact</p>
                    </Link>
                    <Link href="/cart" className="flex justify-start items-center gap-2">
                        <ShoppingCartIcon className="h-5 w-5" />
                        <p>Cart</p>
                    </Link>
                    <Link href="/account" className="flex justify-start items-center gap-2">
                        <UserCircleIcon className="h-5 w-5" />
                        <p>Log in</p>
                    </Link>
                </div>
            </div>
        </header>
    );
}
