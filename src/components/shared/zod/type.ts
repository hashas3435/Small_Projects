import type { TextFieldProps } from "@mui/material";
import type { GlobalMeta } from "zod";

export const ZOD_FIELD_TYPES = [
  "string",
  "number",
  "boolean",
  "date",
  "array",
  "object",
  "enum",
  "undefined",
] as const;

export type ZodFieldType = (typeof ZOD_FIELD_TYPES)[number];

export interface ZodFieldMeta extends GlobalMeta {
  textFieldProps?: TextFieldProps;
}
