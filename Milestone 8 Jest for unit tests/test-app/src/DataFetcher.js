const React = require('react');

function DataFetcher({ fetchData }) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const load = async () => {
      const result = await fetchData();
      setData(result);
      setLoading(false);
    };
    load();
  }, [fetchData]);

  if (loading) return React.createElement('div', null, 'Loading...');
  return React.createElement('div', null, data);
}

module.exports = DataFetcher;
