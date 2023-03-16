import { memo, useLayoutEffect, useRef, useState } from "react";
import { ButtonLink, Container, Typography } from "shared/ui";
import gsap from "gsap";

import { useVisible } from "shared/hooks/use-visible";
import st from "./styles.module.css";
import cn from "classnames";

const duration = 1.2;

export const WelcomeSection = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const isSectionVisible = useVisible(sectionRef);

  useLayoutEffect(() => {
    // анимация появления, закоменчено т.к. появляется баг
    // if (isSectionVisible) {
    //   gsap.fromTo(
    //     h1Ref.current!,
    //     {
    //       ease: "circ.out",
    //       delay: 0,
    //       duration: duration,
    //       opacity: 0,
    //       scale: 0,
    //       animationFillMode: "forwards",
    //       translateY: "100%",
    //     },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       translateY: "0",
    //     }
    //   );
    //   gsap.fromTo(
    //     h2Ref.current!,
    //     {
    //       ease: "circ.out",
    //       delay: 0,
    //       duration: duration,
    //       opacity: 0,
    //       scaleX: 0,
    //     },
    //     {
    //       opacity: 1,
    //       scaleX: 1,
    //     }
    //   );
    //   gsap.fromTo(
    //     buttonRef.current!,
    //     {
    //       ease: "circ.out",
    //       delay: 0,
    //       duration: duration,
    //       opacity: 0,
    //       translateY: "300%",
    //     },
    //     {
    //       opacity: 1,
    //       translateY: "0",
    //     }
    //   );
    // }
  }, [isSectionVisible]);

  return (
    <section
      ref={sectionRef}
      className={cn("section flex items-center", st.welcome_section)}
    >
      <Container className="flex items-center  flex-col gap-16">
        <div ref={h1Ref}>
          <Typography tag="h1" className="h1 text-center color-title-gradient">
            Use the full power of options
          </Typography>
        </div>
        <div ref={h2Ref}>
          <Typography
            tag="h2"
            variant="h4"
            className="w-80 subtitle text-center color-subtitle-gradient"
          >
            without the need for a counterparty
          </Typography>
        </div>
        <div ref={buttonRef}>
          <ButtonLink href="https://deltadex.io/app/vanilla-options" color="primary" variant="contained">
            Open app
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
});
