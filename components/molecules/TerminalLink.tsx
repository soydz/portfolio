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
            rel="noreferrer noopener"
            className={`flex items-start text-txt-main/80 transition-colors hover:text-primary group/link ${prefix ? '' : 'gap-1.5'}`}
        >
            <span className="mt-px shrink-0 font-mono text-[13px] text-primary/80 group-hover/link:text-primary">{numeration}</span>
            <span className="text-[13px] underline decoration-tertiary underline-offset-4 group-hover/link:decoration-primary">
                {prefix && <span className="text-txt-main/70">{prefix}</span>}
                <span className={`break-all ${prefix ? 'lowercase' : 'uppercase'}`}>{label}</span>
            </span>
        </a>
    )

}
