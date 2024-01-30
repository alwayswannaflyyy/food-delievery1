"use client"

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack, Button } from "@mui/material";
 
type CustomCardProps = {
  title: string;
  image: string;
  mediumprice: number;
  regularprice: number & string;
};
 
export default function CustomCard(props: CustomCardProps) {
  const { title, image, mediumprice, regularprice } = props;
  return (
    <Card sx={{ width: "282px", height: "186px", backgroundColor: "white" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // image={image}
          image="https://www.hindustantimes.com/ht-img/img/2023/07/15/1600x900/jennie_1689410686831_1689410687014.jpg"
          alt="shaahgu bnshde"
       
          sx={{ borderRadius: "10", position: "relative", width:"282px" , height:"186px", }}
        />
        <Button
          sx={{
            py: "0.5",
            px: "2",
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            borderRadius: "16px",
            borderWidth: "1px",
            border: "solid",
            borderColor: "primary.contrastText",
          }}
        >
          <Typography>20%</Typography>
        </Button>
        <CardContent>
          <Typography gutterBottom variant="h5" fontSize={20} fontWeight={590}>
            {title}
            JENNIE KIM
          </Typography>
          <Stack flexDirection="row" alignItems="center" gap={2}>
            <Typography
              variant="body2"
              color="primary.main"
              fontSize={18}
              fontWeight={600}
            >
              {mediumprice}48000$
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              fontSize={18}
              fontWeight={400}
              sx={{ textDecorationLine: "line-through" }}
            >
              {regularprice}98000$
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}