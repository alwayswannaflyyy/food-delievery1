// "use client"

// import { CustomInput } from "@/components";
// import ActionAreaCard from "@/components/card/CardCom";
// import FooterPart from "@/components/FooterPart";
// import Login from "@/components/Fullscreen";
// import ResponsiveAppBar from "@/components/HeaderPart1";
// import ResponsiveAppBar2 from "@/components/headerparts/HeaderPart2";
// import { CloudQueue, Fullscreen, WidthFull } from "@mui/icons-material";
// import { Box, Button, Stack, Typography } from "@mui/material";
// import CloudQueueIcon from '@mui/icons-material/CloudQueue';
// import { useContext, useState } from "react";
// import CloudIcon from '@mui/icons-material/Cloud';
// import { useFormik } from "formik"
// import * as yup from "yup"
// import { AuthContext } from "@/provider/authprovider";



// const validationSchema = yup.object({
//     email: yup.string().email().required(),
//     password: yup.string().required(),
//     repassword: yup.string().required(),
//     name: yup.string().required(),
//     address: yup.string().required(),
// })
// type CustomLoginProps = {}

// export default function Recoverpass() {
//     const { signup } = useContext(AuthContext);
//     const [checkBox, setCheckBox] = useState(false);
//     const formik = useFormik({
//         initialValues: {
//             email: "",
//             password: "",
//             repassword: "",
//             name: "",
//             address: "",
//         },
//         validationSchema: validationSchema,
//         onSubmit: async (values) => {
//             await signup({
//                 email: values.email,
//                 name: values.name,
//                 password: values.password,
//                 address: values.address,

//             })

//         },
//     });

//     return (
//         <Stack gap={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
//             {/* <ResponsiveAppBar /> */}
//             <Stack gap={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: "16px" }} >
//                 <Stack>
//                     <Typography fontSize={20}>Бүртгүүлэх</Typography>
//                 </Stack>
//                 <Stack gap={2}>
//                     <CustomInput label="Нэр" placeholder="Нэрээ оруулна уу"
//                         value={formik.values.name}
//                         onChange={formik.handleChange}
//                         name="name"
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.name && Boolean(formik.errors.name)}
//                         helperText={formik.touched.name && formik.errors.name}

//                     />
//                     <CustomInput label="И-мэйл" placeholder="И-мэйл хаягаа оруулна уу"


//                         value={formik.values.email}
//                         onChange={formik.handleChange}
//                         name="email"
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.email && Boolean(formik.errors.email)}
//                         helperText={formik.touched.email && formik.errors.email}
//                     />
//                     <CustomInput label="Хаяг" placeholder="Та хаягаа оруулна уу"
//                         value={formik.values.address}
//                         onChange={formik.handleChange}
//                         name="address"
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.address && Boolean(formik.errors.address)}
//                         helperText={formik.touched.address && formik.errors.address}
//                     />
//                     <CustomInput type="password" label="Нууц үг" placeholder="Нууц үгээ оруулна уу"
//                         name="password"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.password && Boolean(formik.errors.password)}
//                         helperText={formik.touched.password && formik.errors.password}
//                     />
//                     <CustomInput type="password" label="Нууц үг давтах" placeholder="Нууц үгээ оруулна уу"
//                         name="repassword"
//                         onChange={formik.handleChange}
//                         onBlur={formik.handleBlur}
//                         error={formik.touched.password && Boolean(formik.errors.password)}
//                         helperText={formik.touched.password && formik.errors.password}
//                     />
//                 </Stack>
//                 <Stack gap={4} justifyContent={"center"} alignItems={"center"}>
//                     <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>

//                         <Stack
//                             onClick={() => {
//                                 setCheckBox(!checkBox);
//                             }}
//                         >
//                             {(!checkBox && <CloudQueueIcon />) || (checkBox && <CloudIcon />)}
//                         </Stack>
//                         <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
//                     </Box>
//                     <Button sx={{
//                         px: 4,
//                         width: 300,
//                         height: 48,

