import { ComponentType, HTMLProps, ReactNode } from 'react';
import { components } from '@/components/forms/select/components';
import { KeyValuePair, PartiallyRequired } from '@/components/types';

export type Option = {
  label: string;
  value: string;
  disabled: boolean;
  selected: boolean;
  [key: string]: any;
}
export type OptionType = PartiallyRequired<Option, 'value' | 'label'>

export type OptionGroup = {
  label: string;
  options: Array<OptionType>
}
export type OptionGroupType = Required<OptionGroup>

export type AsyncOptionsFunction = (query: string) => Array<OptionType>;

export type OptionsType =
  Array<string>
  | Array<OptionType>
  | Array<OptionGroupType>
  | AsyncOptionsFunction
  | KeyValuePair;

export interface SelectComponents {
  Option: ComponentType<OptionProps>;
}

export type SelectComponentsConfig = Partial<SelectComponents>;

export type SelectComponentsGeneric = typeof components;

export interface componentsProps {
  components: SelectComponentsConfig;
}

export interface TagOptionProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  children?: ReactNode;
  onDeleted?: () => void;
}

export interface OptionProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  children: ReactNode;
  option: OptionType;
  active?: boolean;
  selected?: boolean;
  checkIcon?: boolean;
  index?: number;
}

export interface OptionGroupProps extends HTMLProps<HTMLDivElement> {
  label?: string,
  children: ReactNode;
}
