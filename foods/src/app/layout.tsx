
"use client";
import { Inter } from "next/font/google";
import "./globals.css";


import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Theme } from "@/theme";
import FooterPart from "@/components/FooterPart";
import ResponsiveAppBar from "@/components/HeaderPart1";
 
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
            <Stack minHeight="100vh">
              {/* <ResponsiveAppBar /> */}
              <Stack flex={1}>{children}</Stack>
              {/* <FooterPart /> */}
            </Stack>
            <CssBaseline />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
 