import { memo } from "react";

import Image from "next/image";
import { ButtonLink, RowColContainer, Typography } from "shared/ui";
import LineChart from "shared/assets/media/svg/line_chart.svg";

export const ReplicateSection = memo(() => {
  return (
    <section className="section replicate-section flex items-center">
      <RowColContainer>
        <div className="text-wrap flex flex-col items-center lg:w-2/4 lg:items-start gap-9">
          <Typography
            tag="h2"
            className="h2 text-white text-center lg:text-start"
          >
            Replicate any option contract
          </Typography>
          <Typography
            tag="p"
            className="body1 text-secondary text-center lg:text-start"
          >
            Run the strategy that at the expiry gives the PnL as close as
            possible to payoff of a chosen option
          </Typography>
          <ButtonLink href="https://deltadex.io/app/vanilla-options" color="primary" variant="contained">
            Open app
          </ButtonLink>
        </div>
        <div className="graphique-wrap lg:w-2/4 translate-x-[5%]">
          <Image
            src={LineChart}
            alt="Chart"
            loading="lazy"
            className="object-contain"
          />
        </div>
      </RowColContainer>
    </section>
  );
});
