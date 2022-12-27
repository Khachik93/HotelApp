import './CategoriesCard.css';
import img from '../../../assets/images/download.jpeg';

const CategoriesCard = ({ name ,imgUrl}) => {
    const cutName = name.slice(0, 19);
    return (
        <div className="categories-card">
            <img src={imgUrl} alt="alt img" />
            <div className="title">
                <p>{cutName}</p>
            </div>
        </div>
    )
}

export default CategoriesCard;
