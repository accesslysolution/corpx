"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(_prevState: any, formData: FormData) {
  const name = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const location = formData.get("location") as string; // Extracted location
  const message = formData.get("message") as string;

  try {
    // 1. Save to Supabase (Includes location)
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, phone, service, location, message }]);

    if (dbError) throw dbError;

    // 2. Send email to yourself (Business Notification only)
    const { error: emailError } = await resend.emails.send({
      from: "onboarding@resend.dev", // Use this if you haven't verified your own domain yet
      to: "accesslysolution@gmail.com",
      subject: `New Enquiry [${location || "Web"}]: ${service || "General Service"}`, // Added location to subject
      html: `
        <h2>New Service Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Location:</strong> ${location || "Not specified"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message || "No additional requirements provided"}</p>
      `,
    });

    if (emailError) throw emailError;

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}