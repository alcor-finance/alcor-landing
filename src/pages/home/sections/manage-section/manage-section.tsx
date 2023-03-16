import { memo } from "react";

import Image from "next/image";
import { ColContainer, Typography } from "shared/ui";
import Manage from "shared/assets/media/img/pos_managing.png";
import cn from "classnames";
import st from "./styles.module.css";

export const ManageSection = memo(() => {
  return (
    <section className={cn("section", st.manage_section, "flex items-center")}>
      <ColContainer>
        <Typography tag="h2" className="h2 text-white text-center">
          Manage your positions
        </Typography>
        <Typography tag="p" className="body1 text-secondary text-center">
          Track and manage the intermediate results of your replications
        </Typography>
        <div className="w-full md:w-10/12">
          <Image src={Manage} alt="Managing" loading="lazy" />
        </div>
      </ColContainer>
    </section>
  );
});
