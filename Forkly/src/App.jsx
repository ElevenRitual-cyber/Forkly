import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';


function App() {
  return (
    <>
       <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {/* <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} /> */}
            </Route>
        </Routes>
    </>
  );
}

export default App;