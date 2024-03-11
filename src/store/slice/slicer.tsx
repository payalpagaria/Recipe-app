import axios from "axios";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

 
export const getAllData = createAsyncThunk("getalldata", async () => {
    const response = await axios.get('https://dummyjson.com/recipes');
    return response.data.recipes;
});
export const searchData = createAsyncThunk("searchData",async(query : string)=>{
    const response=await axios.get(`https://dummyjson.com/recipes/search?q=${query}`)
    return response.data;
})
export const TypeData =createAsyncThunk("searchData",async(type : string)=>{
    const response=await axios.get(`https://dummyjson.com/recipes/meal-type/${type}`)
    return response.data;
})

 
const getproductSlice = createSlice({
    name:'getproductSlice',
    initialState : {
        data:[],
        isLoading : false,
    },
    reducers:{
 
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllData.fulfilled,(state,action)=>{
            state.isLoading = true
            state.data = action.payload
        })
        builder.addCase(getAllData.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(getAllData.rejected,(state,action)=>{
            state.isLoading = false
        })
        builder.addCase(searchData.fulfilled,(state,action)=>{
            state.isLoading = true
            state.data=action.payload
        })
        builder.addCase(searchData.pending,(state,action)=>{
            state.isLoading = true
        })
        builder.addCase(searchData.rejected,(state,action)=>{
            state.isLoading = false
        })
        
    }
})
 
export default getproductSlice.reducer