import { ReactNode } from 'react';
import Link from 'next/link';
import { css } from '../../../../styled-system/css';

import ArrowDownIcon from '@/components/icons/ArrowDownIcon';

import { button, ButtonVariants } from '@/lib/theme/components/button';

type ButtonLinkProps = ButtonVariants & {
  children: ReactNode;
  href: string;
};

export default function ButtonLink({
  variant,
  children,
  href,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${button({ variant: variant })} ${css({
        display: 'flex',
      })}`}
    >
      <span
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          w: '48px',
          h: '100%',
        })}
      >
        <ArrowDownIcon />
      </span>
      <div
        className={css({
          display: 'flex',
          flex: '1 1 auto',
          h: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        })}
      >
        {children}
      </div>
    </Link>
  );
}
