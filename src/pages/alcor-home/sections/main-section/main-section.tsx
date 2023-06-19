import { memo, useLayoutEffect, useRef, useState } from 'react'
import { ButtonLink, Container, Typography } from 'shared/ui'

import Diamond from 'shared/assets/media/img/diamond_bg.png'
import Image from 'next/image'

import cn from 'classnames'
import st from './styles.module.css'

function MainSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const h1Ref = useRef<HTMLDivElement>(null)
  const h2Ref = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={sectionRef}
      className={cn('section flex items-center', st.welcome_section)}
      style={{
        backgroundImage: `url('${Diamond.src}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px',
      }}
    >
      <Container className="flex items-center gap-16 flex-col relative">
        <div ref={h1Ref} className="">
          <Typography tag="h1" className="h1 text-center text-white">
            Alcor Finance
          </Typography>
        </div>
        <div ref={h2Ref} className="w-2/3 xl:w-1/3">
          <Typography tag="h3" className="h3 text-center text-white">
            On-chain options trading protocol
          </Typography>
        </div>
        <ButtonLink href="https://bit.ly/3n27DKI" color="primary" variant="contained">
          Join waitlist
        </ButtonLink>
      </Container>
    </section>
  )
}

export default MainSection
