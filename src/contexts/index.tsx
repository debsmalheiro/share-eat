import { useState, createContext } from "react";

import { mock } from "../mock";

interface AppProviderProps {
  children: React.ReactNode;
}

interface MenuProps {
  name: string;
  description: string;
  price: number;
}

export interface LocalsProps {
  name: string;
  menuItems: MenuProps[];
}

interface ContextProps {
  locals: LocalsProps[];
  setLocals: React.Dispatch<React.SetStateAction<LocalsProps[]>>;
  localSelected: LocalsProps;
  setLocalSelected: React.Dispatch<React.SetStateAction<LocalsProps>>;
}

export const Context = createContext({} as ContextProps);

export const ContextProvider = ({ children }: AppProviderProps) => {
  const [locals, setLocals] = useState<LocalsProps[]>(mock);
  const [localSelected, setLocalSelected] = useState({} as LocalsProps);

  return (
    <Context.Provider
      value={{ locals, setLocals, localSelected, setLocalSelected }}
    >
      {children}
    </Context.Provider>
  );
};
