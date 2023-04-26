import useSelector from react-redux

const Header = () => {
  const { cases } = useSelector((state) => state.cases);
return (
  <div className="global">
    <h1>Global Real Time Cases</h1>
    <div className="global-cases">
      <h3>Confirmed </h3>
      <h3>Deaths </h3>
    </div>
  </div>
);
};

export default Header;
