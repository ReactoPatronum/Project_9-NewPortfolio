import { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ColorType = {
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ColorContext = createContext<ColorType>({} as ColorType);
export const useColor = () => useContext(ColorContext);

export const ColorContextProvider = ({ children }: Props) => {
  const [color, setColor] = useState<string>("bg-[rgb(26,26,26)]");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const contextValue = {
    color,
    setColor,
    isModalOpen,
    setIsModalOpen,
  };
  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
