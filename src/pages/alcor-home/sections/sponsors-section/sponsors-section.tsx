import { memo } from "react";

import { Button, ButtonLink, RowColContainer, Typography } from "shared/ui";
import Image from "next/image";
import { useRef } from "react";

import Diamond from "shared/assets/media/img/diamond_bg.png";

export const SponsorsSection = memo(() => {
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
            Alcor Finance
          </Typography>
          <Typography
            tag="p"
            className="body1 text-white text-center lg:text-start opacity-60 font-normal max-w-[400px] mx-auto lg:mx-0"
          >
            Trade options conveniently and securely right on the blockchain.
          </Typography>
          <ButtonLink
            href="https://app.alcor.finance/"
            color="primary"
            variant="contained"
            className="max-w-[400px] mx-auto lg:mx-0"
          >
            Open app
          </ButtonLink>{" "}
        </div>
        <div className="lg:w-5/12 flex items-center justify-center my-auto">
          <Typography
            tag="p"
            className="body1 text-white text-center lg:text-start font-normal"
          >
            <span className="opacity-60"> Testnet: </span>ALIVE
          </Typography>
          {/* <Image
            src={OneInch}
            alt="OneInch"
            className="object-contain w-3/5 -translate-x-[5%]"
            loading="lazy"
          /> */}
        </div>
      </RowColContainer>
    </section>
  );
});
