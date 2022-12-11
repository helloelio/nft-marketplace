import React, { PropsWithChildren } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface TypographyProps {
  type: any;
  color?: any;
  align?: any;
}

const Typography = ({
  type,
  color,
  align,
  children,
}: PropsWithChildren<TypographyProps>) => {
  if (type === 'h1') {
    return (
      <h1 className={classnames(styles[color], styles[type], styles[align])}>
        {children}
      </h1>
    );
  }
  if (type === 'h2') {
    return (
      <h2 className={classnames(styles[color], styles[type], styles[align])}>
        {children}
      </h2>
    );
  }
  if (type === 'h3') {
    return (
      <h3 className={classnames(styles[color], styles[type], styles[align])}>
        {children}
      </h3>
    );
  }
  if (type === 'h4') {
    return (
      <h4 className={classnames(styles[color], styles[type], styles[align])}>
        {children}
      </h4>
    );
  }
  if (type === 'h5') {
    return (
      <h5 className={classnames(styles[color], styles[type], styles[align])}>
        {children}
      </h5>
    );
  }
  if (type === 'sm') {
    return (
      <p className={classnames(styles[color], styles.sm, styles[align])}>
        {children}
      </p>
    );
  }
  if (type === 'text') {
    return (
      <p className={classnames(styles[color], styles.text, styles[align])}>
        {children}
      </p>
    );
  }
  return null;
};

export default Typography;
