import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ApiLoggerComponent from "./Components/ApiLoggerComponent";
import ExpensiveCalculation from "./Pages/ExpensiveCalculation";
import ParentWithChild from "./Pages/ParentWithChild";
import FormPage from "./Pages/FormPage";
import TestRequest from "./Pages/TestRequest";
import DailyGoalsBug from "./Pages/DailyGoalsBug";
import DailyGoalsFixed from "./Pages/DailyGoalsFixed";

function App() {
  const [showLogger, setShowLogger] = useState(true);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Router>
      <div className="App min-h-screen bg-gray-100">
        <nav className="p-4 bg-gray-200 flex justify-between items-center">
          <div>
            <Link to="/" className="mr-4 text-blue-600 hover:underline">
              {t("home")}
            </Link>
            <Link to="/profile" className="text-blue-600 hover:underline">
              {t("profile")}
            </Link>
            <Link
              to="/expensive"
              className="text-blue-600 hover:underline ml-4"
            >
              {t("calculation")}
            </Link>
            <Link to="/callback" className="text-blue-600 hover:underline ml-4">
              {t("callbackDemo")}
            </Link>
            <Link to="/form" className="text-blue-600 hover:underline ml-4">
              {t("form")}
            </Link>
            <Link
              to="/test-request"
              className="text-blue-600 hover:underline ml-4"
            >
              {t("axios test")}
            </Link>
            <Link
              to="/daily-goals-bug"
              className="text-blue-600 hover:underline ml-4"
            >
              {t("daily goals (bug)")}
            </Link>
          </div>

          <div className="flex items-center">
            <button
              onClick={() => setShowLogger(!showLogger)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:bg-blue-800 transition mr-4"
            >
              {showLogger ? "Hide Logger" : "Show Logger"}
            </button>

            <div className="inline-block ml-4">
              <button
                onClick={() => handleLanguageChange("en")}
                className="mr-2"
              >
                EN
              </button>
              <button onClick={() => handleLanguageChange("ko")}>KO</button>
            </div>
          </div>
        </nav>
        {showLogger && <ApiLoggerComponent />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/expensive" element={<ExpensiveCalculation />} />
          <Route path="/callback" element={<ParentWithChild />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/test-request" element={<TestRequest />} />
          <Route path="/daily-goals-bug" element={<DailyGoalsBug />} />
          <Route path="/daily-goals" element={<DailyGoalsFixed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
