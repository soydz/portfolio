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
        <div className="flex flex-col gap-10 font-mono text-sm">
            <section className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-primary/75 text-sm tracking-widest uppercase">
                        {`// Human_Mode`}
                    </span>
                    <div className="h-0.5 flex-1 bg-tertiary/30"></div>
                </div>

                <div className="flex flex-col gap-5">
                    {/* renderiza todos los datos personales, información mas humana */}
                    {humanRecords.map((record, index) => (
                        <div key={record.key} className="flex flex-col gap-1">
                            <span className="text-primary/60 uppercase tracking-tighter text-xs">
                                {`0x0${index + 1} : ${record.key}`}
                            </span>
                            <p className="text-txt-main leading-relaxed pl-2">
                                {record.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-primary/75 uppercase text-sm tracking-widest ">
                        {`// Core_Strengths`}
                    </span>
                </div>
                {/* crea columnas para las fortalezas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {strengths.map((item) => (
                        <div key={item.label} className="flex justify-between items-center border-b border-tertiary pb-1">
                            <span className="text-primary/60 text-xs uppercase">{item.label}</span>
                            <span className="text-txt-main text-xs font-bold uppercase">{item.value}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}