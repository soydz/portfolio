interface ToastProps {
    type: "success" | "error";
    message: string;
}

export function Toast({ type, message }: Readonly<ToastProps>) {
    // mensaje satisfactorio o de error. (no satisfactorio es igual a error)
    const isSuccess = type === "success";
    return (
        <div
            role={isSuccess ? "status" : "alert"}
            className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 animate-toast-in lg:left-auto lg:right-5 lg:w-auto lg:max-w-none lg:translate-x-0"
        >
            <div className={`flex flex-col items-center gap-3 border border-tertiary border-l-2 bg-neutral px-4 py-3 font-mono text-sm sm:flex-row ${isSuccess ? 'border-l-green-500' : 'border-l-red-500'}`} >
                <span className={`font-mono text-xs font-bold uppercase tracking-wider ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>{isSuccess ? "[ SUCCESS ]" : "[ ERROR ]"}</span>
                <span className="text-center text-txt-main sm:text-left">{message}</span>
            </div>
        </div>
    )
}
