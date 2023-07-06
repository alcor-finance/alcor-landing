import { memo } from "react";

import { Button, ButtonLink, RowColContainer, Typography } from "shared/ui";
import Image from "next/image";
import { useRef } from "react";

export const WhatDoWeOfferSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      className="section flex items-center"
      ref={sectionRef}
      // style={{
      //   backgroundImage: `url('${Diamond.src}')`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "500px",
      //   // opacity
      // }}
    >
      <RowColContainer>
        <div className="lg:w-5/12 flex  flex-col gap-8">
          <Typography
            tag="h2"
            className="h2 text-white text-center lg:text-start"
          >
            What do we offer?
          </Typography>
          <div className="flex flex-col gap-5">
            <Typography
              tag="h4"
              className=" text-white text-center lg:text-start font-normal mx-auto lg:mx-0 "
            >
              Decentralized option trading
            </Typography>
            <Typography
              tag="p"
              className="body1 text-white text-center lg:text-start opacity-60 font-normal mx-auto lg:mx-0 max-w-[500px]"
            >
              All logic is implemented on smart contracts - minimal
              centralization.
            </Typography>
          </div>
          <div className="flex flex-col gap-5">
            <Typography
              tag="h4"
              className=" text-white text-center lg:text-start font-normal mx-auto lg:mx-0 "
            >
              Zero transaction costs for creating orders
            </Typography>
            <Typography
              tag="p"
              className="body1 text-white text-center lg:text-start opacity-60 font-normal mx-auto lg:mx-0 max-w-[500px]"
            >
              Sign your limit orders and pay zero transaction fees for execution
              when matched with a market order.
            </Typography>
          </div>
          <div className="flex flex-col gap-5">
            <Typography
              tag="h4"
              className=" text-white text-center lg:text-start font-normal mx-auto lg:mx-0 "
            >
              Fully Collateralized
            </Typography>
            <Typography
              tag="p"
              className="body1 text-white text-center lg:text-start opacity-60 font-normal mx-auto lg:mx-0 max-w-[500px]"
            >
              All options are fully collateralized - ensuring that you receive
              your payout without any doubts.
            </Typography>
          </div>
        </div>
        <div className="lg:w-5/12 items-center justify-center my-auto">
          <div className="flex flex-col gap-5 mx-auto">
            <Typography
              tag="p"
              className="body1 text-white text-center lg:text-start font-normal"
            >
              <span className="opacity-60"> Testnet: </span>LIVE
            </Typography>
            <ButtonLink
              href="https://app.alcor.finance/"
              color="primary"
              variant="contained"
              className="max-w-[300px] mx-auto lg:mx-0"
            >
              Open app
            </ButtonLink>{" "}
          </div>
        </div>
      </RowColContainer>
    </section>
  );
});
