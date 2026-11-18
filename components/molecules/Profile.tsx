import { Button } from "../atoms";
import { HumanDataProps, StrengthProps } from "./ProfileDetails";
import Image from "next/image";

export interface ModalData {
  human: HumanDataProps;
  strengths: StrengthProps[];
}

// props para el header
export interface ProfileData {
  fullName: string;
  greeting: string;
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
  greeting,
  jobTitle,
  avatarUrl,
  description,
  labelBtn,
  onBtnClick,
}: Readonly<ProfileProps>) {
  return (
    <article className="grid gap-8 overflow-hidden border border-tertiary bg-neutral px-6 pt-6 pb-0 sm:px-8 sm:pt-8 sm:pb-0 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-10 lg:px-10 lg:pt-10 lg:pb-0 xl:grid-cols-[minmax(0,1fr)_300px]">
      <div className="flex min-w-0 flex-col gap-5 pb-6 text-center sm:pb-8 lg:pb-10 lg:text-left">
        <p className="font-mono text-xs tracking-[0.25em] text-primary">
          {`/// INIT_SEQUENCE: PROFILE`}
        </p>

        <h1 className="text-balance text-4xl font-medium leading-[1.05] tracking-tight text-txt-title sm:text-5xl 2xl:text-6xl">
          {greeting} {fullName}
        </h1>

        <p className="text-balance font-black uppercase leading-[1.05] tracking-tighter text-gradient text-3xl sm:text-4xl xl:text-4xl 2xl:text-5xl">
          {jobTitle}
        </p>

        <p className="max-w-[68ch] text-pretty font-sans text-base leading-relaxed text-txt-main">
          {description}
        </p>

        <div className="pt-2 lg:mt-auto">
          <Button variant="outline" onClick={onBtnClick}>
            {labelBtn}
          </Button>
        </div>
      </div>

      {/* efectos aplicados a la foto */}
      <div className="flex w-full items-end justify-center self-end">
        <div className="group relative">
          {/* efecto glow */}
          <div className="absolute inset-0 bg-primary/20 blur-3xl transition-colors duration-500 group-hover:bg-primary/35" />

          <div className="relative z-10 overflow-hidden">
            <Image
              src={avatarUrl}
              alt={`Retrato de ${fullName}`}
              width={320}
              height={320}
              priority
              sizes="(max-width: 639px) 160px, (max-width: 767px) 224px, (max-width: 1279px) 288px, 320px"
              className="w-40 scale-100 transition-all duration-700 ease-in-out group-hover:scale-[1.03] sm:w-56 md:w-72 lg:max-h-[440px] lg:w-full lg:max-w-[320px] lg:object-cover lg:object-top lg:grayscale lg:group-hover:grayscale-0 xl:max-w-[300px]"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
