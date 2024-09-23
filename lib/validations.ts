import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string(),
  email: z.string(),
  contactNumber: z.string(),
  subject: z.string(),
  description: z.string(),
});

export const QuotationSchema = z.object({
  name: z.string(),
  email: z.string(),
  contactNumber: z.string(),
  systemType: z.string(),
  systemSize: z.string(),
  averagekWh: z.number(),
  shipping: z.string(),
});