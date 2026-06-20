import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Food from './Components/Food';


function App() {
  return (
    <>
       <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="food" element={<Food />} />
                <Route path="restaurants" element={<Food />} />
            </Route>
        </Routes>
    </>
  );
}

export default App;