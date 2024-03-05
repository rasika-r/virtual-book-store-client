import {useParams} from 'react-router-dom'
import Navbar from '../Navbar';
import {useState, useEffect} from 'react'
import '../css/bookdetails.css'
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';



export default function BookDetails() {

    const [book, setBook] = useState({})

    const {id} = useParams();

    // const book = {
    //     id : 1,
    //     book_name: "Harry Potter",
    //     author_name: "Rasika",
    //     ratings: 4,
    //     img : "https://images.pexels.com/photos/3576955/pexels-photo-3576955.jpeg?auto=compress&cs=tinysrgb&w=600"
    // }

    useEffect(() => {
      axios.get(`http://localhost:8000/books/${id}`).then(result => setBook(result.data.res))

    }, [])
    

  return (
    <div className="bookdetails">
        <div className="navbar"><Navbar/></div>
        <div className="details-wrapper">
            <div className="left-cover">
                <img src={book.img}/>
            </div>
                <div className="right-content">
                    <h1 className="book-name">{book.book_name} - {book.genre}</h1>
                    <div className="author-name">{book.author_name}</div>
                    <div className="rating-stars">
                    <div className="rating-stars">
                        {Array(book.ratings).fill().map((_, index) => (
                        <StarIcon key={index} sx={{color:'#ffe234'}}  />
                        ))}
                    </div>
                    <div className="book-desc">{book.book_desc}</div>
                    {/* <div className="book-desc">congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id  </div> */}
                    <div className="btn-wrapper">
                        <div className="rent-btn book-btn"> <button>Rent &nbsp;&nbsp; ${book.rent_amount}</button> </div>
                        <div className="buy-btn book-btn"> <button>Buy &nbsp;&nbsp; ${book.purchase_amount}</button> </div>
                    </div>
                </div>
        </div>
      
    </div>
    </div>
  )
}

