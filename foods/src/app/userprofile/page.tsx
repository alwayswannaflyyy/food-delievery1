import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/HeaderPart2";
import { CloudQueue, Fullscreen, WidthFull } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { FoodSign } from "@/assets/FoodSign";
import Image from "next/image";

export default function UserProfile() {
    return (
        <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
            <ResponsiveAppBar />

            {/* <Box sx={{ py: "16px", display: "flex", flexDirection: "column", gap: "5px", textAlign: "center", alignItems: "center" }}>
               
            </Box> */}
            <Stack gap={3} pt={"100px"} pb={"200px"}>
                <Stack gap={5} alignItems={"center"}>
                    <Box sx={{ borderRadius: "" }}>
                        {/* <img src="/zlatan.png" alt="" width={"140px"} height={"140px"} /> */}
                        <Image src="/zlatan.png" alt="zlatan"
                         width={140} 
                         height={140}
                        style={{borderRadius:"50%"}}
                        ></Image>
                    </Box>
                    <Typography fontWeight={700} fontSize={20}>Zlatan!!!!!</Typography>
                </Stack>
                <Stack gap={5}>
                    <Stack gap={2}>
                        <CustomInput />
                        <CustomInput />
                        <CustomInput />
                    </Stack>
                    <Stack>
                    <Button sx={{
                        px: 4,
                        width: 300,
                        height: 48,
                    }} variant="contained">Хадгалах</Button>


                    </Stack>
                </Stack>


            </Stack>

            <FooterPart />
        </Stack>
    )
}