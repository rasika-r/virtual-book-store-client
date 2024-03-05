import React from 'react';
import Progress from './progress';
import '../css/progress.css';
import { useNavigate } from 'react-router-dom';

const ProgressCart = () => {

  const navigate = useNavigate();

  return (
    <div className="progress-cart" onClick={navigate('/rentedbooks/pdfview')}>
      <p>Name</p>
      <Progress />
    </div>
  );
};

export default ProgressCart;
