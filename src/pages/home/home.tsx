import { ButtonLink, Container, Plate, Typography } from "shared/ui";
import { Header } from "widgets/index-header";
import { AdvantagesSection } from "./sections/advantages-section/advantages-section";
import { HedgeSection } from "./sections/hedge-section/hedge-section";
import { ManageSection } from "./sections/manage-section/manage-section";
import { ReplicateSection } from "./sections/replicate-section/replicate-section";
import { SponsorsSection } from "./sections/sponsors-section/sponsors-section";
import { WelcomeSection } from "./sections/welcome-section/welcome-section";

import Triangle from "shared/assets/media/img/triangle.png";
import Image from "next/image";

import st from "./styles.module.css";
import cn from "classnames";
import Head from "next/head";

import Diamond from 'shared/assets/media/img/diamond_bg.png';

export const Home = () => {
  return (
    <>
      <Header />
      <main>
      <Image src={Diamond} alt='Diamond'/>

        <WelcomeSection />
        {/* <div className="light-wrap relative"></div> */}
        <SponsorsSection />
        <ReplicateSection />
        <ManageSection />
        <AdvantagesSection />
        <HedgeSection />
      </main>
      <footer className="py-12 flex items-center">
        <Container className="flex items-center justify-center">
          <Plate
            className={cn(
              st.join_community_card,
              "px-4 py-12 flex items-center gap-8 w-full flex-col md:px-16 md:py-16 md:flex-row md:w-10/12 "
            )}
          >
            <div className="w-full flex flex-col gap-8 md:w-2/4">
              <Typography
                tag="h2"
                className="color-footer-title-gradient text-center md:text-start"
              >
                Join our community
              </Typography>
              <div className="flex flex-col gap-4 md:flex-row">
                <ButtonLink href="https://t.me/delta_dex" variant="contained" color="plate">
                  Telegram
                </ButtonLink>
                <ButtonLink href="https://twitter.com/deltadexlabs" variant="contained" color="plate">
                  Twitter
                </ButtonLink>
              </div>
            </div>
            <div className="w-3/4 md:w-2/4">
              <Image src={Triangle} alt="DeltaDex" />
            </div>
          </Plate>
        </Container>
      </footer>
    </>
  );
};
