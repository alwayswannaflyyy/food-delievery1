"use client";
import { Stack } from "@mui/material";
import { Step1 } from "./stepf";
import { Step2 } from "./steps";
import { Step3 } from "./stept";
import { useContext } from "react";
import { useAuth } from "@/provider/authprovider";
import { useStates } from "@/provider/stateproviders";

export default function PasswordRecovery() {
  const { index } = useAuth();
  const { setIsClicked } = useStates();

  const data = [{ cmp: <Step1 /> }, { cmp: <Step2 /> }, { cmp: <Step3 /> }];
  return (
    <Stack width="100%" overflow="hidden">
      <Stack
        width="300%"
        sx={{
          transition: "0ms",
          transform: `translateX(calc(${(-100 * index) / 3}%))`,
        }}
      >
        <Stack overflow={"hidden"} direction={"row"} height="50vh">
          {data.map((item, index) => {
            return (
              <Stack
                key={index}
                alignItems="center"
                justifyContent="center"
                width="100%"
              >
                {item.cmp}
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
}
