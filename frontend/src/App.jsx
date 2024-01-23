import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LoginForm from "./modules/auth/login.jsx";
import SignUpForm from "./modules/auth/signup.jsx";
import { Home } from "./layouts/home.jsx";
import { LoggedInHome } from "./layouts/loggedInHome.jsx";
import { MyMusic } from "./layouts/myMusic.jsx";
// import MyMusic from "./layouts/myMusic.jsx";
import { UploadSong } from "./layouts/uploadSong.jsx";
import { useCookies } from "react-cookie";
import GetStartedPage from "./pages/getStarted.jsx";

function App() {
  const [cookie, setCookie] = useCookies(["token"]);

  // Check if cookie.token is defined before logging
  if (cookie.token) {
    console.log(cookie.token);
  } else {
    console.log("Token is not set");
  }

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<LoggedInHome />} path="/homeIn" />
          <Route element={<GetStartedPage />} path="/" />
          <Route element={<LoginForm />} path="/login" />
          <Route element={<SignUpForm />} path="/signup" />
          <Route element={<Home />} path="/home" />
          <Route element={<MyMusic />} path="/mymusic" />

          <Route element={<UploadSong />} path="/uploadSong" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
