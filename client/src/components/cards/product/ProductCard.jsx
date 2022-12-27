import PropTypes from 'prop-types';
import './ProductCard.css';

const ProductCard = ({
  description, name, price, imageUrl, altImg,
}) => {

  const cutName = name.slice(0, 15);
  const cutDdiscription = description.slice(0, 90) + "...";
  
  return (
    <div className="card">
      <img src={imageUrl} alt={altImg} />
      <div className="info">
        <p className="price">{price}</p>
        <div>
          <p className="title">{cutName}</p>
        </div>
        <div>
          <hr />
        </div>
        <div className="discription">
          <p>{cutDdiscription}</p>
        </div>
      </div>
    </div>
  )
};

ProductCard.propTypes = {
  description: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  imageUrl: PropTypes.string,
  altImg: PropTypes.string,
};

ProductCard.defaultProps = {
  description: '',
  name: '',
  price: '',
  imageUrl: '',
  altImg: '',
};

export default ProductCard;
