import React from "react";
import Events from "@/components/Events";
import Main from "@/components/Main";

export default function HomePage() {
  return (
    <Main noPadding={true} noImage={true}>
      {/* HERO */}
      <section className="w-full h-[34rem] relative">
        <img src="/hero.jpg" alt="Rider on a mini moto at speed" className="w-full h-full object-cover brightness-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6">
          <div className="w-full mx-auto max-w-3xl text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">QLD Mini Moto</h1>
            <p className="mt-4 text-base md:text-lg opacity-95">Grassroots pocket-bike racing across Queensland — safe, affordable, and seriously fun for all ages.</p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/events" className="inline-block border-2 border-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition">See Upcoming Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK VALUE STRIP */}
      <section className="w-full bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />Safe short-track venues</div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />Affordable entry & tyres</div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />All ages & skill levels</div>
          <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />Friendly community</div>
        </div>
      </section>

      {/* INTRO COPY */}
      <section className="w-full bg-custom">
        <div className="mx-auto max-w-7xl px-6 py-24 flex justify-center items-center flex-wrap md:flex-nowrap gap-10">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left">Welcome to the home of short track events in Queensland</h2>
            <p className="mt-4 text-white text-center md:text-left">Whether you’re an experienced racer, a bike enthusiast, or just starting out, QLD Mini Moto is the best place to ride. Stay up to date with events, check bike and rider requirements, see age and CC limits, book your spot, get memberships, order sliders/merch — and more.</p>
            <div className="mt-6 flex justify-center items-center md:justify-start flex-wrap gap-3">
              <a href="/events" className="rounded-lg border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-zinc-800 transition text-white">Upcoming events</a>
              <a href="/bike-info" className="rounded-lg border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-zinc-800 transition text-white">Bike info & CC limits</a>
              <a href="/memberships" className="rounded-lg border border-white px-4 py-2 text-sm font-medium hover:white hover:text-zinc-800 transition text-white">Memberships</a>
            </div>
          </div>
          <div className="w-full">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/SQZg-xunGxU" title="QLD Mini Moto — track action" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
            <p className="mt-2 text-xs text-white">Highlights from recent sessions.</p>
          </div>
        </div>
      </section>

      {/* FEATURED EVENTS */}
      <section className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Upcoming Events</h2>
          <Events />
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-custom text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to ride?</h3>
          <p className="mt-3 text-zinc-300">Grab a membership and your RACERS Clubman licence, then lock in your first event.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/memberships" className="rounded-full border-2 border-blue-600 bg-blue-600 text-white px-6 py-2 text-sm font-semibold hover:bg-emerald-300 hover:border-emerald-300 transition">Join Membership</a>
            <a href="/bike-info" className="rounded-full border-2 border-white px-6 py-2 text-sm font-semibold hover:bg-white hover:text-black transition">Bike Requirements</a>
          </div>
        </div>
      </section>
    </Main>
  );
}
