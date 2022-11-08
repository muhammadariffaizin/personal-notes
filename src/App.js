import React from "react";

import Navbar from "./components/Navbar";

import HomePage from "./pages/index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddNotePage from "./pages/AddNote";
import DetailNotePage from "./pages/DetailNote";
import ArchivedNotePage from "./pages/ArchivedNote";
import PageNotFound from "./pages/NotFound";

import { Routes, Route } from "react-router-dom";

import AuthProvider from "./providers/AuthProvider";
import LanguageProvider from "./providers/LocaleProvider";
import ColorSchemeProvider from "./providers/ColorSchemeProvider";

const routeItems = [
  {
    key: "home",
    path: "/",
    component: HomePage,
  },
  {
    key: "login",
    path: "/login",
    component: Login,
  },
  {
    key: "register",
    path: "/register",
    component: Register,
  },
  {
    key: "archives",
    path: "/archives",
    component: ArchivedNotePage,
  },
  {
    key: "add-note",
    path: "/note/add",
    component: AddNotePage,
  },
  {
    key: "detail-note",
    path: "/note/:id",
    component: DetailNotePage,
  },
  {
    key: "not-found",
    path: "*",
    component: PageNotFound,
  },
];

const App = () => {
  return (
    <AuthProvider>
      <ColorSchemeProvider>
        <LanguageProvider>
          <div className="App bg-corn-100 dark:bg-gray-900">
            <Navbar />
            <main className="flex flex-col items-center w-full max-w-4xl min-h-screen px-4 pt-24 mx-auto">
              <Routes>
                {routeItems.map((routeItem) => {
                  return (
                    <Route
                      key={routeItem.key}
                      path={routeItem.path}
                      element={<routeItem.component />}
                    />
                  );
                })}
              </Routes>
            </main>
          </div>
        </LanguageProvider>
      </ColorSchemeProvider>
    </AuthProvider>
  );
};

export default App;
