import { Button } from "../atoms";
import { HumanDataProps, StrengthProps } from "./ProfileDetails";

export interface ModalData {
  human: HumanDataProps;
  strengths: StrengthProps[];
}

// props para el header
export interface ProfileData {
  fullName: string;
  jobTitle: string;
  avatarUrl: string;
  description: string;
  labelBtn: string;
  modalData?: ModalData;
}

// prop para la funcion que activa el modal
export interface ProfileProps extends ProfileData {
  onBtnClick: () => void;
}

export function Profile({
  fullName,
  jobTitle,
  avatarUrl,
  description,
  labelBtn,
  onBtnClick,
}: Readonly<ProfileProps>) {
  return (
    <article className="flex flex-col items-center border border-tertiary px-4 pt-10 sm:px-6 xl:flex-row xl:px-10 xl:items-start">
      <div className="flex flex-col gap-6 text-center max-w-full xl:max-w-2/3 lg:text-left">
        <p className="text-primary opacity-80 text-sm tracking-widest font-mono">{`/// INIT_SEQUENCE: PROFILE`}</p>
        <div className="flex flex-col gap-4 h-full justify-between py-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">I'm {fullName}</h2>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black uppercase tracking-tighter text-gradient">{jobTitle}</h2>
          </div>
          <div>
            <p className="px-4 leading-loose text-txt-main">{description}</p>
          </div>
          <div className="mb-4">
            <Button variant="outline" onClick={onBtnClick}>{labelBtn}</Button>
          </div>
        </div>
      </div>

      {/* efectos aplicados a la foto */}
      <div className="w-full flex justify-center items-end mt-6 lg:mt-0 xl:self-end">
        <div className="relative group">
          {/* efecto glow */}
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse group-hover:bg-primary/40 transition-all duration-500" />

          <div className="relative z-10 overflow-hidden">
            <img
              src={avatarUrl}
              alt={fullName}
              className="w-40 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105 sm:w-64 md:w-72 lg:w-80 lg:grayscale lg:group-hover:grayscale-0 xl:object-cover"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
