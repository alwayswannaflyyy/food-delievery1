"use client"

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, Stack } from '@mui/material';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function ActionAreaCard() {

  const [count, setCount] = React.useState(1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const increase = () => {
    setCount(count + 1);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <div>
      <Button onClick={handleOpen}>
        <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
          <CardActionArea>
            <CardMedia sx={{ width: "282px", height: "186px", borderRadius: "10px" }}
              component="img"
              height="140"
              image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYq-AsSLgSmUxIvGgXArP3YGVuoztF1SqAgBwsZ6pBOp0cFBYeL1KqV4S-IC-UIuA9rSgM9kJnb8XUgm3xWhR6RBx4xN0a1OGKZX1xEL~F5mIlS2S9Nc0OL~wGcLQMLVpY6jwsMnMdN8--Ze42Y7yo7NWPCvC7JEyDJKnnGAsNdd7y9idycBcJWxqed-qPjb7yhse28RzdZ5oBVH3AisGoNwHv-BQODvYOXzxhguMZGJnwFHHcpHwKMZZ6Rw9ICameul7KB~6O-8XF33oporGv9du07bKeMHEj6ok6SYGRP-wrzemEY6BEJuI-DnNEffkFBVaObViG9t7dajd~nVLQ__"
              alt="An egg with bread"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ display: "flex", justifyContent: "start" }} fontWeight={700} component="div">
                Өглөөний хоол
              </Typography>
              <Typography variant="body2" sx={{ display: "flex", justifyContent: "start" }} color="text.secondary">
                4,800₮
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Button>
      <Modal
        open={open}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <Stack sx={{ backgroundColor: "white" }} p={"32px"} borderRadius={"16px"} flexDirection={"row"} gap={4.125} width="981px" height="564px" position={"relative"}>
          <Box>
            <CardMedia sx={{ width: "500px", height: "500px", borderRadius: "10px" }}
              component="img"
              height="140"
              image="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qYq-AsSLgSmUxIvGgXArP3YGVuoztF1SqAgBwsZ6pBOp0cFBYeL1KqV4S-IC-UIuA9rSgM9kJnb8XUgm3xWhR6RBx4xN0a1OGKZX1xEL~F5mIlS2S9Nc0OL~wGcLQMLVpY6jwsMnMdN8--Ze42Y7yo7NWPCvC7JEyDJKnnGAsNdd7y9idycBcJWxqed-qPjb7yhse28RzdZ5oBVH3AisGoNwHv-BQODvYOXzxhguMZGJnwFHHcpHwKMZZ6Rw9ICameul7KB~6O-8XF33oporGv9du07bKeMHEj6ok6SYGRP-wrzemEY6BEJuI-DnNEffkFBVaObViG9t7dajd~nVLQ__"
              alt="An egg with bread"
            />
          </Box>
          <Stack justifyContent={"center"} gap={4}>
            <Box>
              <Typography>some random shit</Typography>
              <Typography>some random shit price</Typography>
            </Box>
            <Stack gap={1.5}>
              <Typography fontWeight={700}>Орц</Typography>
              <Box sx={{ backgroundColor: "#F6F6F6", p: "8px", borderRadius: "8px" }}>
                <Typography color={"#767676"}>Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  </Typography>
              </Box>
            </Stack>
            <Stack gap={4}>
              <Typography fontWeight={700}>Тоо</Typography>
              <Stack flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Button onClick={decrease} sx={{ width: "20px", height: "40px", backgroundColor: "#18B951" }}>
                  <Typography color={"white"} fontWeight={700} fontSize={30}>-</Typography>
                </Button>
                <Typography>{count}</Typography>
                <Button onClick={increase} sx={{ width: "20px", height: "40px", backgroundColor: "#18B951" }}>
                  <Typography color={"white"} fontWeight={700} fontSize={30}>+</Typography>
                </Button>
              </Stack>
            </Stack>
            <Stack>
              <Button sx={{
                px: 4,
                height: 48,
                width: 384,
                boxShadow: "none"
              }} variant="contained"  
            

                >Сагслах</Button>
            </Stack>
            <Stack onClick={handleClose} sx={{ position: "absolute", top: "15px", right: "20px", cursor: "pointer" }} >
              <Typography fontSize={30}>x</Typography>
            </Stack>

          </Stack>

        </Stack>

      </Modal>
    </div>
  );
}





// import * as React from 'react';
// import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Modal, Stack, Typography } from '@mui/material';
// import TemporaryDrawer from './TemporaryDrawer';  // Import your TemporaryDrawer component
// export default function ActionAreaCard({ onShowDrawer }) {
//   const [count, setCount] = React.useState(1);
//   const decrease = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   const increase = () => {
//     setCount(count + 1);
//   };
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const handleShowDrawer = () => {
//     onShowDrawer();  // Call the callback function from the parent component
//   };
//   return (
//     <div>
//       <Button onClick={handleOpen}>
//         {/* ... your existing code ... */}
//         <Stack>
//           {/* ... your existing code ... */}
//           <Stack>
//             <Button
//               sx={{ px: 4, height: 48, width: 384, boxShadow: "none" }}
//               variant="contained"
//               onClick={() => {
//                 handleShowDrawer();
//                 handleClose();  // Close the modal when showing the drawer
//               }}
//             >
//               Сагслах
//             </Button>
//           </Stack>
// <Stack onClick={handleClose} sx={{ position: "absolute", top: "15px", right: "20px", cursor: "pointer" }} >
//   <Typography fontSize={30}>x</Typography>
// </Stack>
//         </Stack>
//       </Modal>
//     </div>
//   );
// }




// import * as React from 'react';
// import ActionAreaCard from './ActionAreaCard';
// import TemporaryDrawer from './TemporaryDrawer';
// export default function App() {

//   return (
//     <div>
//       {showDrawer ? (
//         <TemporaryDrawer />
//       ) : (
//         <ActionAreaCard onShowDrawer={() => setShowDrawer(true)} />
//       )}
//     </div>
//   );
// }











// import React, { useState } from 'react';
// const NumberCounter = () => {
//   const [count, setCount] = useState(0);
//   const decrease = () => {
//     setCount(count - 1);
//   };
//   const increase = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <button onClick={decrease}>-</button>
//       <span>{count}</span>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// };
// export default NumberCounter;