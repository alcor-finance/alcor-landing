import { Container, Plate, Typography } from "shared/ui";
import st from "./styles.module.css";
import cn from "classnames";
import { memo } from "react";

export const AdvantagesSection = memo(() => {
  return (
    <section className="section advantages-section flex items-center">
      <Container className="flex justify-center">
        <div className={cn(st.advantages_grid)}>
          <div className={cn(st.advantages_grid_item)}>
            <Plate className={cn(st.advantage_card)}>
              <Typography tag="h3" className="h3 text-white">
                Hedge against impermament loss
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                Liquidity providers may hedge against IL by replicating put
                option
              </Typography>
            </Plate>
          </div>
          <div className={cn(st.advantages_grid_item)}>
            <Plate className={cn(st.advantage_card)}>
              <Typography tag="h3" className="h3 text-white">
                Earn higher yield
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                DeltaDex users may run a wide variety of strategies as well as
                options market-making and hedging IL
              </Typography>
            </Plate>
          </div>
          <div className={cn(st.advantages_grid_item)}>
            <Plate className={cn(st.advantage_card)}>
              <Typography tag="h3" className="h3 text-white">
                Fully decentralized
              </Typography>
              <Typography tag="p" className="body1 text-secondary">
                Using mathematical formulas, DeltaDex smart contract calculates
                the amount of asset to buy (or sell) and autonomously executes
                the trade
              </Typography>
            </Plate>
          </div>
        </div>
      </Container>
    </section>
  );
});
