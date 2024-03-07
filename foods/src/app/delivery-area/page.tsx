import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/card/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/headerparts/HeaderPart2";
import { CloudQueue, ContactMail, Fullscreen, WidthFull } from "@mui/icons-material";
import { Box, Button, CardActionArea, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Link from "next/link";
import { Menu } from "@/components/Menu";
import GoogleMaps from "@/components/GoogleMap";
import { FoodSign } from "@/assets/FoodSign";


Container
export default function DeliveryArea() {
    return (
        <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", pb:"100px", pt:"30px" }} >
            {/* <ResponsiveAppBar /> */}
            <Container maxWidth="lg">
                <Stack height={"500px"} width={"100%"} sx={{ backgroundColor: "green" }}>
                    <GoogleMaps></GoogleMaps>
                </Stack>
                <Stack pt={"70px"}>
                    <Box sx={{ flexDirection: "row", display: "flex" }}>
                        <FoodSign></FoodSign>
                        <Typography fontWeight={700}>Хүргэлтийн бүс дэх хаягууд</Typography>
                    </Box>
                </Stack>
                <Stack pt={"60px"}> 
                    <Stack spacing={3} direction={"row"} width={"100%"} >
                        <Stack padding={3} width={"50%"} boxShadow={2} borderRadius={"16px"}>
                            <Typography paddingY={2} fontSize={20} fontWeight={590}>
                                А бүс
                            </Typography>
                            <Divider
                                sx={{
                                    borderColor: "primary.main",
                                    marginBottom: "16px",
                                }}
                            />
                            <Grid container spacing={2} width={"50%"}>
                                {new Array(12).fill(0).map((_, index) => (
                                    <Grid key={index} item xs={6} spacing={2}>
                                        <Typography fontSize={16} fontWeight={400}>
                                            Нархан хотхон
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>

                        <Stack padding={3} width={"50%"} boxShadow={2} borderRadius={"16px"}>
                            <Typography paddingY={2} fontSize={20} fontWeight={590}>
                                Б бүс
                            </Typography>
                            <Divider
                                sx={{
                                    borderColor: "primary.main",
                                    marginBottom: "16px",
                                }}
                            />
                            <Grid container spacing={2}  width={"50%"}>
                                {new Array(12).fill(0).map((_, index) => (
                                    <Grid key={index} rowSpacing={20} item xs={6}>
                                        <Typography fontSize={16} fontWeight={400}>
                                            26-р байр
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>


            {/* <FooterPart /> */}
        </Stack>
    )
}