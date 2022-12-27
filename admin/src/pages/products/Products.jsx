import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getProduct,
  addProduct,
  deleteProduct,
  editProduct,
} from "../../redux/reduxSlice/productSlice";
import { selectAllCategories  } from "../../selectors/categorySelector";
import { getCategory } from "../../redux/reduxSlice/categorySlice";
import {
  selectProduct,
} from "../../selectors/productSelector";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ProductCard from "../../components/card/product/ProductCard";
import ProductModal from "../../components/modal/product/ProductModal";
import ConfirmModal from "../../components/modal/confirm/ConfirmModal";
import "./Products.less";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});
  const [query, setQuery] = useState('');

  const [productToBeEdit, setProductToBeEdit] = useState(null);
  const dispatch = useDispatch();
  const product = useSelector(selectProduct);
  const allCategory = useSelector(selectAllCategories);

  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCategory());
  }, []);

  const onAddClick = () => {
    setOpenModal(true);
  };

  const onDeleteClick = (item) => {
    setConfirmModal(true);
    setDeleteItem(item);
  };

  const onEditClick = (item) => {
    setProductToBeEdit(item);
    setOpenModal(true);
  };

  const handleProductSave = (name, imageUrl, price, description, status, categoryId) => {
    if (!productToBeEdit) {
      dispatch(
        addProduct({
          name,
          imageUrl,
          price,
          description,
          status,
          categoryId,
        })
      );
    } else {
      dispatch(editProduct({
        name, imageUrl, price, description, status, categoryId,
        id: productToBeEdit.id
      }));
    }
  };

  const handleOnModalClose = () => {
    setOpenModal(false);
    setProductToBeEdit(null);
  };

  const handleOnConfirmModalClose = () => {
    setConfirmModal(false);
  };

  const handleOnDelete = () => {
    setConfirmModal(false);
    dispatch(deleteProduct(deleteItem));
  };

  const searchProductByName = (product) => {
    if (query == '') {
      return product;
    }
    if (product.name.toLowerCase().includes(query.toLowerCase())) {
      return product;
    }
  };

  return (
    <div className="Product">
      <div className="header">
        Product
      </div>
      <div className="addButton">
        <input type="text" className="search" placeholder="Search product"
          onChange={e => setQuery(e.target.value)} />
        <Button variant="outlined" startIcon={<AddIcon />} onClick={onAddClick}>
          ADD PRODUCT
        </Button>
      </div>

      {product.filter((val) => searchProductByName(val)).map((item) => {
        return (
          <ProductCard
            key={item.id}
            title={item.name}
            id={item.id}
            image={item.imageUrl}
            description={item.description}
            price={item.price}
            status={item.status}
            onDeleteClick={() => onDeleteClick(item)}
            onEditClick={() => onEditClick(item)}
          />
        );
      })}

      {openModal && <ProductModal
        active={openModal}
        onSave={handleProductSave}
        onClose={handleOnModalClose}
        editProduct={productToBeEdit}
        allCategory={allCategory}
      />}

      {confirmModal && <ConfirmModal
        active={confirmModal}
        onClose={handleOnConfirmModalClose}
        onDelete={handleOnDelete}
      >
        <p>Are you sure you want to delete this product?</p>
      </ConfirmModal>}
    </div>
  );
};

export default Products;
