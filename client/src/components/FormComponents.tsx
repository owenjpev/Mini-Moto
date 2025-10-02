import React, { ReactNode } from "react"

interface InputProps {
    placeholder?: string
    label?: string
    value?: string
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextareaProps {
    placeholder?: string
    label?: string
    value?: string
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface SectionProps {
    children: ReactNode
    title?: string
    className?: string
}

export default function Input({ label, placeholder, value, type = "text", onChange }: InputProps) {
    return (
        <div className="w-full">
            <label className="text-sm mb-1">{label}</label>
            <input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                className="w-full border border-zinc-500 px-3 py-2 rounded-xl outline-none focus:border-white transition-colors duration-300"
            />
        </div>
    )
}

function Textarea({ label, placeholder, value, onChange }: TextareaProps) {
    return (
        <div className="w-full">
            <label className="text-sm mb-1">{label}</label>
            <textarea
                placeholder={placeholder}
                onChange={onChange}
                className="w-full border border-zinc-500 px-3 py-2 rounded-xl outline-none focus:border-white transition-colors duration-300 h-32"
            >
                {value}
            </textarea>
        </div>
    )
}

function Section({ children, title, className }: SectionProps) {
    return (
        <div className={`w-full max-w-7xl rounded-2xl border border-zinc-500 bg-black/50 p-6 text-white ${className ?? ""}`}>
            {title && (
                <h3 className="text-sm font-semibold tracking-wide text-gray-200 mb-4">{title}</h3>
            )}
            {children}
        </div>
    )
}

export { Section, Textarea }