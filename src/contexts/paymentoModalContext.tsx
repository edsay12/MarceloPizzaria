import { useState, createContext, ReactNode } from "react";

export type PaymentModalContextType = {
  isModalOpen: boolean;
  modalToggle: () => void;
  oppenModal: () => void;
  closeModal: () => void;
};

export const PaymentModalContext = createContext<PaymentModalContextType | null>(null);

export function PaymentModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isModalOpen, setIsModalOppen] = useState(false);

  const modalToggle = () => {
    setIsModalOppen((value) => !value);
  };
  const oppenModal = () => {
    setIsModalOppen(true);
  };
  const closeModal = () => {
    setIsModalOppen(false);
  };

  return (
    <PaymentModalContext.Provider
      value={{ isModalOpen, modalToggle, oppenModal, closeModal }}
    >
      {children}
    </PaymentModalContext.Provider>
  );
}
