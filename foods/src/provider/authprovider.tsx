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
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { api } from "@/common";
import { AxiosError } from "axios";
export type foodParams = {
  name: string;
  ingredients: string;
  discount: number;
  foodimg: string;
  price: number;
  category: string;
};

//Доорх функцанд авж буй хувьсагчдын төрөлийг зааж өөртөө хадгалж байна.

type signupParams = {
  email: string;
  password: string;
  name: string;
  address: string;
};

//Нэвтрэх төрөл
type loginParams = {
  email: string;
  password: string;
};

type recoveryParams = {
  recovery_email: string;
};

type resetpasswordParams = {
  code?: string;
  email: string;
  password?: string;
};
type newpasswordParams = {
  password: string;
  email: string;
};
type Category = {
  foodCategory: string;
};

//Мөн AuthContextType функцанд дотор энд бичсэн 2 функцын төрөлийг зааж өгч байна.
type AuthContextType = {
  signup: (params: signupParams) => Promise<void>;
  login: (params: loginParams) => void;
  refresh: number;
  isProfile: boolean;
  isLoggedIn: boolean;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  signOut: () => Promise<void>;
  recovery: (params?: recoveryParams) => void;
  index: number;
  getFood: () => Promise<void>;
  setIndex: Dispatch<SetStateAction<number>>;
  resetpassword: (params?: resetpasswordParams) => Promise<void>;
  newpassword: (params?: newpasswordParams) => Promise<void>;
  setRefresh: Dispatch<SetStateAction<number>>;
  isOtp: string;
  setIsOtp: Dispatch<SetStateAction<string>>;
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  categories: Category[];
  getCategories: () => Promise<void>;
  postCategory: (foodCategory: string) => Promise<void>;
  createFood: (params: foodParams) => Promise<void>;
  foods: foodParams[];
};

//Шинэ контекст үүсгэж түүнд AuthContextType-г агуулж төрөлийг зааж өгнө.
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

type AuthProviderType = {
  children: React.ReactNode;
};

//AuthProvider component эндээс эхэлнэ. Layout-аас {children}-г react-ийн PropsWithChildren ашиглан авж байна.
export const AuthProvider = ({ children }: AuthProviderType) => {
  const [open, setOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false); //User button
  const [isLoggedIn, setIsLoggedIn] = useState(false); //Login state
  const [index, setIndex] = useState(0); //Carousel index
  const router = useRouter();
  const [refresh, setRefresh] = useState(1);
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   address: "",
  //   password: "",
  //   profileImg:
  //     "https://teams.microsoft.com/l/message/19:453abb07-68bd-4043-9d57-9152f07da242_d25fb1a3-f314-43d0-bff6-58d864ab3e92@unq.gbl.spaces/1708402672130?context=%7B%22contextType%22%3A%22chat%22%7D",
  // });
  const [categories, setCategories] = useState<Category[]>([]);
  const [foods, setFoods] = useState<foodParams[]>([]);
  const [isOtp, setIsOtp] = useState("");
  const [isInfo, setIsInfo] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  //SignUp function

  const signup = async (params: signupParams) => {
    try {
      const { data } = await api.post("/signup", params);
      router.push("/");
      setIsProfile(true);
      // setIsLoggedIn(true);
      toast.success("Амжилттай бүртгэгдлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  //Login Function
  const login = async (params: loginParams) => {
    try {
      const { data } = await api.post("/login", params);
      const { token } = data;
      localStorage.setItem("token", token);
      setIsProfile(true);
      setIsLoggedIn(true);
      setOpen(false);
      router.push("/main");
      toast(data.message);
      toast.success("Амжилттай нэвтэрлээ", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsProfile(true);
      setIsLoggedIn(true);
    }
  }, []);

  const recovery = async (params?: recoveryParams) => {
    try {
      const { data } = await api.post("/send", params);

      toast.success(data.message, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
      });

      setIndex((prev) => prev + 1);
    } catch (error: any) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
      });
    }
  };

  const resetpassword = async (params?: resetpasswordParams) => {
    try {
      const { data } = await api.post("/code", params);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
      router.push("/");
    } catch (error: any) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
      });
      setIndex(1);
    }
  };

  const newpassword = async (params?: newpasswordParams) => {
    try {
      const { data } = await api.post("/newpassword", params);
      // console.log(params.password);
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error: any) {
      toast.error(error.response?.data.message ?? error.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    }
  };

  const signOut = async () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const getUser = async () => {
    try {
      const { data } = await api.get("/getUser", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      const { role } = data;
      console.log("gggggggg", data);
      if (role === "admin") {
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
    if (isLoggedIn) getUser();
  }, [isLoggedIn, refresh, setIsAdmin, isAdmin]);

  //create food section
  const createFood = async (params: foodParams) => {
    try {
      const { data } = await api.post("/foods/createFood", params);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error: any) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

  const getFood = async () => {
    try {
      const { data } = await api.get("foods/getFood", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setFoods(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  const postCategory = async (foodCategory: string) => {
    try {
      const { data } = await api.post(
        "foods/createCategory",
        { foodCategory },
        {
          headers: { Authorization: localStorage.getItem("token") },
        }
      );
      toast.success(data.message, {
        position: "top-center",
        hideProgressBar: true,
      });
    } catch (error: any) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          hideProgressBar: true,
        });
      }
      console.log(error), "FFF";
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await api.get("foods/getCategory", {
        headers: { Authorization: localStorage.getItem("token") },
      });
      setCategories(data);
    } catch (error) {
      console.log(error), "FFF";
    }
  };

  useEffect(() => {
    getCategories();
    getFood();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        refresh,
        getFood,
        foods,
        categories,
        getCategories,
        postCategory,
        createFood,
        signup,
        login,
        isProfile,
        isLoggedIn,
        open,
        setOpen,
        recovery,
        index,
        setIndex,
        resetpassword,
        signOut,
        newpassword,
        setRefresh,
        isOtp,
        setIsOtp,
        isAdmin,
        setIsAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
