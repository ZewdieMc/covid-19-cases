import {
  FaBed, FaHeadSideMask, FaSkating, FaSkull,
} from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { name } = useParams();
  const cases = useSelector((state) => state.cases.cases);
  const covidCase = cases.find((element) => element.country === name);
  return (
    <div className="country-detail">
      <div className="detail country-detail_country">
        <h2>{covidCase.country}</h2>
        <img src={covidCase.countryInfo.flag} alt="" />
      </div>
      <div className="detail country-detail_confirmed">
        <FaHeadSideMask size={28} style={{ fill: 'orange' }} />
        <h2>Confirmed</h2>
        <p style={{ color: 'orange' }}>{covidCase.cases}</p>
      </div>
      <div className="detail country-detail_critical">
        <FaBed size={28} style={{ fill: '#B98685' }} />
        <h2>
          Critical
        </h2>
        <p style={{ color: '#B98685' }}>{covidCase.critical}</p>
      </div>
      <div className="detail country-detail_deaths">
        <FaSkull size={28} style={{ fill: '#b3221b' }} />
        <h2>Deaths</h2>
        <p style={{ color: '#b3221b' }}>{covidCase.deaths}</p>
      </div>
      <div className="detail country-detail_recovered">
        <FaSkating size={28} style={{ fill: '#5CDB95' }} />
        <h2>Recovered</h2>
        <p style={{ color: 'lightgreen' }}>{covidCase.recovered}</p>
      </div>
    </div>
  );
};

export default Detail;
