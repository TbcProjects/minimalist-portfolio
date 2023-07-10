import Link from 'next/link';

import SiteLogo from '../icons/SiteLogo';
import DesktopMenu from '../navigation/DesktopMenu';
import MobileMenu from '../navigation/MobileMenu';

import { css } from '../../../styled-system/css';

import { container, hstack } from '../../../styled-system/patterns';

export default function SiteHeader() {
  return (
    <header
      className={container({
        position: 'relative',
        maxW: 'breakpoint-lg',
        px: { base: '32px', md: '38px', lg: '0' },
      })}
    >
      <div className={hstack({ justify: 'space-between' })}>
        <Link href="/">
          <div className={css({ py: { base: '32px', md: '61px' } })}>
            <SiteLogo />
          </div>
        </Link>

        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
  );
}
