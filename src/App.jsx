import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";

import { Navbar, Footer, Sidebar } from "./Components";

const App = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
