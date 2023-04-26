import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

const NavBar = () => {
  const { name } = useParams();
  return (
    <nav>
      { name && <Link className="back-arrow" to="/"><FaArrowLeft /></Link>}
      <div className="logo">
        <span>covid-image</span>
        <div><h2>Covid-19 cases</h2></div>
      </div>
      <div className="search">
        <span>search</span>
      </div>
    </nav>
  );
};
export default NavBar;
