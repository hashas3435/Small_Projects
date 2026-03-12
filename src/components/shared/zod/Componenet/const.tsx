import type { ZodFieldMeta, ZodFieldType } from "../type";
import { TextField } from "@mui/material";

export interface FieldComponentProps extends ZodFieldMeta {
  label: string;
}

export const FIELD_COMPONENT: Record<
  ZodFieldType,
  (props: FieldComponentProps) => React.ReactNode
> = {
  string: ({ label, textFieldProps }) => (
    <TextField label={label} {...textFieldProps} />
  ),
  number: ({ label, textFieldProps }) => (
    <TextField label={label} type={"number"} {...textFieldProps} />
  ),
  boolean: () => <div>{"Todo: boolean"}</div>,
  undefined: () => <div>{"Todo: undefined"}</div>,
  object: () => <div>{"Todo: object"}</div>,
  date: () => <div>{"Todo: date"}</div>,
  array: () => <div>{"Todo: array"}</div>,
  enum: () => <div>{"Todo: enum"}</div>,
};
