import React, { FocusEvent, forwardRef, HTMLProps, useLayoutEffect, useRef, useState } from 'react';
import { InputElement } from '@/components/forms/types';
import {
  autoUpdate,
  flip,
  offset,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole
} from '@floating-ui/react-dom-interactions';
import { defaultComponents } from '@/components/forms/select/components';
import { SelectComponentsConfig } from '@/components/forms/select/types';

interface SelectProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  options: any[],
}


const data = [
  'نص العنصر',
  'نص الasdعنصر',
  'نص العaنصر',
  'نص العنasdصر',
  'نص العasdنصر',
  'نص العنصasdر',
];


interface SelectProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  options: any[],
  components: SelectComponentsConfig;
}

const Tags = forwardRef<HTMLDivElement, SelectProps>(({children, options, ...rest}, ref) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const listRef = useRef<Array<HTMLElement | null>>([]);

  const {x, y, reference, floating, strategy, context} = useFloating<HTMLInputElement>({
    whileElementsMounted: autoUpdate,
    open,
    onOpenChange: setOpen,
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

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      if (activeIndex != null) {
        listRef.current[activeIndex]?.scrollIntoView({block: 'nearest'});
      }
    });
  }, [activeIndex]);
  const {getReferenceProps, getFloatingProps, getItemProps} = useInteractions(
    [
      useRole(context, {role: 'listbox'}),
      useDismiss(context),
      useListNavigation(context, {
        listRef,
        activeIndex,
        onNavigate: setActiveIndex,
        virtual: true,
        loop: true
      })
    ]
  );
  let items = data;

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);

    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }

  function onFocus(event: React.FocusEvent<HTMLInputElement>) {
    onFocusHandler(event);
    setOpen(true);
  }


  const [tags, setTags] = useState<any[]>([]);
  const controlRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const onFocusHandler = (event: FocusEvent<InputElement>) => {
    event.preventDefault();
    setIsFocused(true);

  };
  const onBlurHandler = (event: FocusEvent<InputElement>) => {
    event.preventDefault();

    if (controlRef.current?.contains(event.relatedTarget)) {
      return;
    }

    setIsFocused(false);
  };
  const getComponents = () => {
    return defaultComponents(rest);
  };
  const {Option, OptionsGroup, Tag} = getComponents();
  return (
    /* <>
       <div
         {...getReferenceProps({
           ref: reference,
           tabIndex: -1,
           className: classNames(
             styles[toClassName('form-control')],
             isFocused ? styles[toClassName('form-control-focused')] : null,
             'relative'
           ),
           style: {minHeight: '48px', padding: '0.75rem 1rem'},
           ...rest
         })}
       >
         <div
           className={classNames(styles[toClassName('form-select-tags')])}
         >
           {tags.map((tag, index) => (
             <Tag
               key={index}
               onDeleted={() => {
                 setTags(tags.filter((_, i) => i !== index));
               }}
             >{tag}</Tag>
           ))}
           <div
             className={classNames(styles[toClassName('form-select-tags-search-wrapper')])}
           >
             <div
               className={classNames(styles[toClassName('form-select-tags-search-copy')])}
             >
             </div>
             <input
               type="text"
               value={inputValue}
               onChange={onChange}
               onFocus={onFocus}
               onBlur={onBlurHandler}
               className={classNames(styles[toClassName('form-select-tags-search')])}
               placeholder="اكتب للبحث"
               aria-autocomplete="list"
               onKeyUp={(e: KeyboardEvent<InputElement>) => {
                 if (e.key === 'Enter') {
                   setTags([...tags, inputValue]);
                 }
               }}
               onKeyDown={(event: KeyboardEvent<InputElement>) => {
                 if (
                   event.key === 'Enter' &&
                   activeIndex != null &&
                   items[activeIndex]
                 ) {
                   setInputValue(inputValue);
                   setActiveIndex(null);
                   setOpen(false);
                 }

                 if (event.key === 'Tab') {
                   setOpen(false);
                 }
               }}
             />
           </div>
         </div>
       </div>
       {open && (
         <OptionsGroup
           {...getFloatingProps({
             ref: floating,
             style: {
               position: strategy,
               left: x ?? 0,
               top: y ?? 0,
               overflowY: 'auto',
               zIndex: 1000
             }
           })}
         >
           {items.map((item, index) => (
             <Option
               option={item}
               {...getItemProps({
                 key: item,
                 ref(node) {
                   listRef.current[index] = node;
                 },
                 onClick() {
                   if (item === inputValue) {
                     setInputValue('');
                     setActiveIndex(null);
                     setOpen(false);
                   } else {
                     setTags([...tags, inputValue]);
                     /!*setOpen(false);*!/
                   }
                 }
               })}
               active={activeIndex === index}
             >
               {item}
             </Option>
           ))}
           {items.length === 0 && (
             <div style={{padding: 4}}>No results</div>
           )}
         </OptionsGroup>
       )}
     </>*/
    <div></div>
  );
});

export default Tags;
