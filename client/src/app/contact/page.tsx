"use client"

import React, { useState } from "react"
import Main from "@/components/Main"
import { Section } from "@/components/FormComponents"
import Title, { Subtitle } from "@/components/Text"
import Input, { Textarea } from "@/components/FormComponents"
import Button from "@/components/Buttons"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: ""
    })

    return (
        <Main>
            <div className="w-full max-w-lg">
                <Section>
                    <Title text="Contact Us" className="mb-1" />
                    <Subtitle text="Send us a message and we'll get back to you as soon as possible!" className="mb-8" />
                    <div className="space-y-6">
                        <Input
                            label="Email *"
                            placeholder="email@example.com"
                            type="email"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <Input
                            label="Subject *"
                            placeholder="e.g., General Inquiry, Track Times, etc"
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        />
                        <Textarea
                            label="Message *"
                            placeholder="Tell us about your inquiry"
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                        <Button text="Send Message" />
                    </div>
                </Section>
            </div>
        </Main>
    )
}