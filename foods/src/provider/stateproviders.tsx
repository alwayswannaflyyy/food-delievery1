"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type StateContextType = {
  isOpenDrawer: boolean;
  setIsOpenDrawer: Dispatch<SetStateAction<boolean>>;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
  isCreateFood: boolean;
  setIsCreateFood: Dispatch<SetStateAction<boolean>>;
  isCategory: boolean;
  setIsCategory: Dispatch<SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
};

export const StateContext = createContext<StateContextType>(
  {} as StateContextType
);
type AuthProviderType = {
  children: React.ReactNode;
};

export const StateProvider = ({ children }: AuthProviderType) => {
  //States

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isCreateFood, setIsCreateFood] = useState(false);
  const [isCategory, setIsCategory] = useState(false);
  const [email, setEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isOpenDrawer,
        setIsOpenDrawer,
        email,
        setEmail,
        isCategory,
        setIsCategory,
        isCreateFood,
        setIsCreateFood,
        isClicked,
        setIsClicked,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStates = () => {
  return useContext(StateContext);
};
