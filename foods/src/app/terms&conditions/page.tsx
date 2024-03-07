import { CustomInput } from "@/components";
import ActionAreaCard from "@/components/card/CardCom";
import FooterPart from "@/components/FooterPart";
import Login from "@/components/Fullscreen";
import ResponsiveAppBar from "@/components/HeaderPart1";
import ResponsiveAppBar2 from "@/components/headerparts/HeaderPart2";
import { CloudQueue, Fullscreen, WidthFull } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import { FoodSign } from "@/assets/FoodSign";

export default function Terms() {
    return (
        <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }} >
            {/* <ResponsiveAppBar /> */}

            {/* <Box sx={{ py: "16px", display: "flex", flexDirection: "column", gap: "5px", textAlign: "center", alignItems: "center" }}> */}
            <Container maxWidth="lg">
                <Stack py={2} gap={3}>

                    <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
                        <FoodSign></FoodSign>
                        <Typography fontSize={22} fontWeight={700} color={"#000"}>
                            Үйлчилгээний нөхцөл
                        </Typography>
                    </Stack>
                    <Stack sx={{ textIndent: "50px" }}>
                        <Typography
                            textAlign={"justify"}
                            fontSize={18}
                            fontWeight={400}
                            color={"#000"}
                            lineHeight={"30px"}
                            sx={{ textIndent: "50px" }}
                        >
                            Mstars Food delivery нь Mstars Lab компанийн интернэт худалдааны
                            албан ёсны вэбсайт бөгөөд энэхүү нөхцөл, журам нь уг вэбсайтаар
                            үйлчлүүлэх, худалдан авалт хийхтэй холбоотой үүсэх харилцааг
                            зохицуулахад оршино. <br />{" "}
                            <Typography
                                textAlign={"justify"}
                                fontSize={18}
                                fontWeight={400}
                                color={"#000"}
                                lineHeight={"30px"}
                                sx={{ textIndent: "50px" }}
                            >
                                Энэхүү нөхцөл нь хэрэглэгч худалдан авалт хийх, вэбсайтаар
                                үйлчлүүлэхээсээ өмнө хүлээн зөвшөөрч баталгаажуулсаны үндсэн
                                дээр хэрэгжинэ.
                            </Typography>{" "}
                            <br /> Энэхүү үйлчилгээний нөхцлийн хэрэгжилтэнд MStars Lab
                            /цаашид байгууллага гэх/ болон хэрэглэгч /цаашид хэрэглэгч гэх/
                            хамтран хяналт тавина. <br />
                            Mstars Food delivery нь Mstars Lab компанийн интернэт худалдааны
                            албан ёсны вэбсайт бөгөөд энэхүү нөхцөл, журам нь уг вэбсайтаар
                            үйлчлүүлэх, худалдан авалт хийхтэй холбоотой үүсэх харилцааг
                            зохицуулахад оршино. <br />{" "}
                            <Typography
                                textAlign={"justify"}
                                fontSize={18}
                                fontWeight={400}
                                color={"#000"}
                                lineHeight={"30px"}
                                sx={{ textIndent: "80px" }}
                            >
                                Энэхүү нөхцөл нь хэрэглэгч худалдан авалт хийх, вэбсайтаар
                                үйлчлүүлэхээсээ өмнө хүлээн зөвшөөрч баталгаажуулсаны үндсэн
                                дээр хэрэгжинэ.
                            </Typography>{" "}
                            <br /> Энэхүү үйлчилгээний нөхцлийн хэрэгжилтэнд MStars Lab
                            /цаашид байгууллага гэх/ болон хэрэглэгч /цаашид хэрэглэгч гэх/
                            хамтран хяналт тавина. <br />
                            Энэхүү нөхцөл нь хэрэглэгч худалдан авалт хийх, вэбсайтаар
                            үйлчлүүлэхээсээ өмнө хүлээн зөвшөөрч баталгаажуулсаны үндсэн дээр
                            хэрэгжинэ.{" "}
                            <Typography
                                textAlign={"justify"}
                                fontSize={18}
                                fontWeight={400}
                                color={"#000"}
                                lineHeight={"30px"}
                                sx={{ textIndent: "30px" }}
                            >
                                Энэхүү үйлчилгээний нөхцлийн хэрэгжилтэнд MStars Lab /цаашид
                                байгууллага гэх/ болон хэрэглэгч /цаашид хэрэглэгч гэх/ хамтран
                                хяналт тавина.
                            </Typography>
                            <br /> Mstars Food delivery нь Mstars Lab компанийн интернэт
                            худалдааны албан ёсны вэбсайт бөгөөд энэхүү нөхцөл, журам нь уг
                            вэбсайтаар үйлчлүүлэх, худалдан авалт хийхтэй холбоотой үүсэх
                            харилцааг зохицуулахад оршино.{" "}
                            <Typography
                                textAlign={"justify"}
                                fontSize={18}
                                fontWeight={400}
                                color={"#000"}
                                lineHeight={"30px"}
                                sx={{ textIndent: "50px" }}
                            >
                                Энэхүү нөхцөл нь хэрэглэгч худалдан авалт хийх, вэбсайтаар
                                үйлчлүүлэхээсээ өмнө хүлээн зөвшөөрч баталгаажуулсаны үндсэн
                                дээр хэрэгжинэ.
                            </Typography>{" "}
                            <br />
                            Энэхүү үйлчилгээний нөхцлийн хэрэгжилтэнд MStars Lab /цаашид
                            байгууллага гэх/ болон хэрэглэгч /цаашид хэрэглэгч гэх/ хамтран
                            хяналт тавина. <br /> Mstars Food delivery нь Mstars Lab компанийн
                            интернэт худалдааны албан ёсны вэбсайт бөгөөд энэхүү нөхцөл, журам
                            нь уг вэбсайтаар үйлчлүүлэх, худалдан авалт хийхтэй холбоотой
                            үүсэх харилцааг зохицуулахад оршино. <br /> Энэхүү нөхцөл нь
                            хэрэглэгч худалдан авалт хийх, вэбсайтаар үйлчлүүлэхээсээ өмнө
                            хүлээн зөвшөөрч баталгаажуулсаны үндсэн дээр хэрэгжинэ. <br />{" "}
                            Энэхүү үйлчилгээний нөхцлийн хэрэгжилтэнд MStars Lab /цаашид
                            байгууллага гэх/ болон хэрэглэгч /цаашид хэрэглэгч гэх/ хамтран
                            хяналт тавина. <br />
                            Энэхүү нөхцөл нь хэрэглэгч худалдан авалт хийх, вэбсайтаар
                            үйлчлүүлэхээсээ өмнө хүлээн зөвшөөрч баталгаажуулсаны үндсэн дээр
                            хэрэгжинэ. <br /> Энэхүү үйлчилгээний нөхцлийн хэрэгжилтэнд MStars
                            Lab /цаашид байгууллага гэх/ болон хэрэглэгч /цаашид хэрэглэгч
                            гэх/ хамтран хяналт тавина.
                        </Typography>
                    </Stack>

                </Stack>
            </Container>
            {/* </Box> */}
            {/* <FooterPart /> */}
        </Stack>
    )
}