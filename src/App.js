import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TradeScreen from './screens/TradeScreen/TradeScreen';
import Header from './components/Header/Header';
import NotFound from './screens/NotFoundScreen/NotFound';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TradeScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
