import {
  BurgerMenu,
  ButtonLink,
  Container,
  CustomLink,
  HeaderLayout,
  MenuItem,
} from 'shared/ui'
import Logo from 'shared/assets/media/img/alcor-logo.png'
import Image from 'next/image'

import Telegram from 'shared/assets/media/svg/telegram.svg'
import Twitter from 'shared/assets/media/svg/twitter.svg'
import Medium from 'shared/assets/media/svg/medium.svg'
import Link from 'next/link'

export const Header = () => {
  return (
    <HeaderLayout>
      <Container className="flex justify-between items-center">
        <div className="w-44 lg:w-56">
          {/* <Image
            src={Logo}
            alt="Alcor"
            loading="lazy"
            className="h-12 w-12 object-contain"
          /> */}
        </div>
        <div className="relative block xl:hidden">
          <BurgerMenu>
            <MenuItem
              href="https://twitter.com/alcor_finance"
              className="bg-white bg-opacity-10 flex gap-6"
            >
              <Image
                src={Twitter}
                alt="Twitter"
                loading="lazy"
                className="h-8 w-8 object-contain"
              />
              <span className="my-auto">Twitter</span>
            </MenuItem>
            <MenuItem
              href="https://t.me/alcor_finance"
              className="bg-white bg-opacity-10 flex gap-6"
            >
              <Image
                src={Telegram}
                alt="Telegram"
                loading="lazy"
                className="h-8 w-8 object-contain fill-blue hover:scale-110"
              />
              <span className="my-auto">Telegram</span>
            </MenuItem>
            <MenuItem
              href="https://medium.com/@alcor.finance.defi"
              className="bg-white bg-opacity-10 flex gap-6"
            >
              <Image
                src={Medium}
                alt="Medium"
                loading="lazy"
                className="h-8 w-8 object-contain fill-blue hover:scale-110"
              />
              <span className="my-auto">Medium</span>
            </MenuItem>
          </BurgerMenu>
        </div>
        <nav className="hidden xl:block">
          <ul className="list-none flex items-center gap-16">
            <li>
              <Link href={'https://twitter.com/alcor_finance'}>
                <Image
                  src={Twitter}
                  alt="Twitter"
                  loading="lazy"
                  className="h-10 w-10 object-contain hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <Link href={'https://t.me/alcor_finance'}>
                <Image
                  src={Telegram}
                  alt="Telegram"
                  loading="lazy"
                  className="h-10 w-10 object-contain fill-blue hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <Link href={'https://medium.com/@alcor.finance.defi'}>
                <Image
                  src={Medium}
                  alt="Medium"
                  loading="lazy"
                  className="h-10 w-10 object-contain hover:scale-110"
                />
              </Link>
            </li>
            <li>
              <ButtonLink href="" color="primary" variant="contained">
                Join whitelist
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderLayout>
  )
}
