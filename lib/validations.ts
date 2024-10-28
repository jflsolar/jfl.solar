import { z } from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

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
  averageMonthlyBill: z.string(),
  // shipping: z.string(),
});
