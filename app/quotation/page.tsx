"use client";

import CustomButton from "@/components/CustomButton";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
// import LoadProfiling from "@/components/Quotation/LoadProfiling";
import { Input } from "@/components/ui/input";
import { QuotationSchema } from "@/lib/validations";
import { URLProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CircleCheck } from "tabler-icons-react";
import { z } from "zod";

const QuotationPage = ({ searchParams }: URLProps) => {
  return (
    <div className="min-h-[90vh] w-full">
      <div className="mx-auto flex h-full max-w-7xl justify-center gap-12 py-20">
        <QuotationStep
          type={searchParams?.type}
          system={searchParams?.system}
        />
      </div>
    </div>
  );
};

export default QuotationPage;

interface Props {
  type?: string;
  system?: string;
}
const QuotationStep = ({ type: systemType, system }: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [step, setStep] = useState("contactForm");
  // const [type, setType] = useState(systemType || "");
  // const [hasSystemSize, sethasSystemSize] = useState("Yes");
  // const [loadProfile, setLoadProfile] = useState<LoadProfile[]>([]);
  // const [contactForm, setContactForm] = useState(null);
  // const [shipping, setShipping] = useState("");
  // console.log("contactForm", contactForm);
  // console.log("shipping", shipping);
  // switch (step) {
  // case "typeSelection":
  //   return (
  //     <TypeSelection
  //       onSelect={(type) => {
  //         setType(type);
  //         setStep("hasSystemSize");
  //       }}
  //     />
  //   );
  // case "hasSystemSize":
  //   return (
  //     <HasSystemSizeSelection
  //       onSelect={(answer) => {
  //         sethasSystemSize(answer);
  //         answer === "Yes"
  //           ? setStep("contactForm")
  //           : setStep("loadProfiling");
  //       }}
  //     />
  //   );
  // case "loadProfiling":
  //   return (
  //     <LoadProfiling
  //       loads={loadProfile}
  //       onSubmit={(load) => {
  //         setLoadProfile(load);
  //         setStep("contactForm");
  //       }}
  //       onBack={() => setStep("hasSystemSize")}
  //     />
  //   );
  // case "contactForm":
  return (
    <>
      {isSubmitted ? (
        <div className="flex w-full max-w-[350px] flex-col items-center justify-center gap-4 text-center text-2xl font-bold text-brand-blue">
          <CircleCheck className="text-brand-blue" size={64} />
          Thank you for submitting your information. We’ll review it and get
          back to you within 48 hours.
        </div>
      ) : (
        <ContactForm
          answer={"Yes"}
          type={systemType}
          system={system?.replace("kW", "")}
          // onSubmit={(values) => {
          //   setContactForm(values);
          //   type === "DIY"
          //     ? setStep("deliveryOptionSelection")
          //     : setStep("summary");
          // }}
          onSubmit={() => setIsSubmitted(true)}
          // onBack={() =>
          //   hasSystemSize === "Yes"
          //     ? setStep("hasSystemSize")
          //     : setStep("loadProfiling")
          // }
        />
      )}
    </>
  );
  // case "deliveryOptionSelection":
  //   return (
  //     <DeliveryOptionSelection
  //       onSelect={(answer) => {
  //         setShipping(answer);
  //         answer === "Pick-up" ? setStep("Summary") : setStep("location");
  //       }}
  //     />
  //   );
  // case "productSearch":
  //   return <ProductSearch />;

  // default:
  //   break;
  // }
};

// const TypeSelection = ({ onSelect }: { onSelect: (type: string) => void }) => {
//   return (
//     <div className="flex flex-col items-center gap-24">
//       <h2 className="text-4xl font-bold text-brand-blue">
//         Which quotation do you need?
//       </h2>
//       <div className="flex justify-center gap-8">
//         <button
//           className="flex size-[250px] items-center justify-center rounded-xl border bg-brand-blue p-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
//           onClick={() => onSelect("DIY")}
//         >
//           DIY Package
//         </button>
//         <button
//           className="flex size-[250px] items-center justify-center rounded-xl border bg-brand-blue p-4 text-2xl text-slate-100 hover:bg-brand-blue/90 "
//           onClick={() => onSelect("Installation")}
//         >
//           Complete Package w/ Installation
//         </button>
//         {/* <button
//           className="flex size-[250px] items-center justify-center rounded-xl border bg-brand-blue p-4 text-2xl text-slate-100 hover:bg-brand-blue/90 "
//           onClick={() => onSelect("Product")}
//         >
//           Products Only
//         </button> */}
//       </div>
//     </div>
//   );
// };

