interface TerminalLinkProps {
    label: string;
    url: string;
    prefix?: string;
    numeration?: string;
}

// enlaces con aparience de emulador de terminal GNU Linux
// se usa condicionales para cambiar el estilo dependiendo de la precencia de `prefix`
export function TerminalLink({ label, url, prefix, numeration }: Readonly<TerminalLinkProps>) {
    return (
        <a
            href={url}
            target="_blank"
            className={`flex items-center text-txt-main/60 hover:text-primary transition-colors group/link ${prefix ? '' : 'gap-1'}`}
        >
            <span className="text-primary/50 group-hover/link:text-primary text-sm no-underline">{numeration}</span>
            <span className="text-sm underline underline-offset-4">{prefix}</span>
            <span className={`break-all text-sm underline underline-offset-4 ${prefix ? 'lowercase' : 'uppercase'}`}>{label}</span>
        </a>
    )

}