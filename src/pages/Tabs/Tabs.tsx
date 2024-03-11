import { Box } from '@mui/material'
import './Tabs.css'
import TabButton from './TabButtons/TabButton'
const Tabs:React.FC=()=>{
    return(
        <>
             
             <Box className='tab-container'>
                <TabButton
                    Title={"dinner"}
                    product={1}
                    color={'#F6784C'}
                />
                 <TabButton
                    Title={"lunch"}
                    product={1}
                    color={'#C4D600'}

                />
                 <TabButton
                    Title={"snack"}
                    product={1}
                    color={'#EAAA00'}

                />
                 <TabButton
                    Title={"Most Reviewed"}
                    product={1}
                    color={'#ED8B00'}

                />
                 <TabButton
                    Title={"Most Rated"}
                    product={1}
                    color={'#84BD00'}

                />
           
           </Box>
        </>
    )
}
export default Tabs