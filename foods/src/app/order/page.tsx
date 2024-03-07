"use client"

import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/card/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/headerparts/HeaderPart2";
import { CheckBox, CloudQueue, ContactMail, Fullscreen, WidthFull } from "@mui/icons-material";
import { Box, Button, CardActionArea, Checkbox, Container, Divider, Grid, Stack, TextField, TextareaAutosize, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Link from "next/link";
import { Menu } from "@/components/Menu";
import GoogleMaps from "@/components/GoogleMap";
import { FoodSign } from "@/assets/FoodSign";
import Image from "next/image";
import SelectorComponent from "@/components/Selector/Selector";
import Dropdowns from "@/components/Selector/Selector";
import Dropdowns2 from "@/components/Selector/Selector2";
import Dropdowns3 from "@/components/Selector/Selector3";
import Ufuckin from "@/components/Drawer/Drawerfood";


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Order() {
    return (
        <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pb: "30px" }} >
            {/* <ResponsiveAppBar /> */}
            <Container maxWidth="lg">
                <Stack pt={"60px"}>
                    <Stack spacing={3} direction={"row"} width={"100%"} >
                        <Stack padding={3} maxWidth={"50%"} >
                            <Stack gap={2} padding={"16px"} flexDirection={"row"} alignItems={"center"}>
                                <Image
                                    src={"/State.png"}
                                    alt="w"
                                    width={48}
                                    height={48}
                                >
                                </Image>
                                <Stack>
                                    <Typography color={"#8B8E95"}>Алхам 1</Typography>
                                    <Typography fontWeight={600}>Хаягийн мэдээлэл оруулах</Typography>
                                    <Typography color={"#0468C8"}>Хүлээгдэж байна</Typography>

                                </Stack>

                            </Stack>
                            <Stack boxShadow={2} borderRadius={"16px"} width={432} height={612} p={"24px"} gap={5}>
                                <Stack gap={2}>
                                    <Typography>Хаяг аа оруулна уу</Typography>
                                    <Stack gap={3}>
                                        <Dropdowns />
                                        <Dropdowns2 />
                                        <Dropdowns3 />
                                    </Stack>
                                </Stack>
                                <Stack gap={4}>
                                    <Stack>
                                        <Typography>Нэмэлт мэдээлэл</Typography>
                                        <TextareaAutosize style={{ height: "92px", padding:"10px" }} placeholder="Орц, давхар, орцны код ..." ></TextareaAutosize>
                                    </Stack>
                                    <TextField placeholder="Утасны дугаараа оруулна уу" label="Утасны дугаар"></TextField>
                                    <Stack>
                                        <Typography>Төлбөр төлөх</Typography>
                                        <Stack flexDirection={"row"} gap={"33px"}>
                                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <Checkbox {...label} color="default" />
                                                <Typography color={"#8B8E95"}>Бэлнээр</Typography>
                                            </Box>
                                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                                <Checkbox {...label} color="default" />
                                                <Typography color={"#8B8E95"}>Картаар</Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        <Stack padding={3} maxWidth={"50%"} >
                            <Stack gap={2} padding={"16px"} flexDirection={"row"} alignItems={"center"}>
                                <Image
                                    src={"/State.png"}
                                    alt="w"
                                    width={48}
                                    height={48}
                                >
                                </Image>
                                <Stack>
                                    <Typography color={"#8B8E95"}>Алхам 2</Typography>
                                    <Typography fontWeight={600}>Захиалга баталгаажуулах</Typography>
                                    <Typography color={"#0468C8"}>Хүлээгдэж байна</Typography>
                                </Stack>
                            </Stack>
                            <Stack boxShadow={2} borderRadius={"16px"} width={432} height={612} p={"24px"} gap={5} >
                                {/* <Stack gap={2} wid>
                                    <Typography>Хаяг аа оруулна уу</Typography>
                                    <CustomInput placeholder="Дүүрэг сонгоно уу" type="email"></CustomInput>
                                    <CustomInput placeholder="Хороо сонгоно уу" type="email"></CustomInput>
                                    <CustomInput placeholder="Байр, гудамж сонгоно уу" type="email"></CustomInput>
                                </Stack>
                                <Stack gap={4}>
                                    <CustomInput placeholder="Орц, давхар, орцны код ..." label="Нэмэлт мэдээлэл"></CustomInput>
                                    <CustomInput placeholder="Утасны дугаараа оруулна уу" label="Утасны дугаар"></CustomInput>
                                    <Stack>
                                        <Typography>Төлбөр төлөх</Typography>
                                        <Stack flexDirection={"row"} gap={"33px"}>
                                            <Box>

                                                <Typography color={"#8B8E95"}>Бэлнээр</Typography>
                                            </Box>
                                            <Box>

                                                <Typography color={"#8B8E95"}>Картаар</Typography>
                                            </Box>
                                        </Stack>
                                    </Stack>
                                </Stack> */}
                                <Stack overflow={"scroll"}>
                                    <Ufuckin></Ufuckin>
                                    <Ufuckin></Ufuckin>
                                    <Ufuckin></Ufuckin>
                                </Stack>
                                <Stack gap={1.25} alignItems={"center"} height={"54px"} flexDirection={"row"}>
                                    <Stack width={256}>
                                        <Typography color={"#5E6066"} fontWeight={400} fontSize={17}>Нийт төлөх дүн</Typography>
                                        <Typography color={"#121316"} fontWeight={700}>34,800₮</Typography>
                                    </Stack>
                                    <Button sx={{
                                        px: 4,
                                        height: 48,
                                        width: 187,
                                    }} variant="contained">Захиалах</Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

