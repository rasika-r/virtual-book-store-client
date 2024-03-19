import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function CircularProgressWithLabel(props) {
    console.log(props.value.value);
  return (
    <div style={{ position: 'relative', display: 'inline-block', borderRadius: '50%'}}>
    <CircularProgress
      variant="determinate"
      size={70} // Adjust the size of the circle
      thickness={4}
      
      {...props.value}
    />
      <Typography
        variant="caption"
        component="div"
        color="textSecondary"
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        {`${Math.round(props.value.value)}%`}
      </Typography>
    </div>
  );
}

function Progress(value) {
  const [progress, setProgress] = React.useState(0);

  return (
    <div>
      {/* Display the CircularProgressWithLabel component with dynamic progress value */}
      <CircularProgressWithLabel value ={value}/>
    </div>
  );
}

export default Progress;
