import React from "react";

import Navbar from "./components/Navbar";
import HeaderSection from "./layouts/HeaderSection";
import JoinNetworkSection from "./layouts/JoinNetworkSection";

const App = () => {
  return (
    <div>
      <section className="background-header">
        <Navbar />
        <HeaderSection />
      </section>
      <section>
        <JoinNetworkSection />
      </section>
    </div>
  );
};

export default App;
