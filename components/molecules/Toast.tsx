interface ToastProps {
    type: "success" | "error";
    message: string;
}

export function Toast({ type, message }: Readonly<ToastProps>) {
    // mensaje satisfactorio o de error. (no satisfactorio es igual a error)
    const isSuccess = type === "success";
    return (
        <div className="fixed top-5 z-50 animate-toast-in lg:left-auto lg:right-5 ">
            <div className={`flex flex-col items-center gap-3 px-4 py-3 bg-neutral border border-tertiary border-l-4 font-mono text-sm sm:flex-row ${isSuccess ? 'border-l-green-600' : 'border-l-red-500'}`} >
                <span className={`uppercase font-bold ${isSuccess ? 'text-green-600' : 'text-red-500'}`}>{isSuccess ? "[ SUCCESS ]" : "[ ERROR ]"}</span>
                <span className="text-txt-main wrap-break-word">{message}</span>
            </div>
        </div>
    )
}