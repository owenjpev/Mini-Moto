// app/tickets/[id]/page.tsx  (Next.js App Router)
import React from "react";
import { Field, Label, Input, Textarea, RadioGroup, Section, Helper, Submit } from "@/components/ui/Form";
import Main from "@/components/Main"

const SINGLE_OR_FAMILY = [{value:"single",label:"Single Rider"},{value:"family-day-225",label:"Family – Day $225"},{value:"family-night-200",label:"Family – Night $200"},{value:"family-both-300",label:"Family – Both $300"}];

const RIDING_GROUP = [{value:"jr-5-8",label:"1. Junior 5–8yrs"},{value:"beg",label:"2. Beginner"},{value:"int",label:"3. Intermediate"},{value:"fast",label:"4. Fast"},{value:"sm-fast",label:"5. SuperMoto Fast"}];

const EARLYBIRD_FEES = [
    {value:"day-jnr-5-8-85",label:"Day – Jnr 5–8yr – $85"},
    {value:"night-jnr-5-8-70",label:"Night – Jnr 5–8yr – $70"},
    {value:"both-jnr-145",label:"Both – Jnr – $145"},
    {value:"day-9plus-120",label:"Day – 9yrs+ – $120"},
    {value:"night-9plus-100",label:"Night – 9yrs+ – $100"},
    {value:"both-9plus-175",label:"Both – 9yrs+ – $175"},
    {value:"day-pocket-65",label:"Day – Pocketbike – $65"},
    {value:"night-pocket-50",label:"Night – Pocketbike – $50"},
    {value:"both-pocket-115",label:"Both – Pocketbike – $115"},
    {value:"day-jnr-pocket-package-150",label:"Day – Jnr Pocketbike Package – $150"},
    {value:"night-jnr-pocket-package-130",label:"Night – Jnr Pocketbike Package – $130"},
    {value:"both-jnr-pocket-package-235",label:"Both – Jnr Pocketbike Package – $235"},
];

const JNR_MINIMOTO_PACKAGE = [
	{value:"day-150",label:"Day $150",hint:"bike, suit, gloves, boots, track fee + training drills"},
	{value:"night-130",label:"Night $130",hint:"bike, suit, gloves, boots, track fee + training drills"},
];

export default function TicketPage({params}:{params:{id:string}}){
	async function action(formData:FormData){
		"use server";
		// TODO: persist - replace with your DB/API call
		// Example payload extraction:
		const payload = Object.fromEntries(formData.entries());
		console.log("booking", params.id, payload);
	}

	return (
		<Main>
			<div className="mx-auto w-full max-w-3xl space-y-6 px-4 py-8 text-gray-100">
				<header className="space-y-1">
					<h1 className="text-xl font-semibold">Ipswich Booking Form</h1>
					<p className="text-sm text-gray-400">30th of October — Tuesday — Day & Night • Earlybird closes 10pm Sunday 28th of September</p>
				</header>
				<form action={action} className="space-y-6">
					<Section title="Rider">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<Field><Label htmlFor="firstName" required>First Name</Label><Input id="firstName" name="firstName" placeholder="First name" required /></Field>
							<Field><Label htmlFor="lastName" required>Last Name</Label><Input id="lastName" name="lastName" placeholder="Last name" required /></Field>
						</div>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
							<Field><Label htmlFor="email" required>Email</Label><Input id="email" name="email" type="email" placeholder="example@example.com" required /></Field>
							<Field><Label htmlFor="racersLic" required>RACERS Lic Number</Label><Input id="racersLic" name="racersLic" placeholder="e.g., 2025-xxxxx" required /></Field>
						</div>
						<Helper>Racers licence + QLD MiniMoto membership required. <a className="text-amber-400 underline" href="https://www.racers.world" target="_blank">Get RACERS licence</a> • <a className="text-amber-400 underline" href="#" target="_blank">Get Membership</a></Helper>
					</Section>

					<Section title="JNR MiniMoto Package 5–9yr (optional)">
						<RadioGroup name="jnrPackage" options={JNR_MINIMOTO_PACKAGE} />
					</Section>

					<Section title="Single or Family *">
						<RadioGroup name="singleOrFamily" options={SINGLE_OR_FAMILY} required />
					</Section>

					<Section title="Riding Group *">
						<RadioGroup name="ridingGroup" options={RIDING_GROUP} required />
					</Section>

					<Section title="Rider Payment Fee — Earlybird Open *">
						<RadioGroup name="earlybirdFee" options={EARLYBIRD_FEES} required />
					</Section>

					<Section title="150cc Hire Bikes (info)">
						<Helper>Limited: KAYO MR150, YCF150 Pitbike. Message us on Facebook ASAP to reserve.</Helper>
					</Section>

					<Section title="Ride Fee">
						<Field><Label htmlFor="rideFee">Ride Fee (number)</Label><Input id="rideFee" name="rideFee" type="number" inputMode="numeric" placeholder="e.g., 23" /></Field>
					</Section>

					<Section title="Payment Details">
						<div className="space-y-2 text-sm">
							<p className="text-gray-300">PAY ID (mobile): <span className="font-mono">0451 348 876</span> — M Bowden</p>
							<p className="text-gray-300">or Bank Transfer:</p>
							<ul className="list-inside list-disc text-gray-300">
							<li>Acc Name: Qld Minimoto</li>
							<li>BSB: 114 879</li>
							<li>Acc No: 452 017 495</li>
							</ul>
							<Helper>*Payment now or at event available +$30 (Cash or Card)</Helper>
						</div>
					</Section>

					<Section title="Payment Receipt">
						<Field><Label htmlFor="receipt">Upload Receipt (jpg/png/pdf)</Label><Input id="receipt" name="receipt" type="file" accept=".jpg,.jpeg,.png,.pdf" /></Field>
						<Field><Label htmlFor="notes">Notes</Label><Textarea id="notes" name="notes" rows={4} placeholder="Any extra info we should know?" /></Field>
					</Section>

					<div className="flex items-center justify-between">
						<Helper>By submitting you agree to event terms and safety rules.</Helper>
						<Submit>Submit Booking</Submit>
					</div>
				</form>
			</div>
		</Main>
	);
}