// const HasSystemSizeSelection = ({
//   onSelect,
// }: {
//   onSelect: (answer: string) => void;
// }) => {
//   return (
//     <div className="mt-20 flex flex-col items-center gap-16">
//       <h2 className="mb-8 text-center text-3xl font-bold">
//         Do you already have a system size in mind?
//       </h2>
//       <div className="flex justify-center gap-8">
//         <button
//           className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
//           onClick={() => onSelect("Yes")}
//         >
//           Yes
//         </button>
//         <button
//           className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
//           onClick={() => onSelect("No")}
//         >
//           No
//         </button>
//       </div>
//     </div>
//   );
// };

// const ProductSearch = () => {
//   return (
//     <>
//       <h2 className="mb-8 text-center text-3xl font-bold">
//         Select Your Products
//       </h2>
//       {/* Search bar and product list */}
//       <Input placeholder="Search for Products" />
//       {/* Product list with add-to-cart functionality */}
//     </>
//   );
// };

const ContactForm = ({
  answer,
  type,
  system,
  onSubmit,
  onBack,
}: {
  answer: string;
  type?: string;
  system?: string;
  onSubmit: () => void;
  onBack?: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof QuotationSchema>>({
    resolver: zodResolver(QuotationSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "",
      systemType: type || "hybrid",
      systemSize: system || "",
    },
  });

  async function handleSubmit(values: z.infer<typeof QuotationSchema>) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send-email-quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        onSubmit();
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
    <div className="flex w-full flex-col items-center gap-8">
      <h2 className="text-center text-3xl font-bold">Contact Information</h2>
      <Form {...form}>
        <form
          className="flex w-full max-w-md flex-col gap-2 text-lg"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col items-start">
                <FormControl>
                  <Input
                    className="min-h-12 border bg-white text-lg text-brand-blue max-sm:text-base max-[450px]:text-sm 2xl:min-h-[56px]"
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
                    className="min-h-12 border bg-white text-lg text-brand-blue max-sm:text-base max-[450px]:text-sm 2xl:min-h-[56px]"
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
                    className="min-h-12 border bg-white text-lg text-brand-blue max-sm:text-base max-[450px]:text-sm 2xl:min-h-[56px]"
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
            name="systemType"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col items-start">
                <FormControl>
                  <div className="mt-4 flex gap-8">
                    <div className="flex items-center gap-2">
                      <Input
                        type="radio"
                        id="gridtied"
                        {...field}
                        defaultChecked={type === "gridtied"}
                        value="gridtied"
                      />
                      <label htmlFor="grid-tie" className=" whitespace-nowrap">
                        Grid-Tied
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        type="radio"
                        id="hybrid"
                        {...field}
                        value="hybrid"
                        defaultChecked={type ? type === "hybrid" : true}
                      />
                      <label htmlFor="hybrid">Hybrid</label>
                    </div>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />

          {answer === "Yes" && (
            <FormField
              control={form.control}
              name="systemSize"
              render={({ field }) => (
                <FormItem className="flex w-full flex-col items-start">
                  <FormControl>
                    <div className="flex items-center gap-2">
                      <Input
                        className="min-h-12 max-w-[180px] border bg-white text-lg text-brand-blue max-sm:text-base max-[450px]:text-sm 2xl:min-h-[56px]"
                        placeholder="System Size (kW)"
                        required
                        {...field}
                        disabled={isSubmitting}
                      />
                      <span>kW</span>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="averageMonthlyBill"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col items-start">
                <FormControl>
                  <Input
                    className="min-h-12 border bg-white text-lg text-brand-blue max-sm:text-base max-[450px]:text-sm 2xl:min-h-[56px]"
                    placeholder="Average Monthly Electricity Bill"
                    required
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="mt-8 flex flex-row justify-between">
            {/* <CustomButton
            variant="secondary"
            className=""
            text="Back"
            type="button"
            onClick={onBack}
          /> */}
            <CustomButton
              variant="primary"
              loading={isSubmitting}
              loadingText="Submitting..."
              className="w-full"
              text="Submit"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

// const DeliveryOptionSelection = ({
//   onSelect,
// }: {
//   onSelect: (answer: string) => void;
// }) => {
//   return (
//     <div className="mt-20 flex flex-col items-center gap-16">
//       <h2 className="mb-8 text-center text-3xl font-bold">
//         Do you prefer Pick-Up or Delivery?
//       </h2>
//       <div className="flex justify-center gap-8">
//         <button
//           className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
//           onClick={() => onSelect("Pick-Up")}
//         >
//           Pick-Up
//         </button>
//         <button
//           className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
//           onClick={() => onSelect("Delivery")}
//         >
//           Delivery
//         </button>
//       </div>
//     </div>
//   );
// };
