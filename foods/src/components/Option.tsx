"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Stack } from '@mui/material';
import { GreenBook } from '@/assets/GreenBook';
import { GreenClock } from '@/assets/GreenClock';
import { GreenIng } from '@/assets/GreenIng';

export default function CardOption() {
  return (
    <Stack gap={5} sx={{ width:"1264px ", height:"155px", flexDirection:"row", flexGrow:1}}>
        <Box sx={{display:"flex", gap:"15px", p:"16px", border:2, borderColor:"#D6D7DB", borderRadius:"16px", width:"282px", flexDirection:"column", boxShadow:"1"}}>
            <Box>
                <GreenBook/>
            </Box>
            <Stack>
                <Typography color={"black"}>Хүргэлтийн төлөв хянах</Typography>
                <Typography color="text.secondary">Захиалга бэлтгэлийн явцыг хянах</Typography>
            </Stack>
        </Box>
        <Box sx={{display:"flex", gap:"15px", p:"16px", border:2, borderColor:"#D6D7DB", width:"282px",  borderRadius:"16px", flexDirection:"column", boxShadow:"1"}}>
            <Box>
                <GreenClock/>
            </Box>
            <Stack>
                <Typography color={"black"}>Шуурхай хүргэлт</Typography>
                <Typography color="text.secondary">Захиалга бэлтгэлийн явцыг хянах</Typography>
            </Stack>
        </Box>
        <Box sx={{display:"flex", gap:"15px", p:"16px", border:2, borderColor:"#D6D7DB", width:"282px",  borderRadius:"16px", flexDirection:"column", boxShadow:"1"}}>
            <Box>
                <GreenIng/>
            </Box>
            <Stack>
                <Typography color={"black"}>Эрүүл, баталгаат орц</Typography>
                <Typography color="text.secondary">Захиалга бэлтгэлийн явцыг хянах</Typography>
            </Stack>
        </Box>
        <Box sx={{display:"flex", gap:"15px", p:"16px", border:2, borderColor:"#D6D7DB", width:"282px",  borderRadius:"16px", flexDirection:"column", boxShadow:"1" }}>
            <Box>
                <GreenBook/>
            </Box>
            <Stack>
                <Typography color={"black"}>Хоолны өргөн сонголт</Typography>
                <Typography color="text.secondary">Захиалга бэлтгэлийн явцыг хянах</Typography>
            </Stack>
        </Box>

    </Stack>
  );
}