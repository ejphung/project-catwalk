import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProductInfo from './productInfo';
import StyleSelector from './styleSelector';
import AddToCart from './addToCart';
import Description from './description';
import ImageGallery from './imageGallery';

const Grid = styled.div`
  display: grid;
  grid-template-areas: "ImageGallery ProductInfo"
                       "ImageGallery StyleSelector"
                       "ImageGallery AddToCart"
                       "Description Description";
  grid-template-columns: 5fr 2fr;
  grid-template-rows: auto auto auto auto;
  grid-gap: 1em;
  min-height: 70vh;
  padding: 1em;
  background: papayawhip;
`;

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allStyles: null,
      index: 0,
    };
  }

  componentDidMount() {
    axios.get('/products/25168/styles')
      .then((res) => {
        this.setState({ allStyles: res.data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { allStyles, index } = this.state;
    if (allStyles) {
      const { product, cart } = this.props;
      const style = allStyles[index];
      const rating = 3.5;
      const { category } = product;
      const productName = product.name;
      const styleName = style.name;
      const price = style.sale_price ? style.sale_price : style.original_price;

      return (
        <Grid>
          <ImageGallery />
          <ProductInfo
            rating={rating}
            category={category}
            productName={productName}
            price={price}
          />
          <StyleSelector />
          <AddToCart />
          <Description />
        </Grid>
      );
    }
    return <div>Loading all styles...</div>;
  }
}

export default ProductOverview;
