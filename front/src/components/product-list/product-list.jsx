import React from 'react';
import ProductItem from '../product-item/product-item';

const ProductList = (props) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <div className="product-list">
            <h4 className="product-list-title">판매 상품</h4>
            <ul className="product-list-container">
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />


            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ProductList;