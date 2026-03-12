import type { ZodType } from "zod";
import type { ZodFieldMeta } from "./type";

export const addMeta = (meta: ZodFieldMeta) => meta;

export const decimal = <ZodField extends ZodType>(
  zodField: ZodField,
  decimalPlaces: number,
) =>
  zodField
    .refine((value) => {
      if (typeof value !== "number") return false;
      const decimalLength = value.toString().split(".")[1]?.length ?? 0;
      return decimalLength <= decimalPlaces;
    })
    .meta(
      addMeta({
        textFieldProps: {
          inputProps: {
            step: Math.pow(10, -decimalPlaces),
          },
        },
      }),
    );
