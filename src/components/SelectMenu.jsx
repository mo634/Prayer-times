import {Box, FormControl, InputLabel, MenuItem, Select, Stack} from "@mui/material";
import { useState } from "react";
import {cityArr} from "../../public/constants/Constants"
const SelectMenu = ({selectedCity,setSelectedCity}) => {
    
    
    const handleChange = (event) => {
        setSelectedCity(event.target.value);
        console.log(event.target.value)
    };


    return (
        <Stack style={{ marginTop: "50px"}} justifyContent={"center"} direction={"row"}>
            <FormControl style={{width:"20%"}}>
                <InputLabel id="demo-simple-select-label">City</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCity}
                    label="city"
                    onChange={handleChange}
                >
                    {
                        cityArr.map((cityName) => {
                            return (
                                <MenuItem key={Math.random()} value={cityName}>{cityName}</MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </Stack>
    );
};

export default SelectMenu;
