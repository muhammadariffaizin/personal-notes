import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/index";
import AddNotePage from "./pages/AddNote";
import DetailNotePage from "./pages/DetailNote";
import ArchiveNotePage from "./pages/ArchiveNote";
import PageNotFound from "./pages/NotFound";

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App bg-corn-100">
      <Navbar />
      <main className="flex flex-col items-center w-full max-w-4xl min-h-screen px-4 pt-24 mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<ArchiveNotePage />} />
          <Route path="/note/add" element={<AddNotePage />} />
          <Route path="/note/:id" element={<DetailNotePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
