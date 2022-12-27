import { createSelector } from 'reselect';

export const selectCategories = (stete) => stete.category;
export const selectCategoriesData = createSelector(
  selectCategories,
  ({ data }) => {
    const dataValues = Object.values(data);
    return dataValues || [];
  },
);

export const selectCurrentCategory = createSelector(
  selectCategories,
  ({ currentCategory }) => currentCategory,
);

export const selectAllSubsOfCurrentCategory = createSelector(
  selectCategories,
  ({ data, currentCategory }) => {
    const allSubs = Object.values(data).reduce((acc, item) => {
      let parentId = item?.parentId;
      while (parentId) {
        if (parentId === currentCategory.id) {
          acc.push(item);
          break;
        }
        parentId = data[parentId]?.parentId;
      }
      return acc;
    }, []);
    return allSubs;
  },
);
