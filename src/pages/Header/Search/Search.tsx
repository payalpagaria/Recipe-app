import { Paper, Autocomplete, TextField } from "@mui/material"
import './Search.css'
import search from '../../assets/search.png'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { ThunkDispatch,PayloadAction } from "@reduxjs/toolkit"
import EshopStateType from '../../../types/RecipeState'
import {searchData} from '../../../store/slice/slicer'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
const Search: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const dispatch : ThunkDispatch<EshopStateType,void, PayloadAction<any>> = useDispatch()

    const navigate=useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
      };
  
      const handleSubmit = () => {
        dispatch(searchData(query));

    };

    return (
        <>
            <Paper className="searchField" sx={{marginTop:'0.8rem'}}>
                <form >
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={query}
                        onChange={handleChange}
                    />
                    <img src={search} alt="img" className="search-logo" onClick={handleSubmit}></img>
                </form>
               
                
            </Paper>
        </>
    )
}
export default Search