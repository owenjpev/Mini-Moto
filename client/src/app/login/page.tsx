"use client"

import React, { useState } from "react"
import Main from "@/components/Main"
import { Section } from "@/components/FormComponents"
import Title, { Subtitle } from "@/components/Text"
import Input from "@/components/FormComponents"
import Button from "@/components/Buttons"

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    return (
        <Main>
            <div className="w-full max-w-lg">
                <Section>
                    <Title text="Login" className="mb-1" />
                    <Subtitle text="Log into your Mini Moto account" className="mb-8" />
                    <div className="space-y-6">
                        <Input
                            label="Email *"
                            placeholder="email@example.com"
                            type="email"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <Input
                            label="Password *"
                            placeholder="Password123!"
                            type="password"
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <Button text="Log in" />
                    </div>
                </Section>
            </div>
        </Main>
    )
}