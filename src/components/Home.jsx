import { useSelector } from 'react-redux';
import Case from './Case';

const Home = () => {
  const cases = useSelector((state) => state.cases.cases);
  const { searchText } = useSelector((state) => state.cases);
  const { error } = useSelector((state) => state.cases);
  const filteredCases = searchText ? cases.filter((element) => element.country.toLowerCase()
    .includes(searchText && searchText.toLocaleLowerCase()))
    : cases;
  return (
    <div className="casesList">
      {error && <p>{error}</p>}
      {filteredCases.length > 0
        ? (
          <div className="cases">
            {
            filteredCases.map((singleCase) => (
              <Case key={singleCase.country} covidCase={singleCase} />
            ))
          }
          </div>
        )
        : <div className="search-not-found">No Results Found</div>}
    </div>
  );
};
export default Home;
