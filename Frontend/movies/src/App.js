import Header from "./Components/Header";
import Movies from "./Components/Movies/Movies";
import Admin from "./Components/Admin/Admin";
import HomePage from "./Components/HomePage";
import Auth from "./Components/Auth/Auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { adminActions, userActions } from "./store";
import Booking from "./Components/Bookings/Booking";

function App() {
  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log("isAdminLoggedIn", isAdminLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispatch(userActions.login());
    } else if (localStorage.getItem("adminId")) {
      dispatch(adminActions.login());
    }
  }, []);
  return (
    <div>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Auth" element={<Auth />} />
          <Route path="/Booking/:id" element={<Booking />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
