'use client'

import { SquareX } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ title, isOpen, onClose, children }: Readonly<ModalProps>) {
    const modalRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useEffect(() => {
        if (!isOpen) return;

        // Evita que el fondo siga scrolleando con el modal abierto.
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const modal = modalRef.current;
        const focusableElements = modal?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements?.length) {
            (focusableElements[0] as HTMLElement).focus();
        }

        function handleKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onClose();
                return;
            }

            if (e.key !== "Tab" || !focusableElements?.length) return;

            const first = focusableElements[0] as HTMLElement;
            const last = focusableElements[focusableElements.length - 1] as HTMLElement;

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="w-full max-w-[calc(100%-2rem)] border-2 border-tertiary bg-neutral font-mono shadow-[0_24px_80px_-20px_rgba(255,92,79,0.35)] animate-[scaleIn_0.3s_ease-out] lg:max-w-4xl"
            >
                <div className="flex items-center justify-between border-b-2 border-tertiary bg-tertiary/10 p-3">
                    <span id="modal-title" className="font-mono text-xs uppercase tracking-widest text-primary">
                        {`[ System_info : ${title} ]`}
                    </span>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label={t("modal.close")}
                        className="flex size-8 items-center justify-center text-primary transition-colors hover:text-txt-title"
                    >
                        <SquareX size={20} aria-hidden="true" />
                    </button>
                </div>

                <div className="max-h-[70vh] overflow-y-auto p-5 text-txt-main sm:p-6">
                    {children}
                </div>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-tertiary p-4">
                    <span className="truncate text-xs uppercase tracking-widest text-primary">{`End of File: ${title}.log`}</span>
                    <span className="animate-pulse text-[11px] uppercase tracking-widest text-primary">SYSTEM_STATUS: STABLE</span>
                </div>
            </div>
        </div>
    )
}
