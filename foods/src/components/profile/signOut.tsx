"use client";

import { Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { Modal } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useAuth } from "@/provider/authprovider";

type SignOutProps = {
  openSignOut: boolean;
  setOpenSignOut: Dispatch<SetStateAction<boolean>>;
  handleOut: () => void;
};

export const SignOutConfirm = ({
  openSignOut,
  setOpenSignOut,
  handleOut,
}: SignOutProps) => {
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      open={openSignOut}
      onClose={() => {
        handleOut();
      }}
    >
      <Stack bgcolor={"#fff"} borderRadius={4}>
        <Stack p={1}>
          <Typography
            py={5}
            color={"#171717"}
            fontSize={20}
            fontWeight={600}
            width={1}
            textAlign={"center"}
          >
            Та системээс гарахдаа итгэлтэй байна уу?
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} width={1} gap={"1px"}>
          <Typography
            onClick={() => {
              signOut();
              router.push("/");
            }}
            width={0.5}
            bgcolor={"#18BA5133"}
            textAlign={"center"}
            fontSize={20}
            fontWeight={600}
            padding={"20px"}
            borderRadius={4}
            sx={{
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "common.white",
                cursor: "pointer",
              },
            }}
          >
            Тийм
          </Typography>
          <Typography
            onClick={() => {
              handleOut();
              setOpenSignOut(false);
            }}
            width={0.5}
            bgcolor={"#18BA5133"}
            textAlign={"center"}
            fontSize={20}
            borderRadius={4}
            fontWeight={600}
            padding={"20px"}
            sx={{
              "&:hover": {
                backgroundColor: "#18BA51",
                color: "common.white",
                cursor: "pointer",
              },
            }}
          >
            Үгүй
          </Typography>
        </Stack>
      </Stack>
    </Modal>
  );
};
