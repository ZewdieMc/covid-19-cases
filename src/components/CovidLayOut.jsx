import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchInput, fetchCases as fetchCovidData } from '../redux/covid/covidSlice';
import NavBar from './NavBar';
import Head from './Header';

const CovidLayOut = () => {
  const dispatch = useDispatch();
  const cases = useSelector((state) => state.cases.cases);
  const { isLoading } = useSelector((state) => state.cases);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    dispatch(searchInput(searchText));
  };
  useEffect(() => {
    if (cases.length === 0) dispatch(fetchCovidData());
  }, [dispatch, cases.length]);

  return (
    <div className="covid-layout">
      { isLoading
        ? <div className="loading">Loading...</div>
        : (
          <>
            <NavBar onChange={handleSearch} searchText={searchText} />
            <Head />
            <Outlet />
          </>
        )}
    </div>
  );
};

export default CovidLayOut;
