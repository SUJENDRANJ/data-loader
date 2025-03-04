// Mock API functions to simulate data fetching

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock user data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User' },
  { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Viewer' }
];

// Mock product data
const products = [
  { id: 101, name: 'Laptop', price: 999.99, category: 'Electronics', stock: 15 },
  { id: 102, name: 'Smartphone', price: 699.99, category: 'Electronics', stock: 25 },
  { id: 103, name: 'Headphones', price: 149.99, category: 'Accessories', stock: 30 },
  { id: 104, name: 'Coffee Maker', price: 89.99, category: 'Kitchen', stock: 10 },
  { id: 105, name: 'Desk Chair', price: 199.99, category: 'Furniture', stock: 8 }
];

// Fetch users with simulated delay
export const fetchUsers = async () => {
  await delay(800); // Simulate network delay
  return [...users];
};

// Fetch products with simulated delay
export const fetchProducts = async () => {
  await delay(1200); // Simulate network delay
  return [...products];
};

// Simulate API error (for testing error handling)
export const fetchWithError = async () => {
  await delay(500);
  throw new Error('Failed to fetch data');
};