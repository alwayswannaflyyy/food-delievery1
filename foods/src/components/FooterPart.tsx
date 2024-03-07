"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { PineIcon } from '@/assets/PineCone';
import { PineWhite } from '@/assets/PineWhite';
import { Stack } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { url } from 'inspector';
import Link from 'next/link';
const pages = ['Нүүр', 'Холбоо барих', 'Хоолны цэс', 'Үйлчилгээний нөхцөл', 'Хүргэлтийн бүс', 'Нууцлалын бодлого'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function FooterPart() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

    return (
        <AppBar sx={{ background: "#18BA51", width: "100vw", backgroundImage: "url(/food.png)" }} position="static" >
            <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: "120px", flexDirection: "column" }}>
                <Toolbar disableGutters sx={{ display: "flex", flexDirection: "column" }} >
                    <Stack gap={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <Stack sx={{ flexGrow: 1, flexDirection: "row", textAlign: "center", justifyContent: "center", alignItems: "center" }}>
                            <PineWhite />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'Poppins',
                                    fontWeight: 700,
                                    lineHeight: "normal",
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Food Delivery
                            </Typography>
                        </Stack>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{

                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ color: "#ffffff" }} textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box gap={10} sx={{ flexGrow: 1, textUnderlinePosition: "auto", display: { xs: 'none', md: 'flex' } }}>
                            <Link href="/main" style={{ textDecorationColor: "white" }}>
                                <Button

                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, color: 'white', display: 'block', }}
                                >
                                    Нүүр
                                </Button>
                            </Link>
                            <Button

                                onClick={handleCloseNavMenu}

                                sx={{ my: 2, color: 'white', display: 'block', }}
                            >
                                Холбоо барих
                            </Button>
                            <Link href="/foodmenu" style={{ textDecorationColor: "white" }}>
                                <Button

                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, color: 'white', display: 'block', }}
                                >
                                    Хоолны цэс
                                </Button>
                            </Link>
                            <Link href="/terms&conditions" style={{ textDecorationColor: "white" }}>
                                <Button

                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, color: 'white', display: 'block', }}
                                >
                                    Үйлчилгээний нөхцөл
                                </Button>
                            </Link>
                            <Link style={{ textDecorationColor: "white" }} href={"/delivery-area"}>
                                <Button

                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, color: 'white', display: 'block', }}
                                >
                                    Хүргэлтийн бүс
                                </Button>
                            </Link>
                            <Link href="/privacy" style={{ textDecorationColor: "white" }}>
                                <Button

                                    onClick={handleCloseNavMenu}

                                    sx={{ my: 2, color: 'white', display: 'block', }}
                                >
                                    Нууцлалын бодлого
                                </Button>
                            </Link>





                        </Box>
                        <Stack gap={2.25} sx={{
                            flexDirection: "row",
                            fontSize: 'xl',
                            pb: "40px"
                        }}>
                            <FacebookIcon sx={{ fontSize: 40 }} />
                            <InstagramIcon sx={{ fontSize: 40 }} />
                            <TwitterIcon sx={{ fontSize: 40 }} />
                        </Stack>
                    </Stack>
                    <Box sx={{ border: 1, borderColor: "white", width: "1230px" }}></Box>
                    <Stack pt="40px" alignItems="center">
                        <Typography>© 2024 Pinecone Foods LLC </Typography>
                        <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default FooterPart;



