"use client";

// import * as React from 'react';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { PineIcon } from "@/assets/PineCone";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Badge, Modal, Stack } from "@mui/material";
import Link from "next/link";
import Login from "./Fullscreen";
import TemporaryDrawer from "./Drawer/Drawer";
import { usePathname } from "next/navigation";
import { useAuth } from "@/provider/authprovider";
import { UserContext, useUser } from "@/provider/userprovider";
import { PersonOutline } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/common";

const arr = [
  {
    link: "/main",
    label: "НҮҮР",
  },
  {
    link: "/foodmenu",
    label: "ХООЛНЫ ЦЭС",
  },
  {
    link: "/delivery-area",
    label: "ХҮРГЭЛТИЙН БҮС",
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
const pages = ["НҮҮР", "ХООЛНЫ ЦЭС", "ХҮРГЭЛТИЙН БҮС"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [auth, setAuth] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  //   const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const { user, isAdmin } = useUser();
  const { isLoggedIn, isProfile, open, setOpen } = useAuth();
  const [userName, setUserName] = useState("");
  const router = useRouter();
  // const getUserName = async () => {
  //   try {
  //     const res = await api.get("/users/getUserName", {
  //       headers: { Authorization: localStorage.getItem("token") },
  //     });
  //     setUserName(res.data.userName);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  console.log(isAdmin, "gggg");

  return (
    <AppBar
      sx={{
        background: "#ffffff",
        width: "100%",
        boxShadow: "3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      position="sticky"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <PineIcon />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {arr.map((item) => (
              <Stack padding={[1, 2]}>
                <Link style={{ textDecoration: "none" }} href={item.link}>
                  <Typography
                    sx={{
                      color: pathname === item.link ? "#18B951" : "black",
                    }}
                    key={item.label}
                    fontSize={14}
                    fontWeight={700}
                    color={"#000"}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </Stack>
            ))}
            {isAdmin && (
              <Stack justifyContent={"center"} alignItems={"cente"}>
                {" "}
                <Typography
                  onClick={() => {
                    router.push("/admin");
                  }}
                  color={"common.black"}
                  sx={{
                    color: pathname.includes("admin") ? "#18B951" : "black",
                    cursor: "pointer",
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  ADMIN
                </Typography>
              </Stack>
            )}
          </Box>

          <Stack gap={2} sx={{ flexGrow: 0, flexDirection: "row" }}>
            <Search
              sx={{
                flexDirection: "row",
                color: "black",
                borderRadius: "10px",
                border: 1,
                borderColor: "#000000",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Хайх"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                sx={{
                  color: "#000000",
                  borderRadius: "10",
                  mr: 2,
                  gap: 1,
                  fontFamily: "Roboto, Helvetica,Arial, sans-serif",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  lineHeight: 1.75,
                  letterSpacing: "0.02857rem",
                  textTransform: "uppercase",
                }}
                aria-label="show 17 new notifications"
              >
                <Badge badgeContent={1} color="error">
                  <TemporaryDrawer />
                </Badge>
              </IconButton>
              {/* <Box
                                onClick={() => {
                                    if (isLoggedIn) {
                                        router.push("/userprofile");
                                    } else {
                                        setOpen(true);
                                    }
                                }}
                            >
                                <Stack spacing={1} direction={"row"} color={"common.black"} alignItems={"center"}>
                                    <PersonOutline/>
                                    <Typography fontSize={14} fontWeight={700}>
                                        {isLoggedIn ? user.name : "Нэвтрэх"}
                                    </Typography>
                                </Stack>
                            </Box> */}
              <Button
                sx={{
                  color: "common.black",
                  height: "32px",
                  mb: "2px",
                  width: "120px",
                }}
                onClick={() => {
                  if (isLoggedIn) {
                    user ? user : null;
                    router.push("/userprofile");
                    setOpen(false);
                  } else {
                    setOpen(true);
                  }
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  gap={1}
                  sx={{ mt: "10px" }}
                >
                  <PersonOutline
                  // sx={{ color: isLoggedIn ? "#18BA51" : "black", marginTop: "4px" }}
                  />

                  <Typography
                  // marginTop={1}
                  // sx={{ color: isLoggedIn ? "#18BA51" : "black" }}
                  >
                    {isLoggedIn ? user?.name : "Нэвтрэх"}
                  </Typography>
                </Stack>
              </Button>

              <Login
                open={open}
                handleClose={() => {
                  setOpen(false);
                }}
              ></Login>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// "use client";
// //Mui Imports
// import { Button, Drawer, Stack, Typography } from "@mui/material";
// import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";

// //Next Ract imports
// import React, { useContext } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// import LoginModal from "./LoginModal";
// import DrawerModal from "./DrawerModal";
// import { CustomInput } from "./CustomInput";
// import { useStates } from "./providers/StateProviders";
// import { UserContext } from "./providers/UserProviders";
// import { AuthContext } from "./providers/AuthProviders";

// export const Header = () => {
//     const pathname = usePathname();

//     const { isOpenDrawer, setIsOpenDrawer } = useStates();
//     const { user } = useContext(UserContext);
//     const { isLoggedIn, isProfile, isOpen, setIsOpen } = useContext(AuthContext);

//     const data = [
//         {
//             label: "НҮҮР",
//             href: "home",
//         },
//         {
//             label: "ХООЛНЫ ЦЭС",
//             href: "menu",
//         },
//         {
//             label: "ХҮРГЭЛТИЙН БҮС",
//             href: "Delivery-area",
//         },
//     ];

//     return (
//         <Stack
//             id="header"
//             direction="row"
//             sx={{
//                 mb: "50px",
//                 width: "100%",
//                 bgcolor: "white",
//             }}
//         >
//             <Stack
//                 direction="row"
//                 alignItems="center"
//                 justifyContent="space-between"
//                 position="fixed"
//                 gap={5}
//                 sx={{
//                     width: "100%",
//                     bgcolor: "white",
//                     m: "auto",
//                     px: "24px",
//                     borderBottom: "#dfdfdf solid 1px",
//                     zIndex: 100,
//                 }}
//             >
//                 <Stack direction="row" alignItems="center" gap={5}>
//                     <Link href={"/home"}>
//                         <img src="/BlackIcon.svg" style={{ width: "40px" }} />
//                     </Link>

//                     {/* //Labels map here */}

//                     {data.map((item, index) => {
//                         return (
//                             <Link
//                                 href={`/${item.href}`}
//                                 key={index}
//                                 style={{
//                                     fontSize: "13px",
//                                     fontFamily: "Roboto",
//                                     fontWeight: "700",
//                                     alignItems: "center",
//                                     textDecoration: "none",
//                                     color: pathname.includes(item.href) ? "#18BA51" : "black",
//                                 }}
//                             >
//                                 {item.label}
//                             </Link>
//                         );
//                     })}
//                 </Stack>

//                 <Stack direction="row" alignItems="center" gap={1}>
//                     {/* //Search...  */}

//                     <CustomInput type="search" placeholder="Хайх" />

//                     {/* //SignUp Button */}
//                     <Button
//                         sx={{
//                             color: "common.black",
//                             height: "32px",
//                             mb: "2px",
//                             width: "120px",
//                         }}
//                         onClick={() => {
//                             setIsOpenDrawer(true);
//                         }}
//                     >
//                         <Stack
//                             direction="row"
//                             alignItems="center"
//                             gap={1}
//                             sx={{ mx: "4px" }}
//                         >
//                             <ShoppingBasketOutlinedIcon />
//                             <Typography
//                                 fontSize={13}
//                                 fontWeight={700}
//                                 fontFamily={"Roboto"}
//                                 marginTop={0.4}
//                             >
//                                 Сагс
//                             </Typography>
//                         </Stack>
//                     </Button>

//                     <React.Fragment>
//                         <Drawer
//                             anchor="right"
//                             open={isOpenDrawer}
//                             onClose={() => {
//                                 setIsOpenDrawer(false);
//                             }}
//                         >
//                             <DrawerModal />
//                         </Drawer>
//                     </React.Fragment>

//                     {/* //Login Button */}
// {!isLoggedIn && (
//     <Button
//         sx={{
//             color: "common.black",
//             height: "32px",
//             mb: "2px",
//             width: "120px",
//         }}
//         onClick={() => {
//             setIsOpen(true);
//         }}
//     >
//         <Stack
//             direction="row"
//             alignItems="center"
//             gap={1}
//             sx={{ mx: "4px" }}
//         >
//             <PersonOutlineOutlinedIcon
//                 sx={{ color: isOpen ? "#18BA51" : "black" }}
//             />

//             <Typography
//                 fontSize={13}
//                 fontWeight={700}
//                 fontFamily={"Roboto"}
//                 marginTop={0.4}
//                 sx={{ color: isOpen ? "#18BA51" : "black" }}
//             >
//                 Нэвтрэх
//             </Typography>
//         </Stack>
//     </Button>
// )}

// {isLoggedIn && (
//     <Button
//         sx={{
//             color: "common.black",
//             height: "32px",
//             mb: "2px",
//             width: "120px",
//         }}
//         onClick={() => {
//             user();
//         }}
//     >
//         <Stack
//             direction="row"
//             alignItems="center"
//             gap={1}
//             sx={{ mx: "4px" }}
//         >
//             <PersonOutlineOutlinedIcon />

//             <Typography
//                 fontSize={13}
//                 fontWeight={700}
//                 fontFamily={"Roboto"}
//                 marginTop={0.4}
//                 sx={{ color: isOpen ? "#18BA51" : "black" }}
//             >
//                 Хэрэглэгч
//             </Typography>
//         </Stack>
//     </Button>
// )}

//                     {/* //Login Modal */}
//                     <div>
//                         <Modal
//                             open={isOpen}
//                             onClose={() => {
//                                 setIsOpen(false);
//                             }}
//                         >
//                             <Box
//                                 sx={{
//                                     display: "flex",
//                                     height: "550px",
//                                     width: "448px",
//                                     p: 4,
//                                     position: "absolute",
//                                     top: "50%",
//                                     left: "50%",
//                                     transform: "translate(-50%, -50%)",
//                                     bgcolor: "background.paper",
//                                     boxShadow: 24,
//                                     borderRadius: "16px",
//                                 }}
//                             >
//                                 {isOpen && <LoginModal />}
//                             </Box>
//                         </Modal>
//                     </div>
//                 </Stack>
//             </Stack>
//         </Stack>
//     );
// };
