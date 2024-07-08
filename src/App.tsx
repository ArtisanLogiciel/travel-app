import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AccountPage from "./pages/AccountPage.tsx";
import ForbiddenPage from "./pages/ForbiddenPage.tsx";
import Home from "./pages/HomeAuthentifiedPage.tsx";
import HomeUnauthentifiedPage from "./pages/HomeUnauthentifiedPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegisterPage from "./pages/RegisterPage.tsx";
import UnreachablePage from "./pages/UnreachablePage.tsx";

function App() {
  const [isAuthUser] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthUser ? <Home /> : <HomeUnauthentifiedPage />}
        />
        <Route
          path="/my-account"
          element={isAuthUser ? <AccountPage /> : <ForbiddenPage />}
        />
        <Route
          path="/login"
          element={isAuthUser ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isAuthUser ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route path="*" element={<UnreachablePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
