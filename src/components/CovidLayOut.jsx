import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCases as fetchCovidData } from '../redux/covid/covidSlice';
import NavBar from './NavBar';
import Header from './Header';

const CovidLayOut = () => {
  const dispatch = useDispatch();
  const cases = useSelector((state) => state.cases.cases);
  useEffect(() => {
    if (cases.length === 0) dispatch(fetchCovidData());
  }, [dispatch, cases.length]);

  return (
    <div className="covid-layout">
      <NavBar />
      <Header />
      <Outlet context={{ cases }} />
    </div>
  );
};

export default CovidLayOut;
