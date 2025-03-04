import React, { useState, useEffect } from 'react';

// Higher-Order Component (HOC) pattern
export function withDataLoader(WrappedComponent, fetchFunction, initialData = []) {
  return function WithDataLoader(props) {
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          const result = await fetchFunction();
          setData(result);
          setError(null);
        } catch (err) {
          setError(err.message || 'An error occurred while fetching data');
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    return (
      <WrappedComponent
        data={data}
        loading={loading}
        error={error}
        {...props}
      />
    );
  };
}

// Render Props pattern
export function DataLoader({ fetchFunction, render, initialData = [] }) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchFunction();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return render({ data, loading, error });
}