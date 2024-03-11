import { Button, Paper, Typography ,Box} from "@mui/material";
import React from "react";
import './Header.css'
import foodlogo from '../../pages/assets/chef.png'
import Search from "./Search/Search";
const Header:React.FC=(props)=> {
    return(
        <>
            <Paper className="NavBar" elevation={1}>
                <img src={foodlogo} alt={'img'} className="logo-img"></img>
                <Search/>
            <Box>
             
              </Box>

            </Paper>
        </>
    )
}
export default Header