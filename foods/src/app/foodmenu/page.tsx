import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/HeaderPart2";
import { CloudQueue, Fullscreen, WidthFull } from "@mui/icons-material";
import { Box, Button, CardActionArea, Container, Stack, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import Link from "next/link";
import { Menu } from "@/components/Menu";
Container
export default function FoodMenu() {
    return (
        <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
            <ResponsiveAppBar />

            <Stack gap={5} flexDirection={"row"} flexGrow={1}>
                {/* <Link href="/main">
                    <Button sx={{ width: "280.5px", h: "43px", border: 2, borderRadius: "16px", borderColor: "#D6D7DB" }}>
                        <Typography color={"black"} fontWeight={650}>Main course</Typography>
                    </Button>
                </Link>
                <Button sx={{ width: "280.5px", h: "43px", border: 2, borderRadius: "16px", borderColor: "#D6D7DB" }}>
                    <Typography color={"black"} fontWeight={650}>Appetizers</Typography>
                </Button>
                <Button sx={{ width: "280.5px", h: "43px", border: 2, borderRadius: "16px", borderColor: "#D6D7DB" }}>
                    <Typography color={"black"} fontWeight={650}>Beverage</Typography>
                </Button>
                <Button sx={{ width: "280.5px", h: "43px", border: 2, borderRadius: "16px", borderColor: "#D6D7DB" }}>
                    <Typography color={"black"} fontWeight={650}>On sale</Typography>
                </Button> */}
                <Menu/>
            </Stack>
            <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "16px" }} >

                <Stack gap={3} flexDirection={"row"}>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                </Stack >
                <Stack gap={3} flexDirection={"row"}>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                </Stack>
                <Stack gap={3} flexDirection={"row"}>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                    <ActionAreaCard></ActionAreaCard>
                </Stack>

            </Stack>

            <FooterPart />
        </Stack>
    )
}