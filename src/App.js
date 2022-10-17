import {Navbar} from "./components/Navbar"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Store} from "./pages/Store"
import {Home} from "./pages/Home"
import {Pokemon} from "./pages/Pokemon"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/pokemon/:id" element={<Pokemon />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
