import React from "react";

import Navbar from "./components/Navbar";
import ShareLinks from "./components/ShareLinks";

import HeaderSection from "./layouts/HeaderSection";
import JoinNetworkSection from "./layouts/JoinNetworkSection";
import AchievementSection from "./layouts/AchievementSection";
import ContactUsSection from "./layouts/ContactUsSection";
import Footer from "./layouts/Footer";

import { SearchProvider } from "./store/SearchContext";
import { ContentProvider } from "./store/ContentContext";

const App = () => {
  return (
    <ContentProvider>
      <SearchProvider>
        <ShareLinks />
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
      </SearchProvider>
    </ContentProvider>
  );
};

export default App;
