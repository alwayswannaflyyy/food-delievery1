"use client";
import { Inter } from "next/font/google";
import "./globals.css";

import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Theme } from "@/theme";
import FooterPart from "@/components/FooterPart";
import ResponsiveAppBar from "@/components/HeaderPart1";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/provider/authprovider";
import { UserProvider } from "@/provider/userprovider";
import { StateContext, StateProvider } from "@/provider/stateproviders";
import { FoodProvider } from "@/provider/FoodProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={Theme}>
            <Stack
              minHeight="100vh"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <AuthProvider>
                <FoodProvider>
                  <StateProvider>
                    <UserProvider>
                      <ResponsiveAppBar />
                      <Stack flex={1}>{children}</Stack>
                      <FooterPart />
                    </UserProvider>
                  </StateProvider>
                </FoodProvider>
              </AuthProvider>
            </Stack>
            <CssBaseline />
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
