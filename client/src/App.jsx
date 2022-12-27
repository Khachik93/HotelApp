import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RestaurantPage from './containers/restaurantPage/RestaurantPage';
import MusicHallPage from './containers/musicHallPage/MusicHallPage';
import BarPage from './containers/barPage/BarPage';
import CategoriesPage from './containers/categoriesPage/CategoriesPage';
import LanguagesPage from './containers/languagesPage/LanguagesPage';
import SubRestaurantPage from './containers/subRestaurantPage/SubRestaurantPage';
import SubBarPage from './containers/subBar/SubBarPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<CategoriesPage />} />
      <Route path="/event" element={<MusicHallPage />} />
      <Route path="/bar" element={<BarPage />} />
      <Route path="/restaurant" element={<RestaurantPage />} />
      <Route path="/languages" element={<LanguagesPage />} />
      <Route path="/sub-restaurant" element={<SubRestaurantPage />} />
      <Route path="/sub-bar" element={<SubBarPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
