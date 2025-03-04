import React from 'react';
import { withDataLoader, DataLoader } from './components/DataLoader';
import UserList from './components/UserList';
import ProductList from './components/ProductList';
import { fetchUsers, fetchProducts, fetchWithError } from './api/mockApi';

// Using HOC pattern with UserList
const UserListWithData = withDataLoader(UserList, fetchUsers);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white shadow rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Data Loader Patterns Demo</h1>
          <p className="text-gray-600 mt-2">
            Demonstrating HOC and Render Props patterns for data fetching
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* HOC Pattern Example */}
          <div>
            <h2 className="text-xl font-semibold mb-4">HOC Pattern</h2>
            <UserListWithData />
          </div>

          {/* Render Props Pattern Example */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Render Props Pattern</h2>
            <DataLoader
              fetchFunction={fetchProducts}
              render={({ data, loading, error }) => (
                <ProductList data={data} loading={loading} error={error} />
              )}
            />
          </div>
        </div>

        {/* Error Handling Example */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Error Handling Example</h2>
          <DataLoader
            fetchFunction={fetchWithError}
            render={({ data, loading, error }) => (
              <div className="bg-white shadow rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-2">Error Handling Demo</h3>
                {loading && (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-500"></div>
                    <span className="ml-2">Loading...</span>
                  </div>
                )}
                {error && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <p>Error demonstration: {error}</p>
                  </div>
                )}
                {!loading && !error && data.length > 0 && (
                  <div>Data loaded successfully</div>
                )}
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default App;