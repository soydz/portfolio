import { Avatar } from "../atoms";

export interface PersonalInformationProps {
  avatarUrl: string;
  fullName: string;
  jobTitle: string;
}

export function PersonalInformation({
  avatarUrl,
  fullName,
  jobTitle,
}: Readonly<PersonalInformationProps>) {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-green-800 w-40">
      <Avatar src={avatarUrl} alt={fullName} />
      </div>
      <div className="text-center">
        <h2 className="text-txt-title">{fullName}</h2>
        <p className="text-txt-accent uppercase">{jobTitle}</p>
      </div>
    </div>
  );
}
