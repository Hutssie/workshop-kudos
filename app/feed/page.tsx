import { getCurrentUser } from "@/lib/session";
import { getKudosFeed } from "@/lib/feed";
import { FeedWithFilter } from "@/components/feed/FeedWithFilter";

export default async function FeedPage() {
  const currentUser = await getCurrentUser();
  const kudos = await getKudosFeed(currentUser?.id ?? null);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 sm:pt-6">
      <FeedWithFilter kudos={kudos} currentUser={currentUser} />
    </div>
  );
}
