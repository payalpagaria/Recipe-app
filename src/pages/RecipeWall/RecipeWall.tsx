import { Box, Paper, Typography,Card } from '@mui/material'
import './RecipeWall.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { PayloadAction , ThunkDispatch} from '@reduxjs/toolkit'
import RecipeStateType from '../../types/RecipeStateType'
import { getAllData } from '../../store/slice/slicer'
import RecipeCard from './RecipeCard/RecipeCard'
import PreviewImage from '../PreviewImage/PreviewImage'
const RecipeWall: React.FC=()=>{
    const dispatch : ThunkDispatch<RecipeStateType,void, PayloadAction<any>> = useDispatch()

    const AllRecipes=useSelector((state:any)=>state?.recipe)
    console.log("search data:",AllRecipes)
    useEffect(()=>{
        dispatch(getAllData())
    },[])

    return(
        <>
        
        {
            AllRecipes?.data?.recipes ?
            <Paper className='recipe_wall'>
            { AllRecipes.data.recipes?.map((product :any)=>{
                return (
                   
                    <RecipeCard product={product}/>
                )
            })}
            </Paper>

        :

        <>
        <PreviewImage AllRecipes={AllRecipes?.data?.slice(0,4)} />
                <Paper className='recipe_wall'> 
                {
                    AllRecipes?.Loading ?
                    <Box>
                        Loading ...
                    </Box>  
                    :
                    AllRecipes?.data?.slice(0,12).map((product:any)=>{
                        return(
                            <RecipeCard product={product}/>
                        )
                    }) 
                    

                }
                </Paper>
                <Typography sx={{fontSize:'1rem', fontWeight:'bolder',marginLeft:'1.6rem'}}>Recommended for you</Typography>
                <Paper className='recipe_wall'> 
                
                {
                    AllRecipes?.Loading ?
                    <Box>
                        Loading ...
                    </Box>  
                    :
                    AllRecipes?.data?.slice(12,18).map((product:any)=>{
                        return(
                            <RecipeCard product={product}/>
                        )
                    }) 
                    

                }
                
                </Paper>
        </>
            }
        </>
    )
}
export default RecipeWall