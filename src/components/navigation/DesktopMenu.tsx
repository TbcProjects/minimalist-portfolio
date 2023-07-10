'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { css } from '../../../styled-system/css';
import { hstack } from '../../../styled-system/patterns';

import type { MenuItem } from '@/types/general';

interface DeskTopMenuProps {}

export default function DesktopMenu({}: DeskTopMenuProps) {
  const path = usePathname();
  const isPath = (itemPath: string) => path === itemPath;

  const menuContent: MenuItem[] = [
    { name: 'HOME', src: '/' },
    { name: 'PORTFOLIO', src: '/portfolio' },
    { name: 'CONTACT', src: '/contact' },
  ];

  const menuItems = menuContent.map((item, index) => {
    return (
      <li
        key={index}
        className={css({
          textStyle: 'button',
          color: isPath(item.src) ? 'cyan' : '',
          _hover: {
            opacity: isPath(item.src) ? '1' : '.5',
          },
        })}
      >
        <Link href={item.src}>{item.name}</Link>
      </li>
    );
  });

  return (
    <nav className={css({ display: { base: 'none', md: 'block' } })}>
      <ul className={hstack({ gap: '42px' })}>{menuItems}</ul>
    </nav>
  );
}
