"use client";

import { Container, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/provider/authprovider";
import { AddNewCategory } from "./AddnewCategory";
import { AddNewFood } from "./AddnewFood";

export const AdminSection = () => {
  const router = useRouter();
  const { isAdmin, refresh } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  }, []);

  return (
    <Stack
      position={"relative"}
      direction={"row-reverse"}
      // height={"100vh"}
      width={"100%"}
    >
      <Stack
        width={"50%"}
        bgcolor={"#fff"}
        position={"absolute"}
        zIndex={-1}
      ></Stack>
      <Stack
        width={"50%"}
        height={"100%"}
        bgcolor={"#F7F7F8"}
        position={"absolute"}
        zIndex={-1}
      ></Stack>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "80px",
        }}
      >
        <AddNewCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <AddNewFood
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Container>
    </Stack>
  );
};
