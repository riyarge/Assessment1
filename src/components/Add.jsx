import React from 'react'
import { useState } from 'react';

const Add = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
      });
    
      const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add the product (e.g., send to API)
        console.log(product);
      };
  return (
    <div>
    <h1>Add Product</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={product.description}
        onChange={handleChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={product.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={product.category}
        onChange={handleChange}
      />
      <button type="submit">Add Product</button>
    </form>
  </div>
  )
}

export default Add