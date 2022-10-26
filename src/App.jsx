import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MultiSearch from './pages/MultiSearch';
import Layout from './Layout';
import About from './pages/About';
import { Provider as JotaiProvider } from 'jotai';
function App() {
  return (
    <BrowserRouter>
      <JotaiProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/multi-search" element={<MultiSearch />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
      </JotaiProvider>
    </BrowserRouter>
  );
}

export default App;
