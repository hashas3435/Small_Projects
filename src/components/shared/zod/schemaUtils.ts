import z from "zod";
import { isKeyofShape, isZodFieldMeta, isZodFieldType } from "../typeUtils";
import type { ZodFieldType } from "./type";
export const getFieldNames = <Schema extends z.ZodObject>(
  schema: Schema,
): Readonly<(keyof Schema["shape"])[]> => {
  return Object.keys(schema.shape);
};

const findFieldType = (fieldShape: any): ZodFieldType => {
  let currentShape = fieldShape;
  while (!!currentShape?.type && !isZodFieldType(currentShape?.type)) {
    currentShape = currentShape?.def?.innerType;
  }
  return currentShape?.type || "undefined";
};

export const getSchemaUtils = <Schema extends z.ZodObject>(schema: Schema) => {
  const getFieldShape = (fieldName: keyof Schema["shape"]) => {
    const isKeyofSchemaShape = isKeyofShape(schema.shape);
    return isKeyofSchemaShape(fieldName) && schema.shape?.[fieldName];
  };

  const getFieldMeta = (fieldName: keyof Schema["shape"]) => {
    const meta = getFieldShape(fieldName)?.meta();
    return isZodFieldMeta(meta) ? meta : undefined;
  };

  const getFieldType = (fieldName: keyof Schema["shape"]) => {
    const fieldShape = getFieldShape(fieldName);
    return findFieldType(fieldShape);
  };

  return {
    getFieldMeta,
    getFieldType,
  };
};
