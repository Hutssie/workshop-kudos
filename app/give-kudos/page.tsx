import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

export default async function GiveKudosPage() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    redirect("/?from=give-kudos");
  }
  redirect("/feed?giveKudos=1");
}
