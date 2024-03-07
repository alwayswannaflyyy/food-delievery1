"use client";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { api } from "@/common";
import { useAuth } from "./authprovider";

export type User = {
  _id: string;
  email: string;
  password: string;
  name: string;
  address: string;
  profileImg: string;
};

type UserContextType = {
  user: User | null;
  _id: string;
  email: string;
  password: string;
  name: string;
  address: string;
  profileImg: string;
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const { isLoggedIn } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  const [isInfo, setIsInfo] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  //profile information button function
  // const getUser = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const { data } = await api.get("/user", {
  //       headers: {
  //         Authorization: token,
  //       },
  //     });

  //     console.log(data);
  //   } catch (error: any) {
  //     if (error.response?.status === 401) {
  //       return toast.error("User authentication failed");
  //     }
  //   }
  // };
  const getUser = async () => {
    try {
      const { data } = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setUser(data);
      const { role } = data;
      console.log(data);
      if (role == "admin") {
        setIsAdmin(true);
      }

      setIsInfo(data.profile);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error: any) {
      if (error) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
    }
  };

  useEffect(() => {
    if (!isLoggedIn) return;
    getUser();
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) return;
    getUser();
  }, [isLoggedIn]);
  return (
    <UserContext.Provider value={{ user, setIsAdmin, isAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
