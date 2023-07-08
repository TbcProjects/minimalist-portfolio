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
        display: 'inline-flex',
        h: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center',
      })}`}
    >
      {variant === 'primary' ? (
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
      ) : null}
      <div
        className={css({
          flex: '1 1 auto',
          padding: '0 38px',
        })}
      >
        {children}
      </div>
    </Link>
  );
}
