export type KeyValuePair = { [key: string]: any }

export type VoidType = () => void;

export type PartiallyRequired<T, K extends keyof T> = Partial<Omit<T, K>> & Required<Pick<T, K>>;
