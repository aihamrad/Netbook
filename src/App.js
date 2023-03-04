import React from "react";

import Navbar from "./components/Navbar";

import HeaderSection from "./layouts/HeaderSection";
import JoinNetworkSection from "./layouts/JoinNetworkSection";
import AchievementSection from "./layouts/AchievementSection";
import ContactUsSection from "./layouts/ContactUsSection";
import Footer from "./layouts/Footer";

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
      <section>
        <ContactUsSection />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
