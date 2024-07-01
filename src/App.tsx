import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/PageHomeAuthentified.tsx";
import PageHomeUnauthentified from "./components/pages/PageHomeUnauthentified.tsx";
import PageLogin from "./components/pages/PageLogin";
import PageRegister from "./components/pages/PageRegister";
import PageUnreachable from "./components/pages/PageUnreachable";

function App() {
  const [isAuthUser] = useState<boolean>(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuthUser ? <Home /> : <PageHomeUnauthentified />}
        />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="*" element={<PageUnreachable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
