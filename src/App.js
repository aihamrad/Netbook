import React from "react";

import Navbar from "./components/Navbar";

import HeaderSection from "./layouts/HeaderSection";
import JoinNetworkSection from "./layouts/JoinNetworkSection";
import AchievementSection from "./layouts/AchievementSection";

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
      <section>
        <AchievementSection />
      </section>
    </div>
  );
};

export default App;
