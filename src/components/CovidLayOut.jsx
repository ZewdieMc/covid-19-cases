import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCases as fetchCovidData } from '../redux/covid/covidSlice';
import NavBar from './NavBar';
import Head from './Header';

const CovidLayOut = () => {
  const dispatch = useDispatch();
  let cases = useSelector((state) => state.cases.cases);
  const { isLoading } = useSelector((state) => state.cases);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  useEffect(() => {
    if (cases.length === 0) dispatch(fetchCovidData());
  }, [dispatch, cases.length]);

  cases = cases.filter((element) => element.country.toLowerCase()
    .includes(searchText.toLocaleLowerCase()));

  return (
    <div className="covid-layout">
      { isLoading
        ? <div className="loading">Loading...</div>
        : (
          <>
            <NavBar onChange={handleSearch} searchText={searchText} />
            <Head />
            <Outlet context={{ cases }} />
          </>
        )}
    </div>
  );
};

export default CovidLayOut;
