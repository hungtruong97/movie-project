import Header from "components/Header";
import Login from "features/Auth/Login";
import Signup from "features/Auth/Signup";
import Booking from "features/Booking/Booking";
import Home from "features/Booking/Home";
import MovieDetail from "features/Booking/MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail/:id" element={<MovieDetail />} />
        <Route path="/booking" element={<Booking />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
