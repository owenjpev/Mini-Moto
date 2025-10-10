"use client"

import React, { useState } from "react"
import Main from "@/components/Main"
import Input, { Section, Textarea, RadioGroup, Helper, Checkbox } from "@/components/FormComponents"
import Title, { Subtitle } from "@/components/Text";
import Button from "@/components/Buttons";

export default function TicketsPage() {
    const SINGLE_OR_FAMILY = [
        { value:"single", label:"Single Rider" },
        { value:"family-day-225", label:"Family – Day $225" },
        { value:"family-night-200", label:"Family – Night $200" },
        { value:"family-both-300", label:"Family – Both $300" }
    ];

    const RIDING_GROUP = [
        { value:"jr-5-8", label:"1. Junior 5–8yrs" },
        { value:"beg", label:"2. Beginner" },
        { value:"int", label:"3. Intermediate" },
        { value:"fast", label:"4. Fast" },
        { value:"sm-fast", label:"5. SuperMoto Fast" }
    ];

    const EARLYBIRD_FEES = [
        { value:"day-jnr-5-8-85", label:"Day – Jnr 5–8yr – $85" },
        { value:"night-jnr-5-8-70", label:"Night – Jnr 5–8yr – $70" },
        { value:"both-jnr-145", label:"Both – Jnr – $145" },
        { value:"day-9plus-120", label:"Day – 9yrs+ – $120" },
        { value:"night-9plus-100", label:"Night – 9yrs+ – $100" },
        { value:"both-9plus-175", label:"Both – 9yrs+ – $175" },
        { value:"day-pocket-65", label:"Day – Pocketbike – $65" },
        { value:"night-pocket-50", label:"Night – Pocketbike – $50" },
        { value:"both-pocket-115", label:"Both – Pocketbike – $115" },
        { value:"day-jnr-pocket-package-150", label:"Day – Jnr Pocketbike Package – $150" },
        { value:"night-jnr-pocket-package-130", label:"Night – Jnr Pocketbike Package – $130" },
        { value:"both-jnr-pocket-package-235", label:"Both – Jnr Pocketbike Package – $235" },
    ];

    const JNR_MINIMOTO_PACKAGE = [
        { value:"day-150", label:"Day $150", hint:"bike, suit, gloves, boots, track fee + training drills" },
        { value:"night-130", label:"Night $130", hint:"bike, suit, gloves, boots, track fee + training drills" },
    ];

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        licenseNo: ""
    })

    return (
        <Main>
            <Title text="Ipswich Booking Form" className="mb-2" />
            <Subtitle text="30th of October — Tuesday — Day & Night • Earlybird closes 10pm Sunday 28th of September" className="mb-16" />
            <div className="w-full max-w-2xl space-y-6">
                <Section title="Rider Info" className="space-y-6">
                    <div className="w-full flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
                        <Input
                            label="First name *"
                            placeholder="John"
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        <Input
                            label="Last name *"
                            placeholder="Doe"
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                    </div>
                    <div className="w-full flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
                        <Input
                            label="Email *"
                            placeholder="johndoe@email.com"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <Input
                            label="Racing License No. *"
                            placeholder="12345"
                            onChange={(e) => setFormData({ ...formData, licenseNo: e.target.value })}
                        />
                    </div>
                    <Helper>
                        Racers licence + QLD MiniMoto membership required. <a className="text-zinc-100 underline" href="https://www.racers.world" target="_blank">Get RACERS licence</a> • <a className="text-zinc-100 underline" href="#" target="_blank">Get Membership</a>
                    </Helper>
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

                <Section title="Rider Info" className="space-y-6">
                    <Input
                        label="Upload Receipt (jpg, png, pdf)"
                        placeholder="John"
                        type="file"
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <Textarea
                        label="Notes"
                        placeholder="Anything extra we should know?"
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    <Checkbox
                        label={<p>I acknowledge and agree to the <a className="text-zinc-100 underline" href="https://www.racers.world" target="_blank">Terms and Conditions</a>.</p>}
                    />

                    <Button text="Submit" />
                </Section>
            </div>
        </Main>
    )
}