"use client"

import React, { useState } from "react"
import Main from "@/components/Main"
import Input, { Section } from "@/components/FormComponents"

export default function TicketsPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        licenseNo: ""
    })

    return (
        <Main>
            <div className="w-full max-w-xl">
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
                </Section>
            </div>
        </Main>
    )
}