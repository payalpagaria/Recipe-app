import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { profile } from 'console';
import './RecipeCard.css'
interface myRecipe{
    product:any
}
 const RecipeCard:React.FC<myRecipe>=({product}) =>{
    const navigate=useNavigate()
  return (
    <Card className='card-outline'
    onClick={()=>{
        navigate('/details',{
            state:{
                data:product
            }
        }
        )
    }}
    >
      <CardActionArea>
        <img className='img-container' src={product?.image} alt='img'></img>
        <CardContent>
          <Typography gutterBottom  component="div">
          {product.name}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default RecipeCard