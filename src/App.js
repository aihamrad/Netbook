import React from "react";

import Navbar from "./components/Navbar";
import HeaderSection from "./layouts/HeaderSection";

const App = () => {
  return (
    <div>
      <section className="background-header">
        <Navbar />
        <HeaderSection />
      </section>
    </div>
  );
};

export default App;
