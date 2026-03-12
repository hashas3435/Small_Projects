import type { TextFieldProps } from "@mui/material";
import type z from "zod";
import {
  ZOD_FIELD_TYPES,
  type ZodFieldType,
  type ZodFieldMeta,
} from "./zod/type";
import { isArray } from "lodash";

export const isTextFieldProps = (
  textFieldProps: unknown,
): textFieldProps is TextFieldProps => {
  return !!textFieldProps && typeof textFieldProps === "object";
};

export const isKeyofShape =
  (shape: z.core.$ZodLooseShape) =>
  (key: string | number | symbol): key is keyof z.core.$ZodLooseShape => {
    return typeof key === "string" && key in shape;
  };

export const isZodFieldMeta = (meta: unknown): meta is ZodFieldMeta => {
  return (
    !!meta &&
    typeof meta === "object" &&
    ("textFieldProps" in meta ? isTextFieldProps(meta?.textFieldProps) : true)
  );
};

export const isZodFieldType = (type: unknown): type is ZodFieldType => {
  return (
    !!type &&
    typeof type === "string" &&
    ZOD_FIELD_TYPES.some((fieldType) => fieldType === type)
  );
};

export const containsTypeField = (
  object: unknown,
): object is { type: ZodFieldType } => {
  return (
    !!object &&
    typeof object === "object" &&
    "type" in object &&
    isZodFieldType(object.type)
  );
};

export const containsAnyOfField = (
  object: unknown,
): object is { anyOf: any[] } => {
  return (
    !!object &&
    typeof object === "object" &&
    "anyOf" in object &&
    isArray(object.anyOf)
  );
};
