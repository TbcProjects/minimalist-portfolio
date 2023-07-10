'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Squash as Hamburger } from 'hamburger-react';

import { css } from '../../../styled-system/css';

import type { MenuItem } from '@/types/general';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();
  const isPath = (itemPath: string) => path === itemPath;

  const menuContent: MenuItem[] = [
    { name: 'HOME', src: '/' },
    { name: 'PORTFOLIO', src: '/portfolio' },
    { name: 'CONTACT ME', src: '/contact' },
  ];

  const menuItems = menuContent.map((item, index) => {
    return (
      <li
        key={index}
        className={css({
          marginBottom: '32px',
          '&:last-child': {
            marginBottom: '0',
          },
          color: isPath(item.src) ? 'cyan' : '',
        })}
      >
        <Link href={item.src}>{item.name}</Link>
      </li>
    );
  });

  return (
    <nav className={css({ display: { md: 'none' } })}>
      <div>
        <Hamburger
          label="Show menu"
          toggled={isOpen}
          toggle={setIsOpen}
          size={22}
        />
      </div>
      {isOpen ? (
        <div
          className={css({
            display: 'flex',
            position: 'absolute',
            zIndex: '99',
            top: '90px',
            right: '37px',
            color: 'white',
            minW: '223px',
            padding: '40px 64px',
            textAlign: 'center',
            layerStyle: 'darkBlueOnWhite',
            textStyle: 'button',
          })}
        >
          <ul>{menuItems}</ul>
        </div>
      ) : null}
    </nav>
  );
}
