import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageAccount from "./pages/PageAccount.tsx";
import PageForbidden from "./pages/PageForbidden.tsx";
import Home from "./pages/PageHomeAuthentified.tsx";
import PageHomeUnauthentified from "./pages/PageHomeUnauthentified.tsx";
import PageLogin from "./pages/PageLogin.tsx";
import PageRegister from "./pages/PageRegister.tsx";
import PageUnreachable from "./pages/PageUnreachable.tsx";

function App() {
  const [isAuthUser] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthUser ? <Home /> : <PageHomeUnauthentified />}
        />
        <Route
          path="/my-account"
          element={isAuthUser ? <PageAccount /> : <PageForbidden />}
        />
        <Route
          path="/login"
          element={isAuthUser ? <Navigate to="/" /> : <PageLogin />}
        />
        <Route
          path="/register"
          element={isAuthUser ? <Navigate to="/" /> : <PageRegister />}
        />
        <Route path="*" element={<PageUnreachable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
