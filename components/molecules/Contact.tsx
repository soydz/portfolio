'use client'

import { Button, Input, TextArea, TextAreaProps, Toast } from "../atoms";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { ChevronRight, LoaderCircle, Mail } from "lucide-react";
import { FormEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";

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

        const result = await sendEmail(formData);

        if (result.success) {
            setStatus('success');
            form.reset();
        } else {
            setStatus('error');
        }

        setTimeout(() => setStatus('idle'), 5000);
    }

    function clearInvalid(name: string) {
        setInvalidFields((prev) => prev.filter((f) => f !== name));
    }

    return (
        <section>
            <div className="flex flex-row items-center gap-2">
                <Mail className="text-primary" />
                <h3 className="uppercase text-txt-title font-mono font-semibold py-4">{t("contact.title")}</h3>
            </div>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-10 border border-tertiary p-8">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1 text-txt-main font-mono">
                            <ChevronRight />
                            <label className="text-primary/65 uppercase font-mono text-sm" htmlFor={input.name}>{textInput}</label>
                        </div>
                        <Input
                            name={input.name}
                            id={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            required
                            aria-invalid={invalidFields.includes(input.name)}
                            className={invalidFields.includes(input.name) ? "border-red-500 animate-[shake_0.3s_ease-in-out]" : ""}
                            onInput={() => clearInvalid(input.name)}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-1 text-txt-main font-mono">
                            <ChevronRight />
                            <label className="text-primary/65 uppercase font-mono text-sm" htmlFor={textArea.name}>{textTextArea}</label>
                        </div>
                        <TextArea
                            name={textArea.name}
                            id={textArea.name}
                            placeholder={textArea.placeholder}
                            required
                            rows={4}
                            aria-invalid={invalidFields.includes(textArea.name)}
                            className={invalidFields.includes(textArea.name) ? "border-red-500 animate-[shake_0.3s_ease-in-out]" : ""}
                            onInput={() => clearInvalid(textArea.name)}
                        />
                    </div>
                </div>
                <div>
                    <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="bg-primary"
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

            {status === "success" && (
                <Toast type="success" message={t("contact.success")}/>
            )}
            {status === "error" && (
                <Toast type="error" message={t("contact.error")}/>
            )}
        </section>
    )
}
