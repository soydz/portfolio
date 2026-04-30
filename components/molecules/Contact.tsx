'use client'

import { Button, Input, TextArea, TextAreaProps, Toast } from "../atoms";
import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { ChevronRight, Mail } from "lucide-react";

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
    // estado del formulario
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    async function handleSubmit(event: any) {
        event.preventDefault();
        setStatus('sending');

        // lee los datos del formulario
        const formData = new FormData(event.currentTarget);
        // llama la Server Action, que usa Resend para enviar el email
        const result = await sendEmail(formData);

        // verifica el resultado del Server Action. Si es exitosa o genera error
        if (result.success) {
            setStatus('success');
            // limpiar formulario
            (event.target as HTMLFormElement).reset();
        } else {
            setStatus('error');
        }

        // despues de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
    }


    return (
        <section>
            <div className="flex flex-row items-center gap-2">
                <Mail className="text-primary" />
                <h3 className="uppercase text-txt-title font-mono font-semibold py-4">transmission_protocol</h3>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-10 border border-tertiary p-8">
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
                        />
                    </div>
                </div>
                <div>
                    {/* Una vez enviado el email, el boton se desactiva mientras procesa el envio del email */}
                    <Button
                        type="submit"
                        disabled={status === "sending"}
                        className="bg-primary"
                    >{status === "sending" ? "Transmitting..." : textBtn}</Button>
                </div>
            </form>

            {/* Notificación del resultado de enviar el email */}
            {status === "success" && (
                <Toast type="success" message="Transmission_Successful: Data sent to root"/>
            )}
            {status === "error" && (
                <Toast type="error" message="Transmission_Failed: Server_Error_0x404"/>
            )}
        </section>
    )
}