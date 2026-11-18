import { TextareaHTMLAttributes } from "react";

export interface TextAreaProps {
    name: string;
    placeholder: string;
}

// Extendemos el Textarea nativo de HTML
export function TextArea({ className = "", ...props }: Readonly<TextareaHTMLAttributes<HTMLTextAreaElement>>) {
    return (
        <textarea
            {...props}
            className={`w-full resize-y border border-tertiary bg-background/40 p-4 font-mono text-sm text-foreground placeholder:text-txt-main/55 transition-colors focus:border-primary focus:outline-none focus-visible:outline-none aria-invalid:border-red-500 ${className}`}></textarea>
    )
}
