import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import JoinPage from "./pages/JoinPage";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomePage/>}/>
      <Route path={"/auth"} element={<AuthPage/>}/>
      <Route path={"/join"} element={<JoinPage/>}/>
      <Route path={"/main"} element={<MainPage/>}/>
      <Route path={"/quiz"} element={<QuizPage/>}/>
    </Routes>
  );
};

export default App;