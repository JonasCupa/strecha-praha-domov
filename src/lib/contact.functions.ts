import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Zadejte jméno").max(100),
  phone: z.string().trim().min(6, "Zadejte telefon").max(30),
  message: z.string().trim().min(5, "Zpráva je příliš krátká").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      name: data.name,
      phone: data.phone,
      message: data.message,
    });

    if (error) {
      console.error("contact_submissions insert failed:", error);
      throw new Error("Nepodařilo se odeslat zprávu. Zavolejte prosím přímo.");
    }

    return { ok: true as const };
  });
