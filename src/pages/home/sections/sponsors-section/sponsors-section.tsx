import { memo } from "react";

import { RowColContainer, Typography } from "shared/ui";
import OneInch from "shared/assets/media/svg/1inch_network.svg";
import Image from "next/image";

export const SponsorsSection = memo(() => {
  return (
    <section className="section sponsors-section flex items-center">
      <RowColContainer>
        <div className="lg:w-5/12 flex  flex-col gap-4">
          <Typography
            tag="h2"
            className="h2 text-white text-center lg:text-start"
          >
            Sponsored by
          </Typography>
          <Typography
            tag="p"
            className="body1 text-secondary text-center lg:text-start"
          >
            DeltaDex is a 1inch hackathon winner and grant recipient
          </Typography>
        </div>
        <div className="lg:w-5/12 flex items-center justify-center">
          <Image
            src={OneInch}
            alt="OneInch"
            className="object-contain w-3/5 -translate-x-[5%]"
            loading="lazy"
          />
        </div>
      </RowColContainer>
    </section>
  );
});