//                     }}
//                         onClick={() => {
//                             formik.handleSubmit();
//                         }}
//                         variant="contained">Бүртгүүлэх</Button>
//                 </Stack>
//             </Stack>
//             {/* <FooterPart /> */}
//         </Stack>
//     )
// }

"use client";

// import { CustomInput } from "@/components";
import {
  Box,
  Button,
  Container,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import CloudIcon from "@mui/icons-material/Cloud";
// import { AuthContext, CustomInput } from "../../components";
import * as yup from "yup";
import { useFormik } from "formik";
import { CustomInput } from "@/components";
import { useAuth } from "@/provider/authprovider";


const validationSchema = yup.object({
  name: yup.string().required("Нэрээ оруулна уу"),
  email: yup
    .string()
    .email("И-мэйл буруу байна")
    .required("И-мэйлээ оруулна уу"),
  password: yup.string().required("Нууц үгээ оруулна уу"),
  // .matches(
  //   /^(?=.*[A-Za-z])?[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Нууц үг багадаа 8 тэмдэгт байх ёстой"
  // ),
  address: yup.string().required("Хаягаа оруулна уу"),
  // repassword: yup.string().required("Нууц үгээ оруулна уу"),
});

export default function SignUp() {
  const [checkCloud, setCheckCloud] = useState(false);
  const { signup } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      repassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {

      const {name ,address ,password , repassword , email} = values


      console.log(values)
      signup({email , password , name ,address})
    }
  });

  const [open, setOpen] = useState(false);

  return (
    <Container
      sx={{
        display: "flex",
        width: "448px",
        p: 4,
      }}
    >
      <Stack width={448} height={738} alignItems={"center"}>
        <Typography fontSize={28} fontWeight={700} marginBottom={6}>
          Бүртгүүлэх
        </Typography>

        <Stack gap={2}>
          <CustomInput
            id="name"
            name="name"
            label="Нэр"
            placeholder="Нэрээ оруулна уу"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onBlur={formik.handleBlur}
            type="text"
          />
          <CustomInput
            id="email"
            name="email"
            label="И-мэйл"
            placeholder="И-мэйл хаягаа оруулна уу"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
            type="text"
          />
          <CustomInput
            id="address"
            name="address"
            label="Хаяг"
            placeholder="Хаягаа оруулна уу"
            value={formik.values.address}
            onChange={formik.handleChange}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
            onBlur={formik.handleBlur}
            type="text"
          />
          <CustomInput
            id="password"
            name="password"
            label="Нууц үг"
            placeholder="Нууц үг"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
            type="password"
          />
          <CustomInput

            name="repassword"
            label="Нууц үг давтах"
            placeholder="Нууц үг"
            value={formik.values.repassword}
            onChange={formik.handleChange}
            // error={
            //   formik.touched.repassword &&
            //   Boolean(formik.values.password !== formik.values.repassword)
            // }
            helperText={formik.touched.repassword && formik.errors.repassword}
            onBlur={formik.handleBlur}
            type="password"
          />
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            mt="20px"
            sx={{ cursor: "pointer" }}
          >
            <Stack
              onClick={() => {
                setCheckCloud(!checkCloud);
              }}
            >
              {(!checkCloud && <CloudOutlinedIcon />) ||
                (checkCloud && <CloudIcon />)}
            </Stack>

            <Typography fontSize={14}>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
          </Stack>

          <Button
            onClick={() => {
              formik.handleSubmit();
              setOpen(true);
            }}
            variant="contained"
            disableElevation
            disabled={
              !formik.values.email || !formik.values.password || !checkCloud
            }
          >
            Бүртгүүлэх
          </Button>
          {/* <ErrorSnackbar /> */}
        </Stack>
      </Stack>
    </Container>
  );
}