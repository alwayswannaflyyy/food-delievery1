// "use client";

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { Box, CardActionArea, Stack } from "@mui/material";
// import { title } from "process";
// import ActionAreaCard from "../card/CardCom";
// import { FoodSign } from "@/assets/FoodSign";
// import CustomCard from "../card/CardCom2";
// import { useFood } from "@/provider/FoodProvider";

// // type CustomCardProps = {
// //   title: string;
// //   image: string;
// // };

// export default function SelectedFoods() {
//     const { selectedCategory, } = useFood()
//   return (
//     <Stack gap={3} py={"16px"}>
//       <Box
//         sx={{
//           py: "16px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "5px",
//           textAlign: "center",
//           alignItems: "center",
//         }}
//       >
//         <FoodSign />
//         <Typography fontWeight={700} fontSize={20}>
//           Амттан
//         </Typography>
//       </Box>
//       <Stack gap={3} flexDirection={"row"}>
//         <ActionAreaCard></ActionAreaCard>
//         <ActionAreaCard></ActionAreaCard>
//         <ActionAreaCard></ActionAreaCard>
//         <ActionAreaCard></ActionAreaCard>
//       </Stack>
//     </Stack>
//   );
// }

"use client";

import { Container, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CardModel } from "../card/CardModel";
import { useFood } from "@/provider/FoodProvider";
import { FoodSign } from "@/assets/FoodSign";

type SelectedFoodsProps = {
  category: string;
};

export const SelectedFoods = (props: SelectedFoodsProps) => {
  const router = useRouter();
  const { category } = props;
  const { foods, setSelectedCategory } = useFood();
  return (
    <Stack width={"1264px"}>
      <Stack>
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              padding={2}
              width={"100%"}
              direction={"row"}
              justifyContent={"space-between"}
            >
              <Stack spacing={1} direction={"row"} alignItems={"center"}>
                <FoodSign />
                <Typography fontSize={22} fontWeight={700}>
                  {category}
                </Typography>
              </Stack>

              <Stack
                gap={2}
                direction={"row"}
                alignItems={"center"}
                onClick={() => {
                  setSelectedCategory(category);
                  router.push("food-menu");
                }}
              >
                <Typography color={"#18BA51"} fontSize={14} fontWeight={400}>
                  Бүгдийг харах
                </Typography>
                <Image src="/q.svg" alt="" width={10} height={15} />
              </Stack>
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Grid container spacing={3}>
                {foods
                  .filter((item) => item.category == category)
                  .map((item, index) => (
                    <Grid key={index} item xs={12} md={3}>
                      <CardModel {...item} />
                    </Grid>
                  ))}
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
};
