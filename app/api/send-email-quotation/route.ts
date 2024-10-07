import { NextRequest, NextResponse } from "next/server";

interface QuotationFormData {
  name: string;
  email: string;
  contactNumber: string;
  systemType: string;
  systemSize: string;
  averageMonthlyBill: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const {
      name,
      email,
      contactNumber,
      systemType,
      systemSize,
      averageMonthlyBill,
    }: QuotationFormData = await req.json();

    const data = {
      sender: { email: "info@jflsolar.com", name: "JFL Solar" },
      to: [{ email: "jflsolarjay@gmail.com", name: "Jay" }],
      subject: "New Quotation Request",
      htmlContent: `
        <h1>New Quotation Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>System Type:</strong> ${systemType}</p>
        <p><strong>System Size:</strong> ${systemSize} (kWh)</p>
        <p><strong>Ave. Monthly Bill:</strong> ${averageMonthlyBill}</p>
      `,
    };

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY as string,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Error sending email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error in sending email:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
