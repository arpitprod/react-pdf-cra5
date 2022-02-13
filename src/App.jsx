import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sample from './Sample';

const App = () => {

  return (
    <Router>
      <Routes>
				<Route path="/pdf" element={<Sample />} />
				<Route path="/pdf/two" element={<Sample />} />
      </Routes>
    </Router>
  )
}

export default App
