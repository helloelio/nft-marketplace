import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './style.module.scss';

interface BlockProps {
  size: any;
  background: any;
  style?: any;
}

const Block = ({
  children,
  size,
  background,
  style,
}: PropsWithChildren<BlockProps>) => {
  return (
    <div
      style={style}
      className={classnames(styles.standart, styles[size], styles[background])}
    >
      {children}
    </div>
  );
};

export default Block;
