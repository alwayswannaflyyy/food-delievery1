"use client"

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Stack } from "@mui/material";
import { title } from "process";
import ActionAreaCard from "./CardCom";
import { FoodSign } from "@/assets/FoodSign";
import CustomCard from "./CardCom2";

// type CustomCardProps = {
//   title: string;
//   image: string;
// };

export default function FoodSale() {
    return (
        <Stack gap={3} py={"16px"}>
            <Box sx={{py:"16px", display: "flex", flexDirection:"row", gap:"5px", textAlign:"center", alignItems:"center" }}>
                <FoodSign/>
                <Typography fontWeight={700} fontSize={20}>Хямдралтай</Typography>
            </Box>
            <Stack gap={5} flexDirection={"row"}>
{/* 
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard>
                <ActionAreaCard></ActionAreaCard> */}
                <CustomCard image="zlatan.png"/>
                <CustomCard></CustomCard>
                <CustomCard></CustomCard>
                <CustomCard></CustomCard>

            </Stack>
        </Stack>
    );
}