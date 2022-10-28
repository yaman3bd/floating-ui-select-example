import React, { ChangeEvent, FC, FocusEvent, HTMLProps, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  autoUpdate,
  flip,
  FloatingOverlay,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole
} from '@floating-ui/react-dom-interactions';
import { SelectContext } from '@/components/forms/select/SelectContext';
import { defaultComponents } from '@/components/forms/select/components';
import { Option, OptionsType, OptionType, SelectComponentsConfig } from '@/components/forms/select/types';

import { classNames, isArrayOfType, toClassName } from '@/utils';


import styles from '@/components/forms/_form-control.module.scss';
import { KeyValuePair } from '@/components/types';

interface SelectProps extends Omit<HTMLProps<HTMLDivElement>, 'onChange'> {
  options: OptionsType,
  components?: SelectComponentsConfig;
  onChange: (option: OptionType | Array<OptionType>) => void;
  multiple?: boolean;
}

const Select: FC<SelectProps> = (
  {
    children,
    options: providedOptions,
    onChange,
    multiple = false,
    ...props
  }) => {

  const [options, setOptions] = useState<Array<OptionType>>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const listRef = useRef<Array<HTMLElement | null>>([]);

  const [open, setOpen] = useState<boolean>(false);
  const [pointer, setPointer] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

  const [selectedOptions, setSelectedOptions] = useState<Array<OptionType>>([]);


  const {x, y, reference, floating, strategy, context} = useFloating({
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({padding: 8}),
      size({
        apply({rects, availableHeight, elements}) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`
          });
        },
        padding: 8
      })
    ]
  });

  useEffect(() => {
    const handledOptions = (): Array<OptionType> => {

      if (isArrayOfType(providedOptions, 'string')) {
        return (providedOptions as Array<string>).map(option => ({label: option, value: option}));
      }

      if (isArrayOfType(providedOptions, 'object')) {
        return providedOptions as Array<OptionType>;
      }

      if (typeof providedOptions === 'object') {
        return Object.keys(providedOptions).map((key: any) => ({
          label: (providedOptions as KeyValuePair)[key],
          value: key
        }));
      }

      if (typeof providedOptions === 'function') {
        return providedOptions(inputValue);
      }

      return [];
    };
    setOptions(handledOptions());
  }, []);
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions([
    useRole(context, {role: 'listbox'}),
    useDismiss(context),
    useListNavigation(context, {
      listRef,
      activeIndex,
      selectedIndex,
      onNavigate: setActiveIndex,
      virtual: true,
      loop: true
    })
  ]);


  useLayoutEffect(() => {
    if (open && activeIndex != null && !pointer) {
      requestAnimationFrame(() => {
        listRef.current[activeIndex]?.scrollIntoView({block: 'nearest'});
      });
    }
  }, [open, activeIndex, pointer]);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  };

  const onFocus = (event: FocusEvent<HTMLInputElement>) => {
    setOpen(true);
  };

  const {Option, OptionsGroup} = defaultComponents(props);
  let optionIndex = 0;
  const Options = (options: Array<OptionType>) =>
    (options.map((option: OptionType, index: number) => (
      <Option
        key={`${option.value}-${index}`}
        index={1 + optionIndex++}
        option={option}
      >
        {option.label}
      </Option>
    )));


  const RenderOptions = (): any => {
    const isGropedOptions = isArrayOfType(options, 'object') && isArrayOfType(options[0].options, 'object') && options[0].hasOwnProperty('options');

    return isGropedOptions ?
      <>
        {options.map(({label, options}: OptionType, i: number) => {
          return (
            <OptionsGroup
              label={label}
              key={i}
            >
              {Options(options)}
            </OptionsGroup>
          );
        })}
      </>
      : <>
        <OptionsGroup>
          {Options(options)}
        </OptionsGroup>
      </>;
  };

  return (
    <>
      <SelectContext.Provider
        value={{
          multiple,
          selectedIndex,
          setSelectedIndex,
          setSelectedOption,
          selectedOptions,
          setSelectedOptions,
          setInputValue,
          activeIndex,
          setActiveIndex,
          listRef,
          setOpen,
          onChange,
          getItemProps,
        }}
      >
        <input
          {...getReferenceProps({
            ref: reference,
            onChange: onChangeInput,
            onFocus,
            value: inputValue,
            placeholder: 'Enter fruit',
            'aria-autocomplete': 'list',
            onKeyDown(event) {
              if (
                event.key === 'Enter' &&
                activeIndex != null
              ) {
                if (options[activeIndex - 1].value === inputValue) {
                  setInputValue('');
                  setActiveIndex(null);
                  setOpen(false);
                } else {
                  setInputValue(options[activeIndex - 1].label);
                  setActiveIndex(null);
                  setOpen(false);
                }
              }

              if (event.key === 'Tab') {
                setOpen(false);
              }
            },
            ...props
          })}
          className={classNames(styles[toClassName('form-select')])}
        />
        {open && (
          <FloatingOverlay lockScroll>
            <div
              {...getFloatingProps({
                ref: floating,
                style: {
                  position: strategy,
                  left: x ?? 0,
                  top: y ?? 0,
                  overflowY: 'auto',
                },
                onPointerMove() {
                  setPointer(true);
                },
                onKeyDown(event) {
                  setPointer(false);

                  if (event.key === 'Tab') {
                    setOpen(false);
                  }
                },
                className: classNames(styles[toClassName('form-select-options-container')]),
              })}
            >
              {<RenderOptions/>}
            </div>
          </FloatingOverlay>
        )}
      </SelectContext.Provider>
    </>
  );
};

export default Select;
