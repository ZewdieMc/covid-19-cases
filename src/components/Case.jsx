import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Case = ({ covidCase }) => (
  <div className="case">
    <div className="case-country">
      <h2>{covidCase.country}</h2>
      <p className="case-country_confirmed">
        {covidCase.cases}
      </p>
    </div>
    <Link className="detail-arrow" to={`/Details/${covidCase.country}`}>
      <FaArrowRight />
    </Link>
  </div>
);

Case.propTypes = {
  covidCase: PropTypes.shape({
    country: PropTypes.string,
    cases: PropTypes.number,
    deaths: PropTypes.number,
    recovered: PropTypes.number,
  }).isRequired,
};

export default Case;
