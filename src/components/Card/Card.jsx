import { Box } from '@mui/material';
import './card.css';

const Card = () => {
    return (
    <div className='card'>
        <Box 
            display='flex' 
            height='100px' 
            width='500px' 
            bgcolor='white' 
            borderColor='black' 
            border={1} 
            borderRadius='10px'
            padding='10px'>
                <h2>SVIP</h2>
                
            <Box
                marginLeft='100px'
                display='flex'
                flexDirection='column'
                height='80px' 
                width='1500px' 
                bgcolor='var(--color-text)' 
                borderColor='black' 
                border={1} 
                borderRadius='10px'
                padding='10px'
                justifyContent='center'
                alignItems='center'
                color='white'>
                    Tersedia
                    <p>20</p></Box>
            <Box
                marginLeft='10px'
                display='flex'
                flexDirection='column'
                height='80px' 
                width='1500px' 
                bgcolor='white' 
                borderColor='black' 
                border={1} 
                borderRadius='10px'
                padding='10px'
                justifyContent='center'
                alignItems='center'>
                    Jumlah Bed
                    <p>20</p></Box>
            </Box>
     </div>
    );
}

export default Card;