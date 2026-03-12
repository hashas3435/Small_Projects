import z from "zod";
import { getSchemaUtils } from "../schemaUtils";
import { FIELD_COMPONENT } from "./const";

export const getFieldComponentBySchema =
  <Schema extends z.ZodObject>(zodObject: Schema) =>
  (fieldName: keyof Schema["shape"]): React.ReactNode => {
    const { getFieldType, getFieldMeta } = getSchemaUtils(zodObject);
    const fieldMeta = getFieldMeta(fieldName);

    const props = {
      label: String(fieldName),
      ...fieldMeta,
    };
    const fieldType = getFieldType(fieldName);

    return FIELD_COMPONENT[fieldType](props);
  };
