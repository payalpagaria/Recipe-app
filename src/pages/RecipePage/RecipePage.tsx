import { Box, Card, Divider, Paper, Typography, CardMedia, CardContent, Chip, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { Location, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './RecipePage.css'
const RecipePage: React.FC = () => {
    const location = useLocation();
    const [productData, setProductData] = useState<any>()
    const navigate=useNavigate()
    useEffect(() => {
        if (location?.state?.data) {
            setProductData(location?.state?.data)
        }

    }, [])
    const handleBack=()=>{
        navigate('/')
    }
    return (<>
    <Box >
   
        <Paper className="outline-paper">
            <Typography variant="h4" sx={{color:'#F6784C'}}>{productData?.name}</Typography>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Typography variant="h6" sx={{color:'black', fontSize:'20px', fontFamily:"bolder"}}>{productData?.cuisine}</Typography>
                <Button className="backhome" sx={{color:'black'}}
                onClick={handleBack}><Typography>Go Back Home</Typography></Button>
            </Box>

            <Divider />
    
        <Box>
            <Box sx={{width:'20vw',marginTop:'2rem'}} >
                <Card className="Info-card">
                    <CardMedia
                        component="img"
                        sx={{ width: 300, height:200}}
                        image={productData?.image}
                        alt="Live from space album cover"
                    />
                    <CardContent className="content-style">
                        <Typography>  Prep: {productData?.prepTimeMinutes + ' mins'}</Typography>
                        <Typography>  Cook: {productData?.cookTimeMinutes + ' mins'}</Typography>
                        <Typography>serving: {productData?.servings}</Typography>
                        <Typography>calories Per Serving: {productData?.caloriesPerServing + ' kcal'}</Typography>
                        <Typography>Difficulty: {productData?.difficulty}</Typography>


                    </CardContent>
                </Card>
            </Box>
            <Box sx={{marginTop:'2rem'}}>
                <Card sx={{width:'40vw',padding:'1rem'}}>
                    <Typography sx={{color:'#C4D600',fontSize:'1.5rem'}}>Ingredients: </Typography>
                    <CardContent>
                        {<Box>
                            {productData?.ingredients?.map((ingredient: any,) => (
                                <Typography sx={{color:'grey',lineHeight:'1.7'}}>{ingredient}</Typography>
                            ))}
                        </Box>
                        }


                    </CardContent>

                </Card>
            </Box>
        </Box>
            <Box sx={{marginTop:'2rem'}}>
                <Card sx={{width:'40vw',padding:'1rem'}}>
                    <Typography sx={{color:'#ED8B00',fontSize:'1.2rem',}}>Directions: </Typography>
                    <CardContent>
                        {<Box>
                            {productData?.instructions?.map((item: any,) => (
                                <Typography sx={{color:'grey',lineHeight:'1.7'}}>{item}</Typography>
                            ))}
                        </Box>
                        }


                    </CardContent>
                </Card>
            </Box>
            <Box sx={{marginTop:'2rem'}}> 
                <Typography>Tags: </Typography>
                {<Stack direction="row" spacing={1}>
                    {productData?.tags?.map((tag: any,) => (
                        <Chip label={"#"+tag} color="success" variant="outlined" />
                    ))}
                </Stack>
                }
            </Box>
        </Paper>
        </Box>
    </>)
}
export default RecipePage;