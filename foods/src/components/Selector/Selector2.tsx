import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Dropdowns2 = () => {

  const [value2, setValue2] = useState('');

  const dropdownStyle = {
    width: '386px',
    height: '48px',
  };

  return (
    <>
  
      <FormControl style={dropdownStyle}>
        <InputLabel >Хороо сонгоно уу</InputLabel>
        <Select value={value2} onChange={(e) => setValue2(e.target.value)}>
          <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option1">
            <LocationOnIcon/>
            1-р хороо
            
          </MenuItem>
          <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option2">
            <LocationOnIcon/>
            2-р хороо
            
          </MenuItem>
          <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option3">
            <LocationOnIcon/>
            3-р хороо
            
          </MenuItem>
          <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option4">
            <LocationOnIcon/>
            4-р хороо
            
          </MenuItem>
          <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option5">
            <LocationOnIcon/>
            5-р хороо
            
          </MenuItem>
          <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option6">
            <LocationOnIcon/>
            6-р хороо
            
          </MenuItem>
          <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option7">
            <LocationOnIcon/>
            7-р хороо
            
          </MenuItem>
     
        </Select>
      </FormControl>
   
    </>
  );
};

export default Dropdowns2;