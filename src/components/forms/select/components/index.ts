import { componentsProps, SelectComponentsGeneric } from '@/components/forms/select/types';
import Option from './Option';
import OptionsGroup from './OptionsGroup';
import Tag from './Tag';

export const components = {
  Option: Option,
  OptionsGroup: OptionsGroup,
  Tag: Tag,
};

export const defaultComponents = (props: componentsProps): SelectComponentsGeneric =>
  ({
    ...components,
    ...props.components,
  } as SelectComponentsGeneric);

export { Option, OptionsGroup, Tag };
