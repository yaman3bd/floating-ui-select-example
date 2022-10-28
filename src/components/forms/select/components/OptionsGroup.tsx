import React, { FC } from 'react';
import styles from '@/components/forms/_form-control.module.scss';
import { classNames, toClassName } from '@/utils';
import { OptionGroupProps } from '@/components/forms/select/types';

const OptionsGroup: FC<OptionGroupProps> = ({children, label, ...props}) => {
  return (
    <div
      className={classNames(styles[toClassName('form-select-options-group')])}
      {...props}
    >
      {label &&
          <div
              className={classNames(
                styles[toClassName('form-select-option')],
                'text-gray-700'
              )}
              children={label}/>}
      {children}
    </div>);
};

export default OptionsGroup;
