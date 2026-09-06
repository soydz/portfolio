export interface PersonalInformationProps {
  title: string;
}

export function PersonalInformation({
  title,
}: Readonly<PersonalInformationProps>) {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="bg-green-800 w-40"></div>
      <div className="text-left w-full">
        <h3 className="uppercase text-txt-main font-semibold font-mono">{title}</h3>
        <hr className="text-txt-main/50" />
      </div>
    </div>
  );
}
