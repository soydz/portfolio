'use client'

import { SquareX } from "lucide-react";
import { ReactNode, useEffect, useRef } from "react";

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ title, isOpen, onClose, children }: Readonly<ModalProps>) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

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
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div ref={modalRef} data-modal className="w-full max-w-11/12 bg-neutral border-2 border-tertiary font-mono shadow-[0_0_20px_rgba(255,92,79,0.3)] lg:max-w-5xl">
                <div className="flex justify-between items-center p-3 border-b-2 border-tertiary bg-tertiary/10">
                    <span className="text-primary text-xs tracking-widest uppercase">
                        {`[ System_info : ${title} ]`}
                    </span>
                    <SquareX
                        onClick={onClose}
                        size={22}
                        className="text-primary hover:cursor-pointer hover:text-white transition-colors font-bold"
                        aria-label="Close modal"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && onClose()}
                    />
                </div>

                <div className="p-6 overflow-y-auto max-h-[70vh] text-txt-main">
                    {children}
                </div>

                <div className="mt-4 p-4 border-t border-tertiary flex justify-between items-center">
                    <span className="text-primary/50 uppercase text-xs tracking-widest">{`End of File: ${title}.log`}</span>
                    <span className="text-primary/60 animate-pulse uppercase text-xs tracking-widest">SYSTEM_STATUS: STABLE</span>
                </div>
            </div>
        </div>
    )
}
