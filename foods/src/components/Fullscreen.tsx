"use client"

import { Button, Stack, Typography } from "@mui/material"
import { CustomInput } from "."
import Link from "next/link"
import { useFormik } from "formik"
import * as yup from "yup"
// import React from 'react';
// import { makeStyles, createStyles, Theme } from '@mui/material/styles';
// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         fullScreen: {
//             width: '100vw', 
//             height: '100vh',
//         },
//     })
// );
// interface FullScreenProps {
//     children: React.ReactNode;
// }
// function FullScreenComponent({ children }: FullScreenProps) {
//     const classes = useStyles();
//     return <div className={classes.fullScreen}>{children}</div>;
// }
// export default FullScreenComponent;
const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

export default function Login() {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values, null, 2);
            alert("saruul bol gay")
        },
    });
    return (
        <Stack gap={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", p:"16px"}} >
            <Stack>
                <Typography fontWeight={700} fontSize={20}>Нэвтрэх</Typography>
            </Stack>
            <Stack gap={2}>
                <CustomInput
                 
                    label="Имэйл"
                    placeholder="И-мэйл хаягаа оруулна уу"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}


                />
                <Stack alignItems={"flex-end"}>
                    <CustomInput
                        type="password"
                        label="Нууц үг"
                        placeholder="Нууц үг"
                        value={formik.values.password}
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}



                    />
                    <Link href="/recoverpass">
                        <Button>
                            <Typography fontSize={10} color="text.secondary">Нууц үг сэргээх</Typography>
                        </Button>
                    </Link>
                </Stack>
            </Stack>
            <Stack gap={4} justifyContent={"center"} alignItems={"center"}>
                <Button sx={{
                    px: 4,
                    width: 300,
                    height: 48,
                }} 
                onClick={() =>{
                    formik.handleSubmit();
                }}
                variant="contained">Нэвтрэх</Button>
                <Typography>Эсвэл</Typography>
                <Link href="/sign">
                    <Button sx={{
                        px: 4,
                        height: 48,
                        width: 300,
                    }} variant="outlined">Бүртгүүлэх</Button>
                </Link>
            </Stack>
        </Stack>
    )
}
