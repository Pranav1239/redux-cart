import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import { Provider } from "react-redux";


import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Support from "./components/Support";
import store from "./store/store";


function App() {
  return (
      <>
      <Provider store={store}>
        <Router>
            <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Products" element={<Products/>}/>
              <Route path="/Support" element={<Support/>}/>
              <Route path="/Cart" element={<Cart/>}/>
          </Routes>
        </Router>
      </Provider>
      </>
  )
}

export default App;
