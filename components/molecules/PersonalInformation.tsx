export interface PersonalInformationProps {
  jobTitle: string;
}

export function PersonalInformation({
  jobTitle,
}: Readonly<PersonalInformationProps>) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-green-800 w-40"></div>
      <div className="text-center">
        <p className="text-txt-accent uppercase">{jobTitle}</p>
      </div>
    </div>
  );
}
