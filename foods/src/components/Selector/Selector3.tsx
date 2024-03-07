import React, { useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Dropdowns3 = () => {

    const [value3, setValue3] = useState('');
    const dropdownStyle = {
        width: '386px',
        height: '48px',
    };

    return (
        <>
            <FormControl style={dropdownStyle}>
                <InputLabel >Байр, гудамж сонгоно уу</InputLabel>
                <Select value={value3} onChange={(e) => setValue3(e.target.value)}>
                    <MenuItem sx={{height:"48px" ,  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option1">
                        <LocationOnIcon />
                        Нархан хотхон

                    </MenuItem>
                    <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option1">
                        <LocationOnIcon />
                        26-р байр

                    </MenuItem>
                    <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option1">
                        <LocationOnIcon />
                        Хоймор хотхон

                    </MenuItem>
                    <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option1">
                        <LocationOnIcon />
                        45-р байр

                    </MenuItem>
                    <MenuItem sx={{height:"48px",  gap: "4px", display: "flex", flexDirection: "row", alignItems: "center", textAlign: "center",}} value="option1">
                        <LocationOnIcon />
                        Зайсан хотхон 

                    </MenuItem>

                </Select>
            </FormControl>
        </>
    );
};

export default Dropdowns3;