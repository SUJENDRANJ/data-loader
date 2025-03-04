import React from 'react';
import { ShoppingBag } from 'lucide-react';

// Product List component to be used with Render Props pattern
const ProductList = ({ data, loading, error }) => {
  if (loading) return (
    <div className="flex justify-center items-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
      <span className="ml-2">Loading products...</span>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <p>Error: {error}</p>
    </div>
  );

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <ShoppingBag className="h-6 w-6 text-green-500 mr-2" />
        <h2 className="text-xl font-semibold">Product List</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map(product => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                ${product.stock > 20 ? 'bg-green-100 text-green-800' : 
                  product.stock > 10 ? 'bg-yellow-100 text-yellow-800' : 
                  'bg-red-100 text-red-800'}`}>
                Stock: {product.stock}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1">{product.category}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
              <button className="bg-green-500 hover:bg-green-600 text-white text-sm py-1 px-3 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;