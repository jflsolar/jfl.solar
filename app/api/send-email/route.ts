import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  subject: string;
  description: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, contactNumber, subject, description }: ContactFormData = await req.json();

    const data = {
      sender: { email:'info@jflsolar.com', name:'Jay' },
      to: [{ email, name }],
      subject: 'New Contact Form Submission',
      htmlContent: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${description}</p>
      `,
    };
    console.log('data',data)

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify(data),
    });
    console.log('response',response)

    if (response.ok) {
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in sending email:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
