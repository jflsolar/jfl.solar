'use client'

import CustomButton from '@/components/CustomButton'
import LoadProfiling from '@/components/Quotation/LoadProfiling'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'


const QuotationPage = () => {
  return (
    <div className='w-full min-h-[90vh]'>
      <div className='max-w-7xl mx-auto py-20 flex justify-center gap-12 h-full'>
        <QuotationStep/>
      </div>
    </div>
  )
}

export default QuotationPage


const QuotationStep = () => {
  const [step, setStep] = useState('typeSelection')
  const [type, setType] = useState('')
  const [hasSystemSize, sethasSystemSize] = useState('')
  const [loadProfile, setLoadProfile] = useState<LoadProfile[]>([])
  const [contactForm, setContactForm] = useState(null)
  const [shipping, setShipping] = useState('')

  switch (step) {
    case "typeSelection":
      return <TypeSelection onSelect={(type) => {
        setType(type)
        setStep('hasSystemSize')
      }}/>  
    case "hasSystemSize":
      return <HasSystemSizeSelection onSelect={(answer) => {
        sethasSystemSize(answer)
        answer==='Yes' ? setStep('contactForm') : setStep('loadProfiling')
      }}/>
    case "loadProfiling":
      return <LoadProfiling 
        loads={loadProfile}
        onSubmit={(load) => {
          setLoadProfile(load)
          setStep('contactForm')
        }} 
        onBack={() => setStep('hasSystemSize')} 
      />
    case "contactForm":
      return <ContactForm 
        answer={hasSystemSize}
        onSubmit={(values)=> {
          setContactForm(values)
          type === 'DIY' ?  setStep('deliveryOptionSelection') : setStep('summary')
        }} 
        onBack={() => hasSystemSize==='Yes' ? setStep('hasSystemSize') : setStep("loadProfiling") }
      />
    case "deliveryOptionSelection":
      return <DeliveryOptionSelection onSelect={(answer) => {
        setShipping(answer)
        answer==='Pick-up' ? setStep('Summary') : setStep('location')
      }}/>
    case "productSearch":
      return  <ProductSearch/>
   
    
    default:
      break;
  }
}

const TypeSelection = ({onSelect}: {onSelect: (type:string) => void}) => {
  return (
  <div className='flex flex-col gap-24 items-center'>
    <h2 className='text-4xl font-bold text-brand-blue'>
        Which quotation do you need? 
    </h2>
    <div className="flex justify-center gap-8">
      <button className='bg-brand-blue hover:bg-brand-blue/90 text-2xl p-4 text-slate-100 size-[250px] border flex items-center justify-center rounded-xl' onClick={() => onSelect("DIY")}>DIY Package</button>
      <button className='bg-brand-blue hover:bg-brand-blue/90 text-2xl p-4 text-slate-100 size-[250px] border flex items-center justify-center rounded-xl ' onClick={() => onSelect('Installation')}>Complete Package w/ Installation</button>
      <button className='bg-brand-blue hover:bg-brand-blue/90 text-2xl p-4 text-slate-100 size-[250px] border flex items-center justify-center rounded-xl ' onClick={() => onSelect('Product')}>Products Only</button>
    </div>
  </div>)
}

const HasSystemSizeSelection = ({ onSelect }: {onSelect: (answer:string) => void}) => {
  return (
    <div className='flex flex-col gap-16 items-center mt-20'>
      <h2 className="text-3xl font-bold text-center mb-8">Do you already have a system size in mind?</h2>
      <div className="flex justify-center gap-8">
        <button className="bg-brand-blue hover:bg-brand-blue/90 text-2xl py-4 min-w-[200px] text-slate-100 rounded-xl" onClick={() => onSelect('Yes')}>Yes</button>
        <button className="bg-brand-blue hover:bg-brand-blue/90 text-2xl py-4 min-w-[200px] text-slate-100 rounded-xl" onClick={() => onSelect('No')}>No</button>
      </div>
    </div>
  );
};


const ProductSearch = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">Select Your Products</h2>
      {/* Search bar and product list */}
      <Input placeholder="Search for Products" />
      {/* Product list with add-to-cart functionality */}
    </>
  );
};



const ContactForm = ({ answer, onSubmit, onBack }: {answer: string, onSubmit: (values:any) => void, onBack: () => void}) => {
  return (
    <div className='flex flex-col gap-8 items-center w-full'>
      <h2 className="text-3xl font-bold text-center">Contact Information</h2>
      <form className='max-w-md w-full text-lg flex flex-col gap-2' onSubmit={onSubmit}>
        <Input name='name' placeholder="Your Name" className='text-lg min-h-[48px]' required />
        <Input name='email' type='email' placeholder="Your Email" className='text-lg min-h-[48px]' required />
        <Input name='contactNumber' placeholder="Your Contact Number" className='text-lg min-h-[48px]' required />
        <div className="flex gap-8 mt-4">
          <div className="flex gap-2">
            <input type="radio" id="grid-tie" name="systemType" value="grid-tie" />
            <label htmlFor="grid-tie">Grid-Tie</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="hybrid" name="systemType" value="hybrid" />
            <label htmlFor="hybrid">Hybrid</label>
          </div>
        </div>
        {answer === 'Yes' && <Input name='systemSize' placeholder="System Size (kW)" className='text-lg min-h-[48px]' required />}
        <Input name='averageConsumption' placeholder="Average Monthly kWh Consumption" className='text-lg min-h-[48px]' required />

        <div className='flex flex-row justify-between mt-8'>
          <CustomButton variant='secondary' className='' text='Back' type='button' onClick={onBack}/>
          <CustomButton variant='primary' className='' text='Next'/>
        </div>
      </form>
    </div>
  );
};

const DeliveryOptionSelection = ({ onSelect }: { onSelect: (answer: string) => void }) => {
  return (
    <div className='flex flex-col gap-16 items-center mt-20'>
      <h2 className="text-3xl font-bold text-center mb-8">Do you prefer Pick-Up or Delivery?</h2>
      <div className="flex justify-center gap-8">
        <button className="bg-brand-blue hover:bg-brand-blue/90 text-2xl py-4 min-w-[200px] text-slate-100 rounded-xl" onClick={() => onSelect('Pick-Up')}>Pick-Up</button>
        <button className="bg-brand-blue hover:bg-brand-blue/90 text-2xl py-4 min-w-[200px] text-slate-100 rounded-xl" onClick={() => onSelect('Delivery')}>Delivery</button>
      </div>
    </div>
  );
};
