import {Button} from '@mui/material'
import "./TabButton.css"
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import EshopStateType from '../../../types/RecipeState'
import { PayloadAction } from '@reduxjs/toolkit'
import { TypeData } from '../../../store/slice/slicer'
interface buttonProp{
    Title:String
    product:any
    color:any
}
const TabButton:React.FC<buttonProp>=({Title,product,color})=>{
    const dispatch : ThunkDispatch<EshopStateType,void, PayloadAction<any>> = useDispatch()

    const handleData=()=>{
        dispatch(TypeData('dinner'))
    }
    return(
        <>
            <Button onClick={handleData} className='Tab-button' sx={{background:color,color:'white'}}
            >
                {Title}
            </Button>
        </>
    )
}
export default TabButton
