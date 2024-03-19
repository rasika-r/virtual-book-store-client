import React from 'react';
import Progress from './progress';
import '../css/progress.css'
import { Box } from '@mui/system';

const ProgressCart = ({name,value}) => {

  return (

    <div className="progress-cart">
      <div className='progress-name'><Box sx={{ml:2}}>
        <p>{name}</p>
      </Box></div>
      <div className='progress-icon'>
      <Box sx={{ml:8}}>
        <Progress value={value}/>
      </Box>
      </div>

    </div>
     
    
  );
};

export default ProgressCart;
