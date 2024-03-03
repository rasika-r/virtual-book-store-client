const Help = () => {
    return ( 
        <div>
            <div className="cart-container">
        <div className="cart-wrapper" style={{ transform: `translateX(-${scrollPosition}px)` }}>
         
          <div className="cart1">
            <div className="left-content">
              <img src={img} alt="Book" className="cart-image" />
              <div className="details">
                <span className="name">Book Name</span>
                <span className="rating">&#9733;&#9733;&#9733;&#9733;</span> {/* 4-star rating */}
                <p className="author">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
     );
}
 
export default Help;