import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CovidLayOut from './components/CovidLayOut';
import Detail from './components/Detail';
import PageNotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CovidLayOut />}>
        <Route index element={<Home />} />
        <Route path="Details">
          <Route path=":name" element={<Detail />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
