import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  setCurrentCategory,
} from '../reducers/categoriesSlice';
import {
  selectCategoriesData,
  selectCurrentCategory,
} from '../selectors/categorySelector';

const useRestaurant = (topCategories) => {
  const dispatch = useDispatch();
  const allCategories = useSelector(selectCategoriesData);
  const currentCategory = useSelector(selectCurrentCategory);
  const firstLevelSubs = allCategories.find(
    ({ name }) => name === topCategories,
  )?.sub;

  const allLevelSubs = useMemo(
    () => allCategories.filter((item) => item.parentId === currentCategory.parentId),
    [currentCategory],
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return {
    firstLevelSubs,
    setCurrentCategory: (category) => {
      dispatch(setCurrentCategory(category));
    },
    allLevelSubs,
  };
};

export default useRestaurant;
