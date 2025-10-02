import React from "react";
import Main from "@/components/Main";
import { Section } from "@/components/FormComponents";
import { SmallButton } from "@/components/Buttons";

type Tier = { id: string; name: string; kind: "Rider" | "Social"; priceYear: string; priceEvent: string; family?: boolean; blurb?: string };

const MEMBERSHIP_PERIOD = "1 Feb 2025 – 31 Jan 2026";
const FAMILY_DEFINITION = "Family = parents with children age 21 and under in the same household. Only the named parents and up to 2 children under 21 are included.";

const RACERS = {
	siteUrl: "https://racers.world/", // TODO: replace with the exact RACERS link you use
	notes: "Make a profile, buy a Clubman licence, upload a photo, download the RACERS app, and show your digital licence at sign-on.",
	tiers: [
		{ name: "Single", priceYear: "$95/yr", priceEvent: "$50/event" },
		{ name: "Family (3–4 people)", priceYear: "$250/yr", priceEvent: "—" }
	]
};

const TIERS: Tier[] = [
	{ id: "single-rider", name: "Single Rider", kind: "Rider", priceYear: "$50/yr", priceEvent: "$10/event" },
	{ id: "family-rider", name: "Family Rider", kind: "Rider", priceYear: "$85/yr", priceEvent: "$15/event", family: true, blurb: FAMILY_DEFINITION },
	{ id: "single-social", name: "Single Social", kind: "Social", priceYear: "$15/yr", priceEvent: "$5/event" },
	{ id: "family-social", name: "Family Social", kind: "Social", priceYear: "$30/yr", priceEvent: "$10/event", family: true, blurb: FAMILY_DEFINITION }
];

const RIDER_BENEFITS = [
	"Participation in QLD Mini Moto events",
	"Free Langos at selected events",
	"20% off merchandise (excludes ‘On Sale’ items)",
	"Invites & priority bookings for special events",
	"Priority on early-bird bookings for all events",
	"Invites to member-only competitions"
];

const SOCIAL_BENEFITS = [
	"Free Langos at selected events",
	"10% off merchandise (excludes ‘On Sale’ items)",
	"Invites to member-only competitions & ride days",
	"Option to upgrade to Rider membership"
];

const MEMBER_RULES = [
	"Abide by club rules & Code of Conduct; keep up to date by attending meetings.",
	"Carry your Membership Card/receipt/licence at events and present on request.",
	"Acknowledge that motorcycle riding/racing is dangerous and you participate at your own risk.",
	"Indemnify organisers, officials, and agents as per standard club terms.",
	"All memberships are online; you’ll receive a membership number after approval."
];

export default function MembershipsPage() {
	return (
		<Main>
			<div className="w-full max-w-7xl space-y-6">
				<header className="w-full mb-8">
					<h1 className="text-4xl font-bold text-center">QLD Mini Moto Memberships</h1>
					<p className="text-sm text-zinc-300 text-center">Membership period: {MEMBERSHIP_PERIOD}</p>
				</header>

				<div className="mb-24">
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{TIERS.map((tier) => (
						<Section key={tier.id}>
							<div className="flex flex-col justify-between h-full">
								<div className="mb-6">
									<div className="flex items-center justify-between mb-2">
										<h3 className="text-lg font-semibold">{tier.name}</h3>
										<span className="text-xs px-2 py-0.5 rounded bg-zinc-100 text-zinc-700">{tier.kind}</span>
									</div>
									<p className="text-sm">Yearly: <span className="font-medium">{tier.priceYear}</span></p>
									<p className="text-sm">Per-event: <span className="font-medium">{tier.priceEvent}</span></p>

									<ul className="space-y-2 text-xs list-disc pl-5 mt-4">
										{RIDER_BENEFITS.map((b) => <li key={b}>{b}</li>)}
									</ul>

									{tier.family && tier.blurb && <p className="mt-4 text-xs text-zinc-400">{tier.blurb}</p>}
								</div>
								<SmallButton text="Join Now" />
							</div>
						</Section>
						))}
					</div>
				</div>

				<div className="mb-8">
					<h2 className="text-4xl text-center font-semibold mb-4">RACERS Clubman Licence (external requirement for racers)</h2>
					<div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
						{RACERS.tiers.map((t) => (
						<Section key={t.name}>
							<div className="flex items-start justify-between">
							<h3 className="text-lg font-semibold">{t.name}</h3>
							<a href={RACERS.siteUrl} target="_blank" rel="noreferrer" className="text-xs underline text-zinc-300">RACERS website</a>
							</div>
							<p className="mt-2 text-sm">Yearly: <span className="font-medium">{t.priceYear}</span></p>
							<p className="text-sm">Per-event: <span className="font-medium">{t.priceEvent}</span></p>
							<p className="mt-3 text-xs text-zinc-400">{RACERS.notes}</p>
						</Section>
						))}
					</div>
				</div>
				
				<div>
					<h2 className="text-4xl text-center font-semibold mb-4">Rules & Admin</h2>
					<Section title="Rules & Admin">
						<ul className="space-y-2 text-sm list-disc pl-5">
							{MEMBER_RULES.map((r) => <li key={r}>{r}</li>)}
						</ul>
						<p className="mt-3 text-xs text-zinc-400">Questions or issues with membership approval: call 0451 348 876.</p>
					</Section>
				</div>
				

				<footer className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
					<p className="text-sm text-zinc-300">Need both: RACERS Clubman Licence (to race) + QLD Mini Moto membership (to ride).</p>
					<div className="flex items-center gap-3">
						<a href="/terms" className="text-sm underline">Terms & Code of Conduct</a>
						<a href="/faq" className="text-sm underline">Membership FAQ</a>
					</div>
				</footer>
			</div>
		</Main>
	);
}
