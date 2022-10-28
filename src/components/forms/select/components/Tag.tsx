import React, { forwardRef } from 'react';
import { classNames, toClassName } from '@/utils';
import styles from '@/components/forms/_form-control.module.scss';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { TagOptionProps } from '@/components/forms/select/types';


const Tag = forwardRef<HTMLDivElement, TagOptionProps>(({children, onDeleted, ...props}, ref) => {
  return (
    <div
      className={classNames(styles[toClassName('form-select-tag')])}
      onClick={onDeleted}
      {...props}
    >
      <div
      >
        {children}
      </div>
      <XMarkIcon
        className={classNames(styles[toClassName('form-select-tag-icon')])}
      />
    </div>
  );
});

export default Tag;
