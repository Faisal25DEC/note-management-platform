"use client";

import { useEffect, useState } from "react";
import { SettingsModals } from "../modals/settings-modal";
import { CoverImageModal } from "@/components/modals/cover-image-modal";

export const ModalProvider = () => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <SettingsModals />
      <CoverImageModal />
    </>
  );
};
