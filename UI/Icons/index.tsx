import Image from 'next/image';
import React from 'react';
import Plus from './Plus.svg';
import ArrowRihtCircle from './arrow-right.svg';

type IconProps = {
  icon: 'plus | arrowRight';
  margin: any;
};

const icons: any = {
  plus: { icon: Plus, alt: 'plus icon' },
  arrowRight: { icon: ArrowRihtCircle, alt: 'arrow right circle' },
};

const Icons = ({ icon, margin }: IconProps) => {
  return (
    <Image
      style={
        margin === 'left'
          ? { marginLeft: '16px' }
          : margin === 'right'
          ? { marginRight: '16px' }
          : {}
      }
      src={icons[icon].icon}
      alt={icons[icon].alt}
    />
  );
};

export default Icons;
