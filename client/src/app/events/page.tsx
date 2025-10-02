import Main from "@/components/Main";
import React from "react";
import Events from "@/components/Events";
import Title from "@/components/Text";

export default function HomePage() {
    return (
        <Main>
            <h1 className="text-white text-5xl font-semibold mb-16">Upcoming Events</h1>
            <Events />

            <Title text="2025 Calendar" className="mt-12 mb-4" />
            <img src="/calendar.jpg" className="h-64 rounded-2xl" />
        </Main>
    )
}