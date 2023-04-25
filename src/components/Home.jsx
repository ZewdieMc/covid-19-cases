import { useOutletContext } from 'react-router-dom';

const Home = () => {
  const { cases } = useOutletContext();
  return (
    <div>
      <h1>
        Home
        {' '}
        { cases.length }
      </h1>
    </div>
  );
};
export default Home;
