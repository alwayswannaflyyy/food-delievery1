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
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Stack } from '@mui/material';
import Link from 'next/link';
import Login from './Fullscreen';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const pages = ['НҮҮР', 'ХООЛНЫ ЦЭС', 'ХҮРГЭЛТИЙН БҮС'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar2() {
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
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [auth, setAuth] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar sx={{ background: "#ffffff", width: "1252px", boxShadow: "none" }} position="static" >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <PineIcon  />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',

                        }}
                    >

                    </Typography>

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
                            {/* {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}
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

                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Link href="/main" style={{ textDecoration: "none" }}>
                            <Button


                                sx={{ my: 2, color: 'black', display: 'block', }}
                            >
                                <Typography sx={{ textDecoration: "none" }}>НҮҮР</Typography>
                            </Button>
                        </Link>
                        <Link href="/foodmenu" style={{ textDecoration: "none" }}>
                            <Button


                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                ХООЛНЫ ЦЭС
                            </Button>
                        </Link>
                        <Button


                            sx={{ my: 2, color: 'black', display: 'block' }}
                        >
                            ХҮРГЭЛТИЙН БҮС
                        </Button>

                    </Box>

                    <Stack gap={2} sx={{ flexGrow: 0, flexDirection: "row", }}>
                        <Search sx={{ flexDirection: "row", color: "black", borderRadius: '10px', border: 1, borderColor: "#000000", justifyContent: "center", }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase

                                placeholder="Хайх"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                            <IconButton

                                sx={{
                                    color: '#000000',
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
                            >
                                <ShoppingBasketIcon />
                                Сагс
                            </IconButton>
                            <IconButton
                                // size="large"
                                // edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                sx={{
                                    color: '#000000',
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
                            >
                                <PersonOutlineIcon />
                                Хэрэглэгч
                            </IconButton>
                         
                        </Box>
                    </Stack>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar2;