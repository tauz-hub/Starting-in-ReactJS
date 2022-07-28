import { Route,BrowserRouter as Router, Routes} from "react-router-dom";
import {  User } from "./pages/user";
import { Admin } from "./pages/admin";

export function AppRoutes(){
  return (
    <Router>
     <Routes>
      <Route path="/user" element={<User/>} />
      <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}