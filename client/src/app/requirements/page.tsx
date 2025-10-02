import React from "react";
import Main from "@/components/Main";
import { Section } from "@/components/FormComponents";

type ClassRow = { name: string; engine: string; minAge: string; notes?: string };

const COMPETENCY_NOTE = "All riders at the minimum age of each class will need to be competency checked before participating in an event. This can be done at most events by contacting us prior, and at all Come & Try days/nights.";
const CC_LIMITS = "From 40cc up to 300/400cc ASBK Class Road Bikes & ALL Supermotos. No triples or 4 cylinders (except 250 4-cyl with stock gearing).";
const NOISE_LIMIT = "95 dB noise limit at Lakeside.";

const CLASSES: ClassRow[] = [
	{ name: "Junior Minimoto (Auto)", engine: "Up to 50cc", minAge: "5yrs+" },
	{ name: "Junior MiniRoad", engine: "Up to 10in – 110cc 4-stroke", minAge: "7yrs+" },
	{ name: "Junior MiniRoad", engine: "Up to 12in – 65cc 2-stroke / 160cc 4-stroke", minAge: "8yrs+" },
	{ name: "Junior Road", engine: "85cc 2-stroke / 160cc 4-stroke", minAge: "9yrs+" },
	{ name: "Senior Road", engine: "Up to SS300 class bikes (e.g., R3 / Ninja 400) & 150cc 2-stroke", minAge: "16yrs+ (typical)" },
	{ name: "Senior Motard (13–16yrs)", engine: "Up to 250cc (single-cyl)", minAge: "13–16yrs" },
	{ name: "Senior Motard (16yrs+)", engine: "Any single-cylinder supermoto", minAge: "16yrs+" }
];

const REQUIREMENTS = [
	NOISE_LIMIT,
	"CATCH CAN – All overflow pipes (carb, radiator, case breather) must terminate in a catch can.",
	"SLIDERS – Peg/axle/exhaust sliders and bar ends required (no bolt heads protruding).",
	"TYRES – At least 70% road tyres or slicks; no knobbies.",
	"AXLE / PEG SLIDERS / BAR ENDS TO BE MADE OF BLACK ACETAL, NO EXCEPTIONS."
];

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
    return (
		<div className="w-full rounded-xl border border-amber-300 bg-amber-50 p-4 text-amber-900">
			<p className="text-sm font-semibold">{title}</p>
			<p className="mt-1 text-sm">{children}</p>
		</div>
	);
}

export default function BikeInfoPage() {
  return (
    <Main>
      <div className="w-full max-w-7xl space-y-6">
        <header className="w-full mb-8">
          <h1 className="text-3xl font-bold text-center">Bike Info & Requirements</h1>
          <p className="mt-1 text-sm text-zinc-300 text-center">Read carefully before entering an event.</p>
        </header>

        <Section title="Bike Classes">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm rounded-lg overflow-hidden">
              <thead className="border-b border-zinc-100">
                <tr>
                  <th className="text-left px-4 py-2">Class</th>
                  <th className="text-left px-4 py-2">Engine / Wheel</th>
                  <th className="text-left px-4 py-2">Minimum Age</th>
                </tr>
              </thead>
              <tbody>
                {CLASSES.map((c) => (
                  <tr key={`${c.name}-${c.engine}`} className="odd:bg-white/5">
                    <td className="px-4 py-2">{c.name}</td>
                    <td className="px-4 py-2">{c.engine}</td>
                    <td className="px-4 py-2">{c.minAge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Callout title="Competency Check Required for Minimum-Age Riders">{COMPETENCY_NOTE}</Callout>
          </div>
        </Section>

        <Section title="Bike CC Limits">
			<ul className="space-y-2 text-sm list-disc pl-5">
				<li className="text-sm">{CC_LIMITS}</li>
			</ul>
        </Section>

        <Section title="Bike Requirements (Scrutineering)">
          <ul className="space-y-2 text-sm list-disc pl-5">
            {REQUIREMENTS.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <div className="mt-4">
            <Callout title="Reminder">{NOISE_LIMIT} Ensure your bike passes static and on-track checks.</Callout>
          </div>
        </Section>

        <footer className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-zinc-300">Questions about eligibility or setup? Contact the organisers before event day.</p>
          <div className="flex items-center gap-3">
            <a href="/memberships" className="text-sm underline">Memberships & Licences</a>
            <a href="/events" className="text-sm underline">Events & Sign-On</a>
          </div>
        </footer>
      </div>
    </Main>
  );
}
