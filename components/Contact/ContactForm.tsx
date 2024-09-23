"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { ContactSchema } from "@/lib/validations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Textarea } from "../ui/textarea";
import CustomButton from "../CustomButton";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      subject: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full bg-brand-blue px-8">
      <div className="max-w-[520px] mx-auto py-32 ">
        <div className="flex gap-8 flex-col items-center text-center">
          <h2 className="uppercase text-2xl max-[450px]:text-xl md:text-3xl lg:text-4xl font-bold text-brand-yellow">
            REACH OUT TO US
          </h2>
          <p className="md:text-xl text-base max-[450px]:text-sm text-slate-50">
            Have a question or need assistance? Fill out the form, and we’ll get
            back to you shortly.
          </p>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full max-w-2xl flex-col items-start gap-2"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col items-start">
                    <FormControl>
                      <Input
                        className="no-focus paragraph-regular bg-white max-[450px]:text-sm max-sm:text-base text-lg text-brand-blue min-h-12 2xl:min-h-[56px] border"
                        placeholder="Your Name"
                        required
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col items-start">
                    <FormControl>
                      <Input
                        className="no-focus paragraph-regular bg-white max-[450px]:text-sm max-sm:text-base text-lg text-brand-blue min-h-12 2xl:min-h-[56px] border"
                        placeholder="Your Email Address"
                        type="email"
                        required
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col items-start">
                    <FormControl>
                      <Input
                        className="no-focus paragraph-regular bg-white max-[450px]:text-sm max-sm:text-base text-lg text-brand-blue min-h-12 2xl:min-h-[56px] border"
                        placeholder="Your Contact Number"
                        required
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col items-start">
                    <FormControl>
                      <Input
                        className="no-focus paragraph-regular bg-white max-[450px]:text-sm max-sm:text-base text-lg text-brand-blue min-h-12 2xl:min-h-[56px] border"
                        placeholder="Subject / Reason for Inquiry"
                        required
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col items-start">
                    <FormControl>
                      <Textarea
                        className="no-focus paragraph-regular bg-white max-[450px]:text-sm max-sm:text-base text-lg text-brand-blue min-h-24 border"
                        placeholder="Message"
                        required
                        {...field}
                        disabled={isSubmitting}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="w-full">
                <CustomButton
                  type="submit"
                  className="btn-full"
                  loading={isSubmitting}
                  variant="primary"
                  loadingText="Submitting..."
                  text="Submit"
                />
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
