import React from "react";

import { Header } from "widgets/index-header";
import MainSection from "./sections/main-section";
import { SponsorsSection } from "./sections/sponsors-section/sponsors-section";
import { ReplicateSection } from "./sections/replicate-section/replicate-section";

function Home() {
  return (
    <>
      <Header />
      <main>
        {/* <MainSection /> */}
        <SponsorsSection />
        <ReplicateSection />
      </main>
    </>
  );
}

export default Home;
