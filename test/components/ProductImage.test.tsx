import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';
describe('ProductImage', () => {
  test('show component with custom image', () => {
    const wrapper = renderer.create(<ProductImage img="http://product.jpg" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('show component with product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
