import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import { BAR, BAR_URL } from '../../constants/constant';
import BackBtn from '../../components/buttons/backButton/BackButton';
import LanguageBtn from '../../components/buttons/languageButton/LanguageButton';
import './SubBarPage.css';
import useCategories from '../../hooks/useCategories';
import CategoriesSlider from '../../components/sliders/categoriesSlider/CategoriesSlider';
import imgUrl from '../../assets/images/bar.jpeg';
import imgUrl_1 from '../../assets/images/bar_2.jpg';
import imgUrl_2 from '../../assets/images/bar_3.jpg';

const SubBarPage = () => {
  const { firstLevelSubs, setCurrentCategory } = useCategories('Drinks');
  const imgList = [imgUrl, imgUrl_1, imgUrl_2];
  const fullCategoriesData = firstLevelSubs?.map((item, index) => ({...item,  image: imgList[index % 3]}));
  

  return (
    <div className="sub-bar-page">
      <div className="main">
        <Header title={BAR} />
        {firstLevelSubs?.length > 0 && <CategoriesSlider items={fullCategoriesData} setCurrentCategory={setCurrentCategory} url={BAR_URL} />}
        <div className="footer">
          <Link to="/">
            <BackBtn />
          </Link>
          <Link to="/languages">
            <LanguageBtn />
          </Link>
        </div>
      </div>
    </div>
  )

};

export default SubBarPage;
