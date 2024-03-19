import '../css/cart.css';
import { useNavigate } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';

const Cart = ({id, bookName, rating, author, img, url, flag}) => {
  console.log(id,bookName,"doende");
  const navigate = useNavigate();

  const handleViewPDF = () => {
    localStorage.setItem('url', url);
    localStorage.setItem('book_id', id);
    navigate(`/pdfview/`)
  }

  const handleBookDetails = () => {
    navigate(`/bookdetails/${id}`)
  }


  return (
    <div className="cart-wrapper">
      <div className="cart-card" onClick={flag?handleViewPDF:handleBookDetails}>
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
