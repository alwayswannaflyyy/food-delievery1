import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/HeaderPart2";
import { Fullscreen, WidthFull } from "@mui/icons-material";
import { Stack } from "@mui/material";


export default function Home() {
  return (
    <Stack gap={3} sx={{display: "flex", justifyContent:"center",  alignItems:"center" }} >
      <ResponsiveAppBar />
      {/* <ResponsiveAppBar2/> */}
    <Login/>
      <FooterPart />
      {/* <ActionAreaCard /> */}
    </Stack>
  )
}

