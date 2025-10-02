import React from "react"

interface TextProps {
    text: string
    className?: string
}

export default function Title({ text, className }: TextProps) {
    return (
        <h1 className={`w-full max-w-7xl text-4xl font-bold text-center ${className ?? ""}`}>{text}</h1>
    )
}

function Subtitle({ text, className }: TextProps) {
    return (
        <p className={`text-sm text-zinc-300 text-center ${className ?? ""}`}>{text}</p>
    )
}

export { Subtitle }