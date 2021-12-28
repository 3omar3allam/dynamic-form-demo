export interface FieldBase<T> {
  controlType: string;
  key: string;
  label: string;
  required: boolean;
  type: string;
  options: { key: string, value: string }[];
  value: T | undefined;
  width: string;
}
