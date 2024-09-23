"use client";

import CustomButton from "@/components/CustomButton";
import LoadProfiling from "@/components/Quotation/LoadProfiling";
import { Input } from "@/components/ui/input";
import { LoadProfile } from "@/types";
import React, { useState } from "react";

const QuotationPage = () => {
  return (
    <div className="min-h-[90vh] w-full">
      <div className="mx-auto flex h-full max-w-7xl justify-center gap-12 py-20">
        <QuotationStep />
      </div>
    </div>
  );
};

export default QuotationPage;

const QuotationStep = () => {
  const [step, setStep] = useState("typeSelection");
  const [type, setType] = useState("");
  const [hasSystemSize, sethasSystemSize] = useState("");
  const [loadProfile, setLoadProfile] = useState<LoadProfile[]>([]);
  const [contactForm, setContactForm] = useState(null);
  const [shipping, setShipping] = useState("");
  console.log("contactForm", contactForm);
  console.log("shipping", shipping);
  switch (step) {
    case "typeSelection":
      return (
        <TypeSelection
          onSelect={(type) => {
            setType(type);
            setStep("hasSystemSize");
          }}
        />
      );
    case "hasSystemSize":
      return (
        <HasSystemSizeSelection
          onSelect={(answer) => {
            sethasSystemSize(answer);
            answer === "Yes"
              ? setStep("contactForm")
              : setStep("loadProfiling");
          }}
        />
      );
    case "loadProfiling":
      return (
        <LoadProfiling
          loads={loadProfile}
          onSubmit={(load) => {
            setLoadProfile(load);
            setStep("contactForm");
          }}
          onBack={() => setStep("hasSystemSize")}
        />
      );
    case "contactForm":
      return (
        <ContactForm
          answer={hasSystemSize}
          onSubmit={(values) => {
            setContactForm(values);
            type === "DIY"
              ? setStep("deliveryOptionSelection")
              : setStep("summary");
          }}
          onBack={() =>
            hasSystemSize === "Yes"
              ? setStep("hasSystemSize")
              : setStep("loadProfiling")
          }
        />
      );
    case "deliveryOptionSelection":
      return (
        <DeliveryOptionSelection
          onSelect={(answer) => {
            setShipping(answer);
            answer === "Pick-up" ? setStep("Summary") : setStep("location");
          }}
        />
      );
    case "productSearch":
      return <ProductSearch />;

    default:
      break;
  }
};

const TypeSelection = ({ onSelect }: { onSelect: (type: string) => void }) => {
  return (
    <div className="flex flex-col items-center gap-24">
      <h2 className="text-4xl font-bold text-brand-blue">
        Which quotation do you need?
      </h2>
      <div className="flex justify-center gap-8">
        <button
          className="flex size-[250px] items-center justify-center rounded-xl border bg-brand-blue p-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
          onClick={() => onSelect("DIY")}
        >
          DIY Package
        </button>
        <button
          className="flex size-[250px] items-center justify-center rounded-xl border bg-brand-blue p-4 text-2xl text-slate-100 hover:bg-brand-blue/90 "
          onClick={() => onSelect("Installation")}
        >
          Complete Package w/ Installation
        </button>
        <button
          className="flex size-[250px] items-center justify-center rounded-xl border bg-brand-blue p-4 text-2xl text-slate-100 hover:bg-brand-blue/90 "
          onClick={() => onSelect("Product")}
        >
          Products Only
        </button>
      </div>
    </div>
  );
};

const HasSystemSizeSelection = ({
  onSelect,
}: {
  onSelect: (answer: string) => void;
}) => {
  return (
    <div className="mt-20 flex flex-col items-center gap-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Do you already have a system size in mind?
      </h2>
      <div className="flex justify-center gap-8">
        <button
          className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
          onClick={() => onSelect("Yes")}
        >
          Yes
        </button>
        <button
          className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
          onClick={() => onSelect("No")}
        >
          No
        </button>
      </div>
    </div>
  );
};

const ProductSearch = () => {
  return (
    <>
      <h2 className="mb-8 text-center text-3xl font-bold">
        Select Your Products
      </h2>
      {/* Search bar and product list */}
      <Input placeholder="Search for Products" />
      {/* Product list with add-to-cart functionality */}
    </>
  );
};

const ContactForm = ({
  answer,
  onSubmit,
  onBack,
}: {
  answer: string;
  onSubmit: (values: any) => void;
  onBack: () => void;
}) => {
  return (
    <div className="flex w-full flex-col items-center gap-8">
      <h2 className="text-center text-3xl font-bold">Contact Information</h2>
      <form
        className="flex w-full max-w-md flex-col gap-2 text-lg"
        onSubmit={onSubmit}
      >
        <Input
          name="name"
          placeholder="Your Name"
          className="min-h-[48px] text-lg"
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          className="min-h-[48px] text-lg"
          required
        />
        <Input
          name="contactNumber"
          placeholder="Your Contact Number"
          className="min-h-[48px] text-lg"
          required
        />
        <div className="mt-4 flex gap-8">
          <div className="flex gap-2">
            <input
              type="radio"
              id="grid-tie"
              name="systemType"
              value="grid-tie"
            />
            <label htmlFor="grid-tie">Grid-Tie</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="hybrid" name="systemType" value="hybrid" />
            <label htmlFor="hybrid">Hybrid</label>
          </div>
        </div>
        {answer === "Yes" && (
          <Input
            name="systemSize"
            placeholder="System Size (kW)"
            className="min-h-[48px] text-lg"
            required
          />
        )}
        <Input
          name="averageConsumption"
          placeholder="Average Monthly kWh Consumption"
          className="min-h-[48px] text-lg"
          required
        />

        <div className="mt-8 flex flex-row justify-between">
          <CustomButton
            variant="secondary"
            className=""
            text="Back"
            type="button"
            onClick={onBack}
          />
          <CustomButton variant="primary" className="" text="Next" />
        </div>
      </form>
    </div>
  );
};

const DeliveryOptionSelection = ({
  onSelect,
}: {
  onSelect: (answer: string) => void;
}) => {
  return (
    <div className="mt-20 flex flex-col items-center gap-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Do you prefer Pick-Up or Delivery?
      </h2>
      <div className="flex justify-center gap-8">
        <button
          className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
          onClick={() => onSelect("Pick-Up")}
        >
          Pick-Up
        </button>
        <button
          className="min-w-[200px] rounded-xl bg-brand-blue py-4 text-2xl text-slate-100 hover:bg-brand-blue/90"
          onClick={() => onSelect("Delivery")}
        >
          Delivery
        </button>
      </div>
    </div>
  );
};
