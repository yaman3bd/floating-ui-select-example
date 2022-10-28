import { Option, OptionsGroup, Select, Tag, Tags } from '@/components/forms/select';


const Form = () => '';

Form.Select = Select;
Object.assign(Form.Select, {Option});
Object.assign(Form.Select, {OptionsGroup});
Object.assign(Form.Select, {Tag});
Object.assign(Form.Select, {Tags});


export default Form;
