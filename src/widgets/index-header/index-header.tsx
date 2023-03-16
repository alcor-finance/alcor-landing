import {
  BurgerMenu,
  ButtonLink,
  Container,
  CustomLink,
  HeaderLayout,
  MenuItem,
} from "shared/ui";
import Logo from "shared/assets/media/svg/delta_logo.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <HeaderLayout>
      <Container className="flex justify-between items-center">
        <div className="w-44 lg:w-56">
          <Image
            src={Logo}
            alt="Delta"
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative block xl:hidden">
          <BurgerMenu>
            <MenuItem href="https://t.me/delta_dex" className="bg-white bg-opacity-10">
              Community
            </MenuItem>
            <MenuItem href="https://deltadex-protocol.github.io/deltadex.github.io/" className="bg-white bg-opacity-10">
              Docs
            </MenuItem>
            <MenuItem href="https://deltadex.io/app/vanilla-options" className="bg-white bg-opacity-10">
              Launch
            </MenuItem>
          </BurgerMenu>
        </div>
        <nav className="hidden xl:block">
          <ul className="list-none flex items-center gap-16">
            <li>
              <CustomLink href="#community">Community</CustomLink>
            </li>
            <li>
              <CustomLink href="#docs">Docs</CustomLink>
            </li>
            <li>
              <ButtonLink href="https://deltadex.io/app/vanilla-options" color="primary" variant="contained">
                Launch
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </Container>
    </HeaderLayout>
  );
};
