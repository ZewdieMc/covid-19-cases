import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import covid from '../assests/images/coronavirus.png';

const NavBar = ({ onChange, searchText }) => {
  const { name } = useParams();
  return (
    <nav>
      { name && <Link className="back-arrow" to="/"><FaArrowLeft /></Link>}
      <div className="logo">
        <img src={covid} style={{ height: '30px', width: '30px', transition: 'all 0.5s ease' }} alt="" />
        <div><h2>Covid-19 cases</h2></div>
      </div>
      <div className="searchBar">
        <input type="text" placeholder="Search Country" value={searchText} onChange={onChange} />
        <FaSearch className="search-icon" />
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
export default NavBar;
