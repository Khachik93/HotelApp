import Slider from 'react-slick';
import NextBtn from '../../buttons/PrevNextButton/NextButton';
import PrevBtn from '../../buttons/PrevNextButton/PrevButton';
import { useNavigate } from 'react-router-dom'
import './CategoriesSlider.css';
import CategoriesCard from '../../cards/categories/CategoriesCard';

const settings = {
    className: 'categories-slider',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 1000,
    nextArrow: (
        <div>
            <NextBtn />
        </div>
    ),
    prevArrow: (
        <div>
            <PrevBtn />
        </div>
    ),
};

const CategoriesSlider = ({ items, setCurrentCategory, url }) => {
    const itemsLength = items.length;
    const slidesToShow = itemsLength > 3 ? 3 : 3;
    const settingsToPass =
        itemsLength < 6 ? { ...settings, slidesToShow: slidesToShow } : settings;
    const navigate = useNavigate();
    return (
        <div>
            <Slider {...settingsToPass}>

                {!!items && items.map((item) => (
                    <div
                        type="button"
                        key={item.id}
                        className="food"
                        onClick={() => {
                            setCurrentCategory(item);
                            navigate(url);
                        }}
                    >
                        <CategoriesCard {...item} imgUrl={item.image} />
                    </div>
                ))}

            </Slider>
        </div>

    )
};

export default CategoriesSlider;
