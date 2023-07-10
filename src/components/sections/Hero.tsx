import Image from 'next/image';

import { css } from '../../../styled-system/css';
import { container } from '../../../styled-system/patterns';

interface HeroProps {
  data: any;
}

export default function Hero({ data }: HeroProps) {
  return (
    <div
      className={container({
        maxW: 'breakpoint-lg',
        px: { base: '32px', md: '38px', lg: '0' },
      })}
    >
      <div className={css({ pos: 'relative', minH: '552px', width: '100%' })}>
        <Image
          src={'/images/jk-placeholder-image.jpeg'}
          alt="placeholder image"
          objectFit="cover"
          fill={true}
        />
      </div>
    </div>
  );
}
