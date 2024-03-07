import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import Ufucki from "./DrawerFoods";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useFood } from "@/provider/FoodProvider";
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const { shareFood, foodCount, setFoodCount } = useFood();
  const [count, setCount] = React.useState(1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };
  const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, right: open });
    };
  const list = (
    <Box
      sx={{
        width: 586,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      role="presentation"
      // onClick={toggleDrawer('right', false)}
      // onKeyDown={toggleDrawer('right', false)}
    >
      <List>
        <ListItem>
          <ListItemIcon
            sx={{
              gap: "171px",
              display: "flex",
              alignItems: "center",
              padding: "20",
            }}
          >
            <Stack flexDirection={"row"} alignItems={"center"} gap={"171px"}>
              <ArrowBackIosNewIcon
                onClick={toggleDrawer("right", false)}
                sx={{ cursor: "pointer" }}
                onKeyDown={toggleDrawer("right", false)}
              />
              <Typography color={"black"} fontWeight={700} fontSize={20}>
                Таны сагс
              </Typography>
            </Stack>
          </ListItemIcon>
          <ListItemText />
        </ListItem>
      </List>
      <Stack height={"905px"} alignItems={"center"} overflow={"scroll"}>
        {shareFood.map((item, index) => (
          <Stack paddingY={3} borderTop={1} borderBottom={1}>
            <Stack
              padding={2}
              gap={2}
              height={"100%"}
              //   width={"100%"}
              width={"500px"}
              direction={"row"}
              alignItems={"center"}
            >
              <Stack
                position="relative"
                borderRadius={2}
                overflow={"hidden"}
                width={"100%"}
                height={"100%"}
              >
                <Image src={item.foodimg} alt="" fill objectFit="cover" />
              </Stack>
              <Stack width={"50%"}>
                <Stack
                  direction={"row"}
                  width={"100%"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography fontSize={18} fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Stack gap={1} direction={"row"}>
                      <Typography
                        color={"primary.main"}
                        fontSize={18}
                        fontWeight={600}
                      >
                        {item.price}
                      </Typography>
                      <Typography
                        color={"primary.main"}
                        fontSize={18}
                        fontWeight={600}
                        sx={{
                          textDecorationLine: "line-through",
                        }}
                      >
                        {Boolean(item.discount)
                          ? item.price * (1 - item.discount * 0.01)
                          : item.price}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack alignSelf={"center"}>
                    <CloseOutlinedIcon />
                  </Stack>
                </Stack>
                <Typography
                  padding={1}
                  color={"#767676"}
                  noWrap
                  textOverflow={"ellipsis"}
                  sx={{
                    lineClamp: "1",
                  }}
                >
                  {item.ingredients}
                </Typography>
                <Stack
                  spacing={2.5}
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <Stack
                    width={"45px"}
                    height={"40px"}
                    borderRadius={"10px"}
                    bgcolor={"#18BA51"}
                    color={"#fff"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onClick={() => {
                      setFoodCount((prev) => {
                        if (prev == 1) {
                          return prev;
                        }
                        return prev - 1;
                      });
                    }}
                  >
                    <RemoveOutlinedIcon />
                  </Stack>
                  <Stack paddingX={"30px"} paddingY={1}>
                    <Typography fontSize={24} fontWeight={500}>
                      {foodCount}
                    </Typography>
                  </Stack>
                  <Stack
                    width={"45px"}
                    height={"40px"}
                    borderRadius={"10px"}
                    bgcolor={"#18BA51"}
                    color={"#fff"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    onClick={() => {
                      setFoodCount((prev) => prev + 1);
                    }}
                  >
                    <AddOutlinedIcon />
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        ))}
        {/* <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: "#D6D7DB", width: "538px", p: "16px", display: 'flex', alignItems: "center" }}>
                    <Stack gap={2} flexDirection={"row"}>
                        <Image alt='22'
                            src={"/pizza2.png"}
                            width={245}
                            height={150}

                        ></Image>
                        <Stack gap={1}>
                            <Stack position={"relative"}>
                                <Box>
                                    <Typography fontWeight={600}>Main Pizza</Typography>
                                    <Typography>some random shit price</Typography>
                                </Box>
                                <Stack sx={{ position: "absolute", top: 0, right: 0, cursor: "pointer" }} >
                                    <Typography fontSize={20}>x</Typography>
                                </Stack>
                            </Stack>


                            <Typography color={"#767676"}>Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  </Typography>
                            <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                                <Button onClick={decrease} sx={{ width: "30px", height: "30px", backgroundColor: "#18B951" }}>
                                    <Typography color={"white"} fontWeight={700} fontSize={30}>-</Typography>
                                </Button>
                                <Typography>{count}</Typography>
                                <Button onClick={increase} sx={{ width: "30px", height: "30px", backgroundColor: "#18B951" }}>
                                    <Typography color={"white"} fontWeight={700} fontSize={30}>+</Typography>
                                </Button>
                            </Stack>

                        </Stack>
                    </Stack>

                </Box> */}

        {/* <Ufucki></Ufucki> */}
      </Stack>
      <Stack
        position={"static"}
        gap={1.25}
        alignItems={"center"}
        height={"172px"}
        px={"32px"}
        pt={"10px"}
        pb={"30px"}
        boxShadow={3}
        flexDirection={"row"}
      >
        <Stack width={256}>
          <Typography color={"#5E6066"} fontWeight={500} fontSize={19}>
            Нийт төлөх дүн
          </Typography>
          <Typography color={"#121316"} fontWeight={700}>
            34,800₮
          </Typography>
        </Stack>
        <Button
          sx={{
            px: 4,
            height: 48,
            width: 300,
          }}
          variant="contained"
        >
          Захиалах
        </Button>
      </Stack>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Stack
          flexDirection={"row"}
          onClick={toggleDrawer("right", true)}
          sx={{ gap: 1 }}
        >
          <ShoppingBasketIcon style={{ color: "#000000" }} />
          <Typography color={"black"}>Сагс</Typography>
        </Stack>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
