"use client";
import { Container, Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Image from "next/image";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { CustomInput } from "@/components";
import { useAuth } from "@/provider/authprovider";
import { MyProfile } from "@/components/profile/Profile";

export default function UserProfile() {
  const { signOut } = useAuth();
  return <MyProfile />;
}
