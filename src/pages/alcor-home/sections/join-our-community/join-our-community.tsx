import { memo } from "react";

import { Button, ButtonLink, RowColContainer, Typography } from "shared/ui";
import Image from "next/image";
import { useRef } from "react";

import Diamond from "shared/assets/media/img/diamond_bg.png";

export const JoinOurCommunitySection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      className="section flex items-center"
      ref={sectionRef}
      style={{
        backgroundImage: `url('${Diamond.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        // opacity
      }}
    >
      <RowColContainer>
        <div className="lg:w-5/12 flex  flex-col gap-8">
          <Typography
            tag="h2"
            className="h2 text-white text-center lg:text-start"
          >
            Join our community
          </Typography>
          <Typography
            tag="p"
            className="body1 text-white text-center lg:text-start opacity-60 font-normal max-w-[400px] mx-auto lg:mx-0"
          >
            Trade options conveniently and securely right on the blockchain.
          </Typography>
        </div>
        <div className="lg:w-5/12 flex flex-col gap-5 ">
          <ButtonLink
            href="https://twitter.com/alcor_finance"
            color="primary"
            // variant="contained"
            className="max-w-[400px] mx-auto lg:mx-0 border-2 border-[#3E3E65] hover:border-[#3E3E65] hover:bg-[#3E3E65] hover:text-white"
          >
            Twitter
          </ButtonLink>{" "}
          <ButtonLink
            href="https://t.me/alcor_finance"
            color="primary"
            // variant="contained"
            className="max-w-[400px] mx-auto lg:mx-0 border-2 border-[#3E3E65] hover:border-[#3E3E65] hover:bg-[#3E3E65] hover:text-white"
          >
            Telegram
          </ButtonLink>{" "}
          <ButtonLink
            href="https://medium.com/@alcor.finance.defi"
            color="primary"
            // variant="contained"
            className="max-w-[400px] mx-auto lg:mx-0 border-2 border-[#3E3E65] hover:border-[#3E3E65] hover:bg-[#3E3E65] hover:text-white"
          >
            Medium
          </ButtonLink>{" "}
        </div>
      </RowColContainer>
    </section>
  );
});
