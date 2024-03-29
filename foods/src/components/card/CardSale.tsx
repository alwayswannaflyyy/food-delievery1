import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Container } from "@mui/material";
import { useAuth, foodParams } from "@/provider/authprovider";

export const CardSale = (props: foodParams) => {
  return (
    <Stack spacing={1.75}>
      <Stack position={"relative"}>
        <Stack
          position={"relative"}
          width={"100%"}
          pt="66.6%"
          top={0}
          left={0}
          overflow={"hidden"}
          key={props.foodimg}
          borderRadius={3}
          bgcolor={"aqua"}
        >
          <Image src={props.foodimg} alt="" fill objectFit="cover" />
        </Stack>
        {Boolean(props.discount) && (
          <Typography
            top={10}
            right={10}
            position={"absolute"}
            zIndex={1}
            width={"fit-content"}
            paddingY={0.5}
            paddingX={2}
            color={"#fff"}
            bgcolor={"#18BA51"}
            border={1}
            borderRadius={16}
            borderColor={"#fff"}
            fontSize={18}
            fontWeight={600}
            key={props.discount}
          >
            {props.discount}%
          </Typography>
        )}
      </Stack>
      <Stack>
        <Typography fontSize={20} fontWeight={590} key={props.name}>
          {props.name}
        </Typography>
        <Stack direction={"row"} spacing={1.9}>
          <Typography color={"#18BA51"} fontSize={18} fontWeight={590}>
            {Boolean(props.discount)
              ? props.price * (1 - props.discount * 0.01)
              : props.price}
          </Typography>
          <Typography
            sx={{
              textDecorationLine: "line-through",
            }}
            fontSize={18}
            fontWeight={590}
          >
            {Boolean(props.discount) && props.price}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
