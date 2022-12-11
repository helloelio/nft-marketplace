import React from 'react';
import style from './style.module.scss';
import Icons from '../Icons/index';

interface ButtonProps {
  children: any;
  type?: any;
  iconPosition?: any;
  icon?: any;
  onClick: (...params: any) => void;
}

const Button = ({
  children,
  type,
  onClick,
  icon,
  iconPosition,
}: ButtonProps) => {
  return (
    <button onClick={(...params) => onClick(...params)} className={style[type]}>
      {iconPosition === 'left' ? <Icons icon={icon} margin='right' /> : null}
      {children}
      {iconPosition === 'right' ? <Icons icon={icon} margin='left' /> : null}
    </button>
  );
};

export default Button;
