import { createContext, HTMLProps, MutableRefObject } from 'react';
import { OptionType } from '@/components/forms/select/types';


interface SelectContextValue {
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
  setInputValue: (value: string) => void;
  setSelectedOption: (option: OptionType | null) => void;
  selectedOptions: Array<OptionType>;
  setSelectedOptions: (option: Array<OptionType>) => void;
  listRef: MutableRefObject<Array<HTMLElement | null>>;
  setOpen: (open: boolean) => void;
  multiple: boolean;
  onChange: (option: OptionType | Array<OptionType>) => void;
  getItemProps: (userProps?: HTMLProps<HTMLElement>) => any;
}

export const SelectContext = createContext({} as SelectContextValue);
