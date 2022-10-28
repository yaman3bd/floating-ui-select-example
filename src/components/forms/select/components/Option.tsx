import React, { FC, useContext } from 'react';
import { useId } from '@floating-ui/react-dom-interactions';
import { CheckIcon } from '@heroicons/react/24/outline';
import { classNames, toClassName } from '@/utils';
import { OptionProps } from '@/components/forms/select/types';
import styles from '@/components/forms/_form-control.module.scss';
import { SelectContext } from '@/components/forms/select/SelectContext';


const Option: FC<OptionProps> = (
  {
    active,
    selected,
    index,
    checkIcon,
    children,
    option,
    ...props
  }) => {
  const id = useId();

  const {
    selectedIndex,
    setSelectedIndex,
    setInputValue,
    listRef,
    setOpen,
    onChange,
    activeIndex,
    setActiveIndex,
    setSelectedOption,
    setSelectedOptions,
    multiple,
    selectedOptions,
    getItemProps,
  } = useContext(SelectContext);

  function handleSelect() {
    setSelectedIndex(index ?? 0);
    setInputValue(option.label);
    setSelectedOption(option);
    const options = multiple ? [...selectedOptions, option] : option;
    setSelectedOptions([...selectedOptions, option]);
    onChange && onChange(options);
    setOpen(false);
    setActiveIndex(null);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSelect();
    }

    if (event.key === ' ') {
      event.preventDefault();
    }
  }

  function handleKeyUp(event: React.KeyboardEvent) {
    if (event.key === ' ') {
      handleSelect();
    }
  }

  const isSelected = multiple ? selectedOptions.includes(option) : selectedIndex === index;
  return (
    <div
      role="option"
      id={id}
      className={classNames(
        'text-black',
        styles[toClassName('form-select-option')],
        isSelected ? styles[toClassName('form-select-option-selected')] : '',
        activeIndex === index ? styles[toClassName('form-select-option-active')] : '',
      )}
      {...getItemProps({
        ref: (node) => (listRef.current[index ?? 0] = node),
        tabIndex: activeIndex === index ? 0 : -1,
        'aria-selected': activeIndex === index,
        onClick: handleSelect,
        onKeyDown: handleKeyDown,
        onKeyUp: handleKeyUp
      })}
      {...props}
    >
      {isSelected &&
          <CheckIcon
              className={classNames(styles[toClassName('form-select-option-icon')], 'w-5 h-5')}
          />}
      {children}
    </div>
  );
};

export default Option;
