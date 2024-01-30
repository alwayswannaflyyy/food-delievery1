import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/HeaderPart2";
import { CloudQueue, Fullscreen, WidthFull } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function Sign() {
    return (
        <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center",  }} >
            <ResponsiveAppBar />
            <Stack gap={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "16px", pt:"105px", pb:"100px" }} >
                <Stack>
                    <Typography fontSize={20}>Нууц үг сэргээх</Typography>
                </Stack>
                <Stack gap={2}>
                    <CustomInput label="И-мэйл" placeholder="И-мэйл хаягаа оруулна уу" />
                </Stack>
                <Stack gap={4} justifyContent={"center"} alignItems={"center"}>
                    <Button sx={{
                        px: 4,
                        width: 300,
                        height: 48,
                    }} variant="contained">Үргэлжлүүлэх</Button>
                </Stack>
            </Stack>
            <FooterPart />
        </Stack>
    )
}