import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderWithProviders from '../utils/test-utils';
import LayOut from '../components/CovidLayOut';
import Home from '../components/Home';
import setupStore from '../redux/store';
import mockData from '../mocks/mockData';

describe('Covid Cases snapshot', () => {
  test('Test for Layout', () => {
    renderWithProviders(
      <Provider store={setupStore({})}>
        <LayOut />
      </Provider>,
    );
    const cases = document.querySelector('.cases');
    expect(cases).toMatchSnapshot();
  });
});

describe('Test COVID cases before fetching API', () => {
  test('Test for Loading... state', () => {
    renderWithProviders(<LayOut />);
    expect(screen.queryByText(/Loading.../i)).toBeInTheDocument();
    expect(screen.queryByText(/Confirmed/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Deaths/i)).not.toBeInTheDocument();
  });
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useOutletContext: () => mockData,
}));

describe('Test COVID cases after fetching API', () => {
  test('Test if cases are rendered after fetching', async () => {
    renderWithProviders(<Home />);
    expect(screen.queryByText(/No Results Found/i)).toBeInTheDocument();
    expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
  });
});
