'use client'

import { Button, Input, TextArea, TextAreaProps, Toast } from "../atoms";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { ChevronRight, LoaderCircle, Mail } from "lucide-react";
import { FormEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { SectionHeading } from "./SectionHeading";

interface InputProps {
    type: string;
    placeholder: string;
    name: string
}

export interface ContactProps {
    textInput: string;
    input: InputProps;
    textTextArea: string;
    textArea: TextAreaProps;
    textBtn: string;
}

export function Contact({ input, textInput, textArea, textTextArea, textBtn }: Readonly<ContactProps>) {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [invalidFields, setInvalidFields] = useState<string[]>([]);
    const { t } = useLanguage();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(form);

        const emailValue = formData.get(input.name)?.toString().trim() ?? "";
        const messageValue = formData.get(textArea.name)?.toString().trim() ?? "";

        const invalid: string[] = [];
        if (!emailValue) invalid.push(input.name);
        if (!messageValue) invalid.push(textArea.name);

        setInvalidFields([]);
        if (invalid.length > 0) {
            requestAnimationFrame(() => setInvalidFields(invalid));
            return;
        }

        setStatus('sending');

        try {
            const result = await sendEmail(formData);

            if (result.success) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 5000);
    }

    function clearInvalid(name: string) {
        setInvalidFields((prev) => prev.filter((f) => f !== name));
    }

    return (
        <section>
            <SectionHeading icon={Mail} title={t("contact.title")} />

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6 border border-tertiary p-5 sm:p-8">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] text-primary" htmlFor={input.name}>
                            <ChevronRight className="size-3.5" aria-hidden="true" />
                            {textInput}
                        </label>
                        <Input
                            name={input.name}
                            id={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            required
                            autoComplete="email"
                            aria-invalid={invalidFields.includes(input.name)}
                            className={invalidFields.includes(input.name) ? "animate-[shake_0.3s_ease-in-out]" : ""}
                            onInput={() => clearInvalid(input.name)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.14em] text-primary" htmlFor={textArea.name}>
                            <ChevronRight className="size-3.5" aria-hidden="true" />
                            {textTextArea}
                        </label>
                        <TextArea
                            name={textArea.name}
                            id={textArea.name}
                            placeholder={textArea.placeholder}
                            required
                            rows={5}
                            aria-invalid={invalidFields.includes(textArea.name)}
                            className={invalidFields.includes(textArea.name) ? "animate-[shake_0.3s_ease-in-out]" : ""}
                            onInput={() => clearInvalid(textArea.name)}
                        />
                    </div>
                </div>

                <div className="flex flex-col-reverse gap-3 border-t border-tertiary/60 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <span aria-hidden="true" className="hidden font-mono text-xs uppercase tracking-widest text-txt-main/70 sm:block">
                        {`$ ./transmit_message`}
                    </span>
                    <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full sm:w-auto"
                    >
                        {status === "sending" ? (
                            <span className="flex items-center gap-2">
                                <LoaderCircle className="animate-spin" size={16} />
                                {t("contact.sending")}
                            </span>
                        ) : textBtn}
                    </Button>
                </div>
            </form>

            <div aria-live="polite" aria-atomic="true">
                {status === "success" && (
                    <Toast type="success" message={t("contact.success")}/>
                )}
                {status === "error" && (
                    <Toast type="error" message={t("contact.error")}/>
                )}
            </div>
        </section>
    )
}
