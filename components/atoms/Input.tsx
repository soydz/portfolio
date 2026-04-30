import { InputHTMLAttributes } from "react";

// extendemos del input nativo de HTML y agregamos nuestro CSS
export function Input({ className = "", ...props }: Readonly<InputHTMLAttributes<HTMLInputElement>>) {
    return (
        <input
            {...props}
            className={`border border-tertiary p-4 font-mono focus:outline-none focus:border-primary transition-colors ${className}`}
        />
    )
}