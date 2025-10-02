import React from "react"

interface ButtonProps {
    text: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({ text, onClick }: ButtonProps) {
    return (
        <button
            className="w-full rounded-full px-6 py-3 font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors duration-300"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

function SmallButton({ text, onClick }: ButtonProps) {
    return (
        <button
            className="w-full rounded-lg px-4 py-2 font-semibold bg-white/10 hover:bg-white/20 text-white cursor-pointer transition-colors duration-300 text-sm"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export { SmallButton }