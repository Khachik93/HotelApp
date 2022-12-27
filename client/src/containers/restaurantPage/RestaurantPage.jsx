import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import UpDownSlider from '../../components/sliders/upDownSlider/UpDownSlider';
import PrevNextSlider from '../../components/sliders/prevNextSlider/PrevNextSlider';
import BackBtn from '../../components/buttons/backButton/BackButton';
import LanguageBtn from '../../components/buttons/languageButton/LanguageButton';
import './RestaurantPage.css';
import { getProductsById } from '../../reducers/productsSlice';
import { selectAllSubsOfCurrentCategory } from '../../selectors/categorySelector';
import productsData from '../../selectors/productSelector';
import { RESTAURANT } from '../../constants/constant';

const RestaurantPage = () => {
  const [selectedCategoryId, setSelectedCategoryIndex] = useState(0);
  const dispatch = useDispatch();
  const categoriesNames = useSelector(selectAllSubsOfCurrentCategory);
  const products = useSelector(productsData);
  const navigate = useNavigate();

  useEffect(() => {
    if (categoriesNames.length > 0) {
      const { id } = categoriesNames[selectedCategoryId];
      dispatch(getProductsById(id));
    } else {
      navigate('/sub-restaurant') 
    }
  }, [categoriesNames, selectedCategoryId]);

  return (
    <div className="restaurant-page ">
      <div className="main">
        <Header title={RESTAURANT} />
        {products?.length > 0 && <PrevNextSlider items={products} />}
        <div className="footer">
          <Link to="/sub-restaurant">
            <BackBtn />
          </Link>
          <UpDownSlider
            items={categoriesNames}
            onChangeSlide={setSelectedCategoryIndex}
          />
          <Link to="/languages">
            <LanguageBtn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
