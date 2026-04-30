'use client'

import { Modal, Profile, ProfileData, ProfileDetails } from "../molecules";
import { useState } from "react";

interface HeaderProps {
  profile: ProfileData;
  titleModal: string;
}

export function Header({ profile, titleModal }: Readonly<HeaderProps>) {
  // para controlar la apertura y cierre del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-neutral">
      {/* inyecta las propiedades de profile como props individuales */}
      {/* pasamos la función para apertura y cierre del modal */}
      <Profile
        {...profile}
        onBtnClick={() => setIsModalOpen(true)}
      />

      <Modal title={titleModal} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {profile.modalData && (
          <ProfileDetails
            human={profile.modalData?.human}
            strengths={profile.modalData?.strengths}
          />
        )}
      </Modal>
    </header>
  );
}
