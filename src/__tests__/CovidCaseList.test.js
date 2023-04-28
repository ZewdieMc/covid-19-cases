import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import '@testing-library/jest-dom';

const mockStore = configureMockStore([]);

describe('Crypto component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      cases: {
        cases: [
          {
            country: 'Afghanistan',
            countryInfo: {
              _id: 4,
              iso2: 'AF',
              iso3: 'AFG',
              lat: 33,
              long: 65,
              flag: 'https://disease.sh/assets/img/flags/af.png',
            },
            cases: 214581,
            deaths: 7896,
            recovered: 193470,
            critical: 45,
          },
          {
            country: 'Albania',
            countryInfo: {
              _id: 8,
              iso2: 'AL',
              iso3: 'ALB',
              lat: 41,
              long: 20,
              flag: 'https://disease.sh/assets/img/flags/al.png',
            },
            cases: 214581,
            deaths: 3602,
            recovered: 329428,
            critical: 0,
          },
          {
            country: 'Algeria',
            countryInfo: {
              _id: 12,
              iso2: 'DZ',
              iso3: 'DZA',
              lat: 28,
              long: 3,
              flag: 'https://disease.sh/assets/img/flags/dz.png',
            },
            cases: 214581,
            deaths: 6881,
            recovered: 182947,
            critical: 0,
          },
          {
            country: 'Andorra',
            countryInfo: {
              _id: 20,
              iso2: 'AD',
              iso3: 'AND',
              lat: 42.5,
              long: 1.6,
              flag: 'https://disease.sh/assets/img/flags/ad.png',
            },
            cases: 214581,
            deaths: 165,
            recovered: 47563,
            critical: 14,
          },
        ],
      },
    });

    store.dispatch = jest.fn();
  });

  it('should render the cases from store', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>

          <Home />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText('Afghanistan')).toBeInTheDocument();
    expect(screen.getByText('Andorra')).toBeInTheDocument();
  });

  it('case count should be 4', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>

          <Home />
        </Provider>
      </BrowserRouter>,
    );

    expect(screen.getAllByText('214581')).toHaveLength(4);
  });
});
