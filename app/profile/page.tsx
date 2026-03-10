import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import {
  getKudosReceivedBy,
  getKudosGivenBy,
  getTotalLikesReceived,
  enrichKudosWithEngagement,
} from "@/lib/feed";
import { Award, TrendingUp, Heart } from "lucide-react";
import { ProfileKudosSection } from "@/components/profile/ProfileKudosSection";
import { ProfileHeader } from "@/components/profile/ProfileHeader";

export default async function ProfilePage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const [receivedKudos, givenKudos, totalLikes] = await Promise.all([
    getKudosReceivedBy(user.id),
    getKudosGivenBy(user.id),
    getTotalLikesReceived(user.id),
  ]);

  const [receivedEnriched, givenEnriched] = await Promise.all([
    enrichKudosWithEngagement(receivedKudos, user.id),
    enrichKudosWithEngagement(givenKudos, user.id),
  ]);

  const displayName = user.displayName ?? user.name;
  const roleLabel = user.position ?? "Team Member";

  return (
    <div className="min-h-screen bg-[#f5f6f8] pb-20 sm:pb-8">
      <div className="max-w-3xl mx-auto px-4 py-6 sm:pt-24">
        {/* Profile Header - matches Figma; avatar is clickable to upload new photo */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-[#d8d9db] mb-6">
          <ProfileHeader
            displayName={displayName}
            roleLabel={roleLabel}
            avatarUrl={user.avatarUrl}
          />
          {/* Stats - gradient cards from Figma */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-[#d4d9e4] to-[#a6b2ca] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-[#5b6880]" />
                <span className="text-xs font-medium text-[#3d4657]">Received</span>
              </div>
              <p className="text-2xl font-bold text-[#212631]">
                {receivedKudos.length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#d3eae7] to-[#aec1bf] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-[#485150]" />
                <span className="text-xs font-medium text-[#2b3030]">Given</span>
              </div>
              <p className="text-2xl font-bold text-[#212631]">
                {givenKudos.length}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#dad7f4] to-[#b2abe9] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-4 h-4 text-[#6955cd]" />
                <span className="text-xs font-medium text-[#4732a1]">Likes</span>
              </div>
              <p className="text-2xl font-bold text-[#212631]">{totalLikes}</p>
            </div>
          </div>
        </div>

        <ProfileKudosSection
          receivedKudos={receivedEnriched}
          givenKudos={givenEnriched}
          currentUser={user}
        />
      </div>
    </div>
  );
}
