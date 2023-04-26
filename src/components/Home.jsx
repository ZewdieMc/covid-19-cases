import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Case from './Case';

const Home = () => {
  const { cases } = useOutletContext();
  const { error } = useSelector((state) => state.cases);

  return (
    <div className="casesList">
      {error && <p>{error}</p>}
      {cases.length ? (
        <div className="cases">
          {
            cases.map((singleCase) => (
              <Case key={singleCase.country} covidCase={singleCase} />
            ))
          }
        </div>
      )
        : <div className="loading">No Result Found</div>}
    </div>
  );
};
export default Home;
