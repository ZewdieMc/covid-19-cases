import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Case from './Case';

const Home = () => {
  const { cases } = useOutletContext();
  const { isLoading } = useSelector((state) => state.cases);
  const { error } = useSelector((state) => state.cases);

  return (
    <div className="casesList">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {cases && (
        <div className="cases">
          {
            cases.map((singleCase) => (
              <Case key={singleCase.id} covidCase={singleCase} />
            ))
          }
        </div>
      )}
    </div>
  );
};
export default Home;
