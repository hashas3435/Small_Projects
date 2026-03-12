import z from "zod";
import { decimal } from "../shared/zod/fieldConfig";
import { getFieldNames, getSchemaUtils } from "../shared/zod/schemaUtils";

export const SignInSchema = z.object({
  email: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  address: z.string().nullable().optional(),
  nickName: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional().default("Doe"),
  age: z.number().optional(),
  height: decimal(z.number().optional(), 3),
  petNames: z.array(z.string()).optional().nullable(),
  birthDate: z.date().optional(),
});

export type SignInFormData = z.infer<typeof SignInSchema>;
export type SignInFields = keyof SignInFormData;

export const FIELD_NAMES = getFieldNames(SignInSchema);
export const { getFieldMeta, getFieldType } = getSchemaUtils(SignInSchema);
