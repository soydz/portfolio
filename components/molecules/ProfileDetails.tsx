// props para el modal, parte humana
export interface HumanDataProps {
    hobbies: string;
    motivation: string;
    curiosities: string;
    philosophy: string;
    soundtrack: string;
}

// props para el modal, fortalezas tecnicas
export interface StrengthProps {
    label: string;
    value: string;
}

interface ProfileDetailsProps {
    human: HumanDataProps;
    strengths: StrengthProps[];
}

export function ProfileDetails({ human, strengths }: Readonly<ProfileDetailsProps>) {

    // simplifica el html, permite usar un map.
    const humanRecords = [
        { key: "HOBBIES", value: human.hobbies },
        { key: "MOTIVATION", value: human.motivation },
        { key: "CURIOSITIES", value: human.curiosities },
        { key: "PHILOSOPHY", value: human.philosophy },
        { key: "SOUNDTRACK", value: human.soundtrack },
    ];

    return (
        <div className="flex flex-col gap-10 text-sm">
            <section className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary/90">
                        {`// Human_Mode`}
                    </span>
                    <div aria-hidden="true" className="h-px flex-1 bg-tertiary/60"></div>
                </div>

                <div className="flex flex-col gap-5">
                    {/* renderiza todos los datos personales, información mas humana */}
                    {humanRecords.map((record, index) => (
                        <div key={record.key} className="flex flex-col gap-1">
                            <span className="font-mono text-[11px] uppercase tracking-wide text-primary/90">
                                {`0x0${index + 1} : ${record.key}`}
                            </span>
                            <p className="max-w-[72ch] pl-2 font-sans text-sm leading-relaxed text-txt-main/90">
                                {record.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary/90">
                        {`// Core_Strengths`}
                    </span>
                    <div aria-hidden="true" className="h-px flex-1 bg-tertiary/60"></div>
                </div>
                {/* crea columnas para las fortalezas */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {strengths.map((item) => (
                        <div key={item.label} className="flex items-center justify-between gap-4 border-b border-tertiary pb-1.5">
                            <span className="font-mono text-[11px] uppercase tracking-wide text-primary/90">{item.label}</span>
                            <span className="text-right font-mono text-[11px] font-bold uppercase text-txt-main/90">{item.value}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
