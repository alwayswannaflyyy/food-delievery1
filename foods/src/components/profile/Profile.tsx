"use client";

import { Container, Stack, Typography } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";

import Image from "next/image";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { EditProfileImg } from "./profileeditor";
import { CustomInput } from "..";
import { useAuth } from "@/provider/authprovider";
import { useUser } from "@/provider/userprovider";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { SignOutConfirm } from "./signOut";

export const MyProfile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  // const { name, email, address, password, profileImg } = user;
  const [openSignOut, setOpenSignOut] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!user) return;

    setImageUrl(user.profileImg);
  }, [user]);
  useEffect(() => {
    if (!user) return;

    setUserName(user.name);
  }, [user]);

  return (
    <Stack height={"70vh"} justifyContent={"center"}>
      <Container>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack spacing={3}>
            <Stack
              spacing={5}
              justifyContent={"center"}
              alignItems={"center"}
              paddingX={"20px"}
            >
              <Stack position={"relative"}>
                <img
                  src={imageUrl}
                  alt=""
                  width={133}
                  height={133}
                  style={{
                    borderRadius: "50%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <Box
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Stack
                    position={"absolute"}
                    bottom={-5}
                    right={-1}
                    zIndex={1}
                    width={34}
                    height={34}
                    border={1}
                    borderRadius={"50%"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    bgcolor={"#FFF"}
                  >
                    <CreateOutlinedIcon sx={{ color: "primary.main" }} />
                  </Stack>
                </Box>
                <EditProfileImg
                  open={open}
                  handleClose={() => setOpen(false)}
                  setImageUrl={setImageUrl}
                  imageUrl={imageUrl}
                />
              </Stack>
              <Typography fontSize={28} fontWeight={700}>
                {/* saihnaa love */}
                {user?.name}
                {/* setUserName={setImageUrl} */}
              </Typography>
            </Stack>

            <Stack paddingX={"20px"} paddingTop={2} spacing={2}></Stack>
          </Stack>
          <Stack gap={2}>
            <CustomInput type="text" label="Таны нэр" />
            <CustomInput type="number" label="Утасны дугаар" />
            <CustomInput type="email" label="Имэйл хаяг" />
            <Stack
              direction={"row"}
              width={"100%"}
              py={2}
              px={1.7}
              gap={2}
              alignItems={"center"}
            >
              <Stack
                border={1}
                borderColor={"#EEEFF2"}
                p={"5px"}
                borderRadius={"50%"}
              >
                <HistoryOutlinedIcon />
              </Stack>
              <Typography>Захиалгын түүх</Typography>
            </Stack>
            {/* <Stack
              direction={"row"}
              width={"100%"}
              py={2}
              px={1.7}
              gap={2}
              alignItems={"center"}
            >
              <Stack
                border={1}
                borderColor={"#EEEFF2"}
                p={"5px"}
                borderRadius={"50%"}
              >
                <ExitToAppIcon />
              </Stack>
              <Typography>Гарах</Typography>
            </Stack> */}
            <Stack
              direction={"row"}
              width={"100%"}
              py={2}
              px={1.7}
              gap={2}
              alignItems={"center"}
              onClick={() => {
                setOpenSignOut(true);
              }}
            >
              <Stack
                border={1}
                borderColor={"#EEEFF2"}
                p={"5px"}
                borderRadius={"50%"}
              >
                <ExitToAppIcon />
              </Stack>
              <Typography>Гарах</Typography>
              <SignOutConfirm
                openSignOut={openSignOut}
                handleOut={() => setOpenSignOut(false)}
                setOpenSignOut={setOpenSignOut}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
