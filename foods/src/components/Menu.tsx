
"use client";

import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    link: "/delivery-area",
    label: "Main course",
  },
  {
    link: "/appetizers",
    label: "Appetizers",
  },
  {
    link: "/beverage",
    label: "Beverage",
  },
  {
    link: "/on-sale",
    label: "On sale",
  },
];

export const Menu = () => {
  const [getCards, setGetCards] = useState("");
  const [page, setPages] = useState("");
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Stack  >
      <Container maxWidth="xl">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          paddingTop={12}
          //   paddingBottom={4}
          spacing={4}
        >
          {tabs.map((item) => (

            <Stack

              onClick={() => {
                setActiveTab(item);
              }}
              sx={{
                bgcolor:
                  item.label === activeTab.label ? "#18BA51" : "common.white",
                color:
                  item.label === activeTab.label
                    ? "common.white"
                    : "common.black",
                cursor: "pointer"
              }}
              border={1}
              justifyContent={"center"}
              alignItems={"center"}
              width={"290px"}
              borderRadius={"18px"}
              paddingY={1}
              paddingX={2}
            >
              <Link style={{ textDecoration: "none", }} href={item.link}>
                <Typography key={item.label} fontSize={18} fontWeight={600}>
                  {item.label}
                </Typography>
              </Link>
            </Stack>

          ))}
        </Stack>
      </Container>
    </Stack>
  );
};


//  import Link from "next/link";



// export const Menu = () => {

//   const [activeTab, setActiveTab] = useState(tabs[0]);

//   return (

//     <Stack>

//       <Container maxWidth="xl">

//         <Stack

//           direction={"row"}

//           justifyContent={"space-between"}

//           paddingTop={12}

//           spacing={4}

//         >

//           {tabs.map((item) => (

//             <Link href={item.link} key={item.label}>

//               <a>

//                 <Stack

//                   onClick={() => {

//                     setActiveTab(item);

//                   }}

//                   sx={{

//                     bgcolor:

//                       item.label === activeTab.label ? "#18BA51" : "common.white",

//                     color:

//                       item.label === activeTab.label

//                         ? "common.white"

//                         : "common.black",

//                     cursor: "pointer",

//                   }}

//                   border={1}

//                   justifyContent={"center"}

//                   alignItems={"center"}

//                   width={"290px"}

//                   borderRadius={"18px"}

//                   paddingY={1}

//                   paddingX={2}

//                 >

//                   <Typography fontSize={18} fontWeight={600}>

//                     {item.label}

//                   </Typography>

//                 </Stack>

//               </a>

//             </Link>

//           ))}

//         </Stack>

//       </Container>

//     </Stack>

//   );

// };