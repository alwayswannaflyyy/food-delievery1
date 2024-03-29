"use client";

import { Button, Grid, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SelectAllRounded } from "@mui/icons-material";
import { CardModel } from "../card/CardModel";
import { useFood } from "@/provider/FoodProvider";
import { CreateNewFood } from "./CreatenewFood";

type AddNewFoodProps = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};

export const AddNewFood = (props: AddNewFoodProps) => {
  const { foods } = useFood();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  return (
    <Stack width={"1000px"}>
      <Stack
        width={"100%"}
        // height={"100vh"}
        paddingTop={6}
        paddingLeft={5}
        gap={6}
        bgcolor={"#F7F7F8"}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography fontSize={22} fontWeight={700}>
            {props.selectedCategory ? props.selectedCategory : "All Foods "}
          </Typography>
          <Button
            variant="text"
            onClick={() => {
              setOpen(true);
            }}
            sx={{
              color: "common.white",
              padding: "8px",
              bgcolor: "primary.main",
              borderRadius: "8px",
            }}
          >
            Add new food
          </Button>
          <CreateNewFood
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            open={open}
            handleClose={() => setOpen(false)}
          />
        </Stack>
        <Grid container spacing={3}>
          {/* {foods.map((item, index) => (
            <Grid key={index} item xs={12} md={3}>
              <CardModel {...item} />
            </Grid>
          ))} */}
          {foods
            .filter((item) => item.category.includes(props.selectedCategory))
            .map((item, index) => (
              <Grid key={index} item xs={12} md={3}>
                <CardModel {...item} />
              </Grid>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
