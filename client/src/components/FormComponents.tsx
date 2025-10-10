import React, { ReactNode } from "react"

interface InputProps {
    placeholder?: string
    label?: string
    value?: string
    type?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface RadioGroupProps {
    name: string;
    options: { value: string; label: string; hint?: string }[];
    defaultValue?: string;
    required?: boolean;
}

interface CheckboxProps {
    label?: ReactNode
    checked?: boolean
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
            <label className="text-sm mb-2">{label}</label>
            <input
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
                className="w-full bg-white/3 border border-zinc-500 px-3 py-2 rounded-lg outline-none focus:border-white transition-colors duration-300 text-sm"
            />
        </div>
    )
}

function Textarea({ label, placeholder, value, onChange }: TextareaProps) {
    return (
        <div className="w-full">
            <label className="text-sm mb-2">{label}</label>
            <textarea
                placeholder={placeholder}
                onChange={onChange}
                className="w-full bg-white/3 border border-zinc-500 p-3 rounded-lg outline-none focus:border-white transition-colors duration-300 h-32 text-sm"
            >
                {value}
            </textarea>
        </div>
    )
}

function RadioGroup({
    name,
    options,
    defaultValue,
    required = false
}: RadioGroupProps) {
    return (
        <div className="space-y-3">
            {options.map((o, i) => {
                const id = `${name}-${i}`;

                return (
                    <label
                        key={o.value}
                        htmlFor={id}
                        className="w-full flex items-center gap-2 cursor-pointer px-3 py-2 rounded-xl bg-white/3 border border-zinc-500 transition-colors duration-300 hover:border-white focus-within:border-white"
                    >
                        <input
                            id={id}
                            type="radio"
                            name={name}
                            value={o.value}
                            defaultChecked={defaultValue === o.value}
                            required={required}
                            className="h-4 w-4 accent-white cursor-pointer"
                        />

                        <div>
                            <div className="text-sm">{o.label}</div>
                            {o.hint && (
                                <div className="text-xs text-gray-400">{o.hint}</div>
                            )}
                        </div>
                    </label>
                );
            })}
        </div>
    );
}

function Checkbox({ label, checked, onChange }: CheckboxProps) {
    return (
        <div className="w-full flex justify-start items-center gap-2">
            <input
                checked={checked}
                onChange={onChange}
                type="checkbox"
                className="cursor-pointer"
            />
            <label className="text-sm w-full">{label}</label>
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

function Helper({ children }: { children:React.ReactNode }) {
    return (
        <p className="text-xs text-gray-400">{children}</p>
    )
}

export { Section, Textarea, RadioGroup, Helper, Checkbox }