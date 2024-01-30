"use client"

import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/HeaderPart2";
import { CloudQueue, Fullscreen, WidthFull } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CardOption from "@/components/Option";
import CustomCard from "@/components/CardCom2";
import FoodSale from "@/components/FoodSale";
import MainFood from "@/components/MainFood";
import SaladFood from "@/components/SaladFood";
import DessertFood from "@/components/Desserts";
import Image from "next/image";




export default function Sign() {
    return (
        <Stack gap={3} width={"100vw"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
            <ResponsiveAppBar />
            <Stack sx={{ width: "100vw", height: "740px", backgroundColor: "#18B951", backgroundImage: "url(/food.png)", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                <Container maxWidth="lg" sx={{display:"flex", justifyContent:"space-between"}}>
                    <Stack gap={2.875} justifyContent={"start"}>
                        <Stack>
                            <Typography fontSize={55} fontWeight={500} color={"white"}>Pinecone</Typography>
                            <Typography fontSize={55} color={"white"}> Food delivery</Typography>
                        </Stack>
                        <Box sx={{ width: "343px", border: 1, borderColor: "white" }}></Box>
                        <Stack>
                            <Typography fontFamily={"sans-serif"} fontSize={25} color={"white"}>Horem ipsum dolor sit amet,</Typography>
                            <Typography fontSize={25} color={"white"}>consectetur adipiscing elit.</Typography>
                        </Stack>
                    </Stack>
                    <Stack sx={{ position: "relative", width:"588px"}}>
                        <Image
                            width={443}
                            height={438}
                            src="/image 13.png"
                            alt=""
                            style={{
                                position: "absolute",
                                top: "-100px",
                                left: "120px"
                            }}
                        />
                        <Image
                            alt=""
                            width={313}
                            height={313}
                            src="/image 14.png"
                            style={{
                                display: "flex", justifyContent: "center", alignItems: "center", position: "absolute",
                                left: "392px", top: "1px"
                            }}
                        />




                    </Stack>
                </Container>
            </Stack>
            <Box sx={{ pt: "150px" }}>
                <CardOption></CardOption>
            </Box>
            <Stack gap={10} pb={"100px"}>
                <FoodSale></FoodSale>
                <MainFood></MainFood>
                <SaladFood></SaladFood>
                <DessertFood></DessertFood>
            </Stack>

            <FooterPart />
        </Stack>
    )
}