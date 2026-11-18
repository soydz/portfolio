import { InputHTMLAttributes } from "react";

// extendemos del input nativo de HTML y agregamos nuestro CSS
export function Input({ className = "", ...props }: Readonly<InputHTMLAttributes<HTMLInputElement>>) {
    return (
        <input
            {...props}
            className={`w-full border border-tertiary bg-background/40 p-4 font-mono text-sm text-foreground placeholder:text-txt-main/55 transition-colors focus:border-primary focus:outline-none focus-visible:outline-none aria-invalid:border-red-500 ${className}`}
        />
    )
}
