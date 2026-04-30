import { SquareX } from "lucide-react";
import { ReactNode } from "react";

export interface ModalProps {
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function Modal({ title, isOpen, onClose, children }: Readonly<ModalProps>) {

    // si `isOpen` es null, no se muestra el modal
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="w-full max-w-11/12 bg-neutral border-2 border-tertiary font-mono shadow-[0_0_20px_rgba(255,92,79,0.3)] lg:max-w-5xl">
                <div className="flex justify-between items-center p-3 border-b-2 border-tertiary bg-tertiary/10">
                    <span className="text-primary text-xs tracking-widest uppercase">
                        {`[ System_info : ${title} ]`}
                    </span>
                    <SquareX onClick={onClose} size={22} className="text-primary hover:cursor-pointer hover:text-white transition-colors font-bold" />
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