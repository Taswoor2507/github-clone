import { Route, Routes } from "react-router-dom";
// pages
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LikesPage from "./pages/LikesPage.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
// components
import SideBar from "./components/SideBar.jsx";

function App() {
  return (
    <>
      <div className="flex text-white">
        <SideBar />
        <div className="max-w-5xl my-5 mx-auto transition-all duration-300 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/likes" element={<LikesPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
