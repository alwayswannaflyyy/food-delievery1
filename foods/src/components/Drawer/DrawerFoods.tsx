"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const [count, setCount] = React.useState(1);
const decrease = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};
const increase = () => {
  setCount(count + 1);
};

const renderBox = (index: any) => (
  <Box
    key={index}
    sx={{
      borderBottom: 1,
      borderTop: 1,
      borderColor: "#D6D7DB",
      width: "538px",
      p: "16px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Stack gap={2} flexDirection={"row"}>
      <Image alt="22" src={"/pizza2.png"} width={245} height={150}></Image>
      <Stack gap={1}>
        <Stack position={"relative"}>
          <Box>
            <Typography>some random shit</Typography>
            <Typography>some random shit price</Typography>
          </Box>
          <Stack
            sx={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }}
          >
            <Typography fontSize={20}>x</Typography>
          </Stack>
        </Stack>

        <Typography color={"#767676"}>
          Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
        </Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Button
            onClick={decrease}
            sx={{ width: "30px", height: "30px", backgroundColor: "#18B951" }}
          >
            <Typography color={"white"} fontWeight={700} fontSize={30}>
              -
            </Typography>
          </Button>
          <Typography>{count}</Typography>
          <Button
            onClick={increase}
            sx={{ width: "30px", height: "30px", backgroundColor: "#18B951" }}
          >
            <Typography color={"white"} fontWeight={700} fontSize={30}>
              +
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Box>
);
const Ufucki = () => {
  const numberOfBoxes = 6;
  return (
    <div>
      {Array.from({ length: numberOfBoxes }, (_, index) => renderBox(index))}
    </div>
  );
};
export default Ufucki;
