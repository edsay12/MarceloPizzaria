import { useState, createContext, ReactNode } from "react";

export type AuthModalContextType = {
  isModalOpen: boolean;
  oppenModal: () => void;
  closeModal: () => void;
};

export const AuthModalContext = createContext<AuthModalContextType | null>(
  null
);

export function AuthModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isModalOpen, setIsModalOppen] = useState(false);

  const oppenModal = () => {
    setIsModalOppen(true);
  };
  const closeModal = () => {
    setIsModalOppen(false);
  };

  return (
    <AuthModalContext.Provider value={{ isModalOpen, oppenModal, closeModal }}>
      {children}
    </AuthModalContext.Provider>
  );
}
