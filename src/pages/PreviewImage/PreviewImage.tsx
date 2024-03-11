import { Carousel } from "react-responsive-carousel"
import {Box, Button, Typography} from '@mui/material'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './PreviewImage.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
interface img{
    AllRecipes:any
}
const PreviewImage:React.FC<img>=({AllRecipes})=>{
    const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
    const [name,setName]=useState('')
    const navigate=useNavigate()
        const handleCarouselChange = (index: number) => {
            setCurrentRecipeIndex(index);
        };
        const handleNavigateToDetails = () => {
            navigate('/details', {
                state: {
                    data: AllRecipes?.[currentRecipeIndex]
                }
            });
        };
    return(<>
    <Box className='Carousel-container'>
        <Box className='carousel-container' onClick={handleNavigateToDetails}
>
        <Carousel autoPlay className="Carousel-style" showThumbs={false}
        onChange={handleCarouselChange
            
        }
       
        >
       
                {AllRecipes?.map((product:any, index:any) => (
                    <Box>
                    <img key={index} src={product?.image} alt={`Preview ${index}` }  
                    style={{  height: 'auto', maxHeight: '300px',objectFit:'cover' }} 

                    />
                    
                   
                    </Box>
                ))}
           
        </Carousel>
        <Box className="overlay-text">

                    <Typography sx={{color:"orange",fontSize:'1.5rem'}}>Trending Now</Typography>
                    <Typography className="food-name-style">{AllRecipes?.[currentRecipeIndex]?.name}</Typography>
                </Box>
      
        </Box>
        </Box>
    </>
    )
}
export default PreviewImage