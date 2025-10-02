import React from "react"
import { MapPinIcon, MapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Events() {
    const events = [
        {
            name: "Lakeside DTC",
            address: "56 Champions Way, Willowbank, 4306",
            length: "1000m",
            date: "Thursday 18/09/2025",
            remainingSpots: 4,
            weather: "Sunny",
            img: "/lakeside.jpg",
        },
        {
            name: "Ipswich (ALL DAY/NIGHT)",
            address: "Entrance off Lakeside Rd, Kurwongbah",
            length: "800m",
            date: "Friday 19/09/2025",
            remainingSpots: 2,
            weather: "Cloudy",
            img: "/ipswich.jpg",
        },
        {
            name: "Cooloola (SAT/SUN)",
            address: "Competitors entrance off Rafter Rd, Glanmire, 4570",
            length: "800m",
            date: "Saturday 20/09/2025",
            remainingSpots: 1,
            weather: "Sunny",
            img: "/cooloola.jpg",
        },
    ]

    return (
        <div className="w-full max-w-7xl grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {events.map(event => (
                <Link href="/tickets/1" className="w-full text-white rounded-2xl bg-black/50 flex flex-col justify-between items-start cursor-pointer" key={event.img}>
                    <img src={event.img} className="w-full h-48 object-cover rounded-t-2xl" />
                    <div className="w-full relative flex flex-col justify-between items-start rounded-b-2xl">
                        <span className={`absolute top-4 right-4 h-6 w-6 rounded-full flex justify-center items-center
                            ${event.weather == "Sunny" ? "bg-yellow-100" : ""}
                            ${event.weather == "Cloudy" ? "bg-gray-100" : ""}
                            ${event.weather == "Rainy" ? "bg-blue-100" : ""}
                        `}>
                            {event.weather == "Sunny" && (
                                <img src="/sun.svg" className="h-4 w-4" />
                            )}
                            {event.weather == "Cloudy" && (
                                <img src="/cloud.svg" className="h-4 w-4" />
                            )}
                            {event.weather == "Rainy" && (
                                <img src="/rain.svg" className="h-4 w-4" />
                            )}
                        </span>
                        
                        <div className="p-5">
                            <h3 className="text-3xl mb-1">{event.name}</h3>
                            <p className="text-sm text-white mb-2 flex justify-start items-center gap-1"><MapPinIcon className="h-4 w-4" />{event.address}</p>
                            <p className="text-sm text-white flex justify-start items-center gap-1"><MapIcon className="h-4 w-4" />Race length: {event.length}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}