import '../css/cart.css';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const Cart = ({id, bookName, rating, author, img}) => {
  const navigate = useNavigate();

  const handleOpenDesc = () => {
    navigate(`/bookdetails/${id}`);
  }


  return (
    <div className="cart-wrapper">
      <div className="cart-card" onClick={handleOpenDesc}>
        <div className="left-content">
          <img src={img} alt="Book" className="cart-image" />
          <div className="card-details">
            <span className="name">{bookName}</span>
            <span className="rating"> {rating} 
              <span className="rating-star"><StarIcon sx={{color:'#ffe234'}}/></span>  
            </span> {/* 4-star rating */}
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
