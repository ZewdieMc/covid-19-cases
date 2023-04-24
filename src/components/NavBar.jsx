import { FaArrowCircleLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const NavBar = () => {
  const { name } = useParams();
  return (
    <nav>
      {useParams().hasOwnProperty('name') && <FaArrowCircleLeft />}
      <div className="nav-text">
        <span>covid-image</span>
        <div><h2>Covid-19 cases</h2></div>
      </div>
      <div className="nav-text">
        <span>search</span>
      </div>
    </nav>
  );
};
export default NavBar;
