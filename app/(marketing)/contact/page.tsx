import ContactForm from '@/components/Contact/ContactForm'
import ContactUs from '@/components/Contact/ContactUs'
import VisitUs from '@/components/Contact/VisitUs'
import React from 'react'

const ContactPage = () => {
  return (
    <div>
        <ContactUs/>
        <ContactForm/>
        <VisitUs/>
    </div>
  )
}

export default ContactPage