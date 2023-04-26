import { useSelector } from 'react-redux';

const Head = () => {
  const { cases } = useSelector((state) => state.cases);
  const getConfirmed = () => cases.reduce((acc, curr) => curr.cases + acc, 0);
  const getDeaths = () => cases.reduce((acc, curr) => curr.deaths + acc, 0);

  return (
    <div className="global">
      <h1>Global Real Time Cases</h1>
      <div className="global-cases">
        <div className="global-cases_confirmed">
          <h3>Confirmed</h3>
          <span>
            { getConfirmed()}
          </span>
        </div>
        <div className="global-cases_deaths">
          <h3>Deaths</h3>
          <span>
            { getDeaths()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Head;
