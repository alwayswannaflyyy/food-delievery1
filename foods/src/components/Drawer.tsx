
import * as React from 'react';

import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';

import Button from '@mui/material/Button';

import List from '@mui/material/List';

import Divider from '@mui/material/Divider';

import ListItem from '@mui/material/ListItem';

import ListItemButton from '@mui/material/ListItemButton';

import ListItemIcon from '@mui/material/ListItemIcon';

import ListItemText from '@mui/material/ListItemText';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Stack, Typography } from '@mui/material';
export default function TemporaryDrawer() {

    const [state, setState] = React.useState({

        right: false,

    });

    const toggleDrawer =

        (anchor: 'right', open: boolean) =>

            (event: React.KeyboardEvent | React.MouseEvent) => {

                if (

                    event.type === 'keydown' &&

                    ((event as React.KeyboardEvent).key === 'Tab' ||

                        (event as React.KeyboardEvent).key === 'Shift')

                ) {

                    return;

                }

                setState({ ...state, right: open });

            };

    const list = (

        <Box
            sx={{ width: 586, display: "flex", flexDirection: "column", justifyContent: "space-around", }}
            role="presentation"
        // onClick={toggleDrawer('right', false)}
        // onKeyDown={toggleDrawer('right', false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon sx={{ gap: "171px", display: "flex", alignItems: "center" }}>
                            <ArrowBackIosNewIcon onClick={toggleDrawer('right', false)}
                                onKeyDown={toggleDrawer('right', false)} />
                            <Typography color={"black"} fontWeight={700} fontSize={20}>Таны сагс</Typography>
                        </ListItemIcon>

                        <ListItemText />
                    </ListItemButton>
                </ListItem>
            </List>
            <Stack height={"905px"}>w</Stack>
            <Stack position={"static"} gap={1.25}  alignItems={"flex-end"} height={"172px"} px={"32px"} pt={"10px"} pb={"30px"}>
            <Button sx={{
                        px: 4,
                        height: 48,
                        width: 300,
                    }} variant="contained">Захиалах</Button>
            </Stack>

        </Box>
    );

    return (
        <div>
            <React.Fragment key={'right'}>
                <Button onClick={toggleDrawer('right', true)} sx={{ gap: 1 }}>
                    <ShoppingBasketIcon style={{ color: "#000000" }} />
                    <Typography color={"black"}>Сагс</Typography>
                </Button>
                <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
                    {list}
                </Drawer>
            </React.Fragment>

        </div>

    );

}