import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";

import "./style/dark.css";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Error from "./pages/error/Error";
import Registration from "./pages/registration/Registration";
import { AuthProvider } from "./auth/auth";
import  {RequireAuth, LoginAuth } from "./auth/RequireAuth";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <AuthProvider>
      <div className={darkMode ? "dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <RequireAuth>
                      <Home />
                  </RequireAuth>
                }
              />
              <Route path="login" element={<LoginAuth><Login /></LoginAuth> } />
              <Route path="register" element={<Registration />} />
              <Route path="users">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":userId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New inputs={userInputs} title="Add New User" />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="products">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":productId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New inputs={productInputs} title="Add New Product" />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
