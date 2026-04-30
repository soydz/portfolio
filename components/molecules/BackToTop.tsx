'use client'

import { SquareArrowUp } from "lucide-react"

// con el onClick se desplaza al inicio de la pagina
export function BackToTop() {
    return (
        <SquareArrowUp size={42} className="text-primary absolute bottom-20 right-12 animate-bounce hover:cursor-pointer hover:scale-125" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}/>
    )
}
