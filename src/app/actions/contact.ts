"use server";

import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(_prevState: any, formData: FormData) {
  const name = formData.get("full_name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  try {
    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([{ name, email, phone, service, message }]);

    if (dbError) throw dbError;

    // 2. Send email to yourself (Business Notification)
    await resend.emails.send({
      from: "onboarding@yourdomain.com", // Must be a verified domain in Resend
      to: "your-email@example.com",
      subject: "New Enquiry Received",
      html: `<p>New submission from <strong>${name}</strong></p>
             <p>Service: ${service}</p>
             <p>Message: ${message}</p>`,
    });

    // 3. Send Thank You email to the User
    await resend.emails.send({
      from: "onboarding@yourdomain.com",
      to: email, // Sending to the user who submitted the form
      subject: "Thank you for contacting us!",
      html: `<p>Hi ${name},</p>
             <p>Thanks for reaching out! We have received your request for <strong>${service}</strong> and will get back to you soon.</p>`,
    });

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Submission error:", error);
    return { success: false, message: "Failed to send message. Please try again." };
  }
}