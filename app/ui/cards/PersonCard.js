import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PersonCard(props) {
    const {name, job, description, image} = props;
  return (
    <Box
    sx={{
        mt: 5,
    }}
    >
        <Box
        sx={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '70%',
            height: '50vh',
            borderRadius: 4,

       
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
       
        
        }}
        >
        </Box>
        <Typography fontSize={20} fontWeight={'bold'} sx={{ color: "#ffffff", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
            {name}
        </Typography>
        <Typography fontSize={14} sx={{ color: "#ffffff", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>
            {job}
        </Typography>
        <Typography mt={1} sx={{ color: "#ffffff", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'}}>
            {description}
        </Typography>
        
       
    </Box>
  )
}
