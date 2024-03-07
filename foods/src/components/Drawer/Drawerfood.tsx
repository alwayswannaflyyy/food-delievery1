"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

// const [count, setCount] = React.useState(1);
// const decrease = () => {
//     if (count > 0) {
//         setCount(count - 1);
//     }
// };
// const increase = () => {
//     setCount(count + 1);
// };

const renderBox = (index: any) => (
  <Box
    key={index}
    sx={{
      borderBottom: 1,
      borderTop: 1,
      borderColor: "#D6D7DB",
      width: "384px",
      p: "16px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <Stack gap={2} flexDirection={"row"}>
      <Image alt="22" src={"/pizza2.png"} width={184} height={121}></Image>
      <Stack gap={1}>
        <Stack position={"relative"}>
          <Box>
            <Typography>Main Pizza</Typography>
            <Typography>34,800₮</Typography>
          </Box>
        </Stack>

        <Typography color={"#767676"}>
          Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр{" "}
        </Typography>
      </Stack>
    </Stack>
  </Box>
);
const Ufuckin = () => {
  const numberOfBoxes = 1;
  return (
    <div>
      {Array.from({ length: numberOfBoxes }, (_, index) => renderBox(index))}
    </div>
  );
};
export default Ufuckin;
