import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MultiSearch from './pages/MultiSearch';
import Layout from './Layout';
import { Provider as JotaiProvider } from 'jotai';
function App() {
  return (
    <BrowserRouter>
      <JotaiProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/multi-search" element={<MultiSearch />} />
            </Routes>
          </Layout>
      </JotaiProvider>
    </BrowserRouter>
  );
}

export default App;
