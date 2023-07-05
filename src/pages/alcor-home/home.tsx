import React from "react";

import { Header } from "widgets/index-header";
import MainSection from "./sections/main-section";
import { WhatDoWeOfferSection } from "./sections/what-do-we-offer/what-do-we-offer";
import { JoinOurCommunitySection } from "./sections/join-our-community/join-our-community";

function Home() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <WhatDoWeOfferSection />
        <JoinOurCommunitySection />
      </main>
    </>
  );
}

export default Home;
