
// import { Button, Stack } from '@mui/material';
// import React, { useState } from 'react';
// const SelectorComponent = () => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   return (

//     <Stack>

//       <Button  sx={{position:"absolute" ,backgroundColor:"#ECEDF0", border:1, borderRadius:"4px", borderColor:"#F7F7F8", width:"384px" ,height:"48px"}} onClick={toggleDropdown}>Дүүрэг сонгоно уу</Button>

//       {isDropdownVisible && (

//         <Stack sx={{ width: '384px', height: '240px', border: '1px solid black', zIndex:1, position:"relative" ,top:0}}>

//           {/* Dropdown content goes here */}

//         </Stack>

//       )}

//     </Stack>

//   );

// };

// export default SelectorComponent;



import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Dropdowns = () => {
  const [value1, setValue1] = useState('');

  const dropdownStyle = {
    width: '386px',
    height: '48px',
    // backgroundColor:"#ECEDF0"
  };

  return (
    <>
      <FormControl style={dropdownStyle} >
        <InputLabel id="demo-simple-select-label" sx={{ display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center" }}>Дүүрэг сонгоно уу</InputLabel>
        <Select   labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper" sx={{ height: "240px" }} value={value1} onChange={(e) => setValue1(e.target.value)}>
          <MenuItem sx={{ height: "48px", gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", }} value="option1">
            <LocationOnIcon></LocationOnIcon>
            Баянзүрх дүүрэг
          </MenuItem>
          <MenuItem sx={{ height: "48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", }} value="option2">
            <LocationOnIcon></LocationOnIcon>
            Хан-Уул дүүрэг
          </MenuItem>
          <MenuItem sx={{ height: "48px" ,  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center", }} value="option3">
            <LocationOnIcon></LocationOnIcon>
            Баянгол дүүрэг
          </MenuItem>
          <MenuItem sx={{ height: "48px" ,  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option4">
            <LocationOnIcon></LocationOnIcon>
            Сонгинохайрхан дүүрэг
          </MenuItem>
          <MenuItem sx={{ height: "48px" ,  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option5">
            <LocationOnIcon></LocationOnIcon>
            Чингэлтэй дүүрэг
          </MenuItem>

          {/* Add more MenuItem components as needed */}
        </Select>
      </FormControl>
    </>
  );
};

export default Dropdowns;