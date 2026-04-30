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
            className={`border border-tertiary p-4 font-mono focus:outline-none focus:border-primary transition-colors ${className}`}></textarea>
    )
}