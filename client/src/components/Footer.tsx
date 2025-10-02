// Footer.tsx
import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full bg-black text-zinc-300 border-t border-zinc-700">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="inline-block">
            <span className="text-white text-lg font-semibold tracking-tight">QLD Mini Moto</span>
          </Link>
          <p className="mt-3 text-sm text-zinc-400">Grassroots pocket-bike racing across Queensland — safe, affordable, and seriously fun for all ages.</p>
          <div className="mt-4 flex items-center gap-3">
            <Link href="https://www.youtube.com/@yourchannel" aria-label="YouTube" className="rounded-md p-2 hover:bg-white/10 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M23.5 6.2a3.1 3.1 0 0 0-2.2-2.2C19.3 3.5 12 3.5 12 3.5s-7.3 0-9.3.5A3.1 3.1 0 0 0 .5 6.2 32.4 32.4 0 0 0 0 12a32.4 32.4 0 0 0 .5 5.8 3.1 3.1 0 0 0 2.2 2.2c2 .5 9.3.5 9.3.5s7.3 0 9.3-.5a3.1 3.1 0 0 0 2.2-2.2A32.4 32.4 0 0 0 24 12a32.4 32.4 0 0 0-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/></svg>
            </Link>
            <Link href="https://www.instagram.com/yourhandle" aria-label="Instagram" className="rounded-md p-2 hover:bg-white/10 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1.1.7 1.6 1.2.5.5.9 1 1.2 1.6.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4a4.3 4.3 0 0 1-1.2 1.6 4.3 4.3 0 0 1-1.6 1.2c-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6a4.3 4.3 0 0 1-1.6-1.2 4.3 4.3 0 0 1-1.2-1.6c-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1.1 1.2-1.6.5-.5 1-1 1.6-1.2.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.8.1-1 .1-1.6.2-2 .4-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1 .2 1.6.4 2 .2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2 .4 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1-.1 1.6-.2 2-.4.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2 .1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1-.2-1.6-.4-2-.2-.5-.4-.8-.8-1.2-.4-.4-.7-.6-1.2-.8-.4-.2-1-.3-2-.4-1.3-.1-1.7-.1-4.8-.1zm0 3.1a5.9 5.9 0 1 1 0 11.8 5.9 5.9 0 0 1 0-11.8zm0 1.8a4.1 4.1 0 1 0 0 8.2 4.1 4.1 0 0 0 0-8.2zm5.9-2.2a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
            </Link>
            <Link href="https://x.com/yourhandle" aria-label="X" className="rounded-md p-2 hover:bg-white/10 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M18.244 2H21l-6.41 7.33L22 22h-6.9l-4.3-5.64L5.6 22H3l6.86-7.84L2 2h6.9l3.9 5.21L18.244 2zm-1.2 18h2.04L9.8 4H7.76l9.284 16z"/></svg>
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
            <li><Link href="/bike-info" className="hover:text-white transition">Bike Info & CC Limits</Link></li>
            <li><Link href="/memberships" className="hover:text-white transition">Memberships</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="https://racers.world/" target="_blank" rel="noreferrer" className="hover:text-white transition">RACERS Clubman Licence</Link></li>
            <li><Link href="/rules" className="hover:text-white transition">Rules & Code of Conduct</Link></li>
            <li><Link href="/merch" className="hover:text-white transition">Sliders & Merchandise</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm">
            <li className="flex items-center gap-2"><PhoneIcon className="h-4 w-4 text-zinc-400" /><Link href="tel:0451348876" className="hover:text-white transition">0451 348 876</Link></li>
            <li className="flex items-center gap-2"><EnvelopeIcon className="h-4 w-4 text-zinc-400" /><Link href="mailto:info@qldminimoto.com" className="hover:text-white transition">info@qldminimoto.com</Link></li>
            <li className="flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-zinc-400" /><span>Queensland, Australia</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-zinc-500">© {year} QLD Mini Moto. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
