/**
 * @jest-environment jsdom
 */

const React = require('react');
const { render, screen, waitFor } = require('@testing-library/react');
require('@testing-library/jest-dom');
const DataFetcher = require('./DataFetcher');

describe('DataFetcher', () => {
  it('displays fetched data', async () => {
    const mockFetchData = jest.fn().mockResolvedValue('Fetched data');

    render(React.createElement(DataFetcher, { fetchData: mockFetchData }));

    // Wait until the data appears before asserting anything
    await waitFor(() => {
      expect(screen.getByText('Fetched data')).toBeInTheDocument();
    });

    // to check "Loading..." disappears
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
