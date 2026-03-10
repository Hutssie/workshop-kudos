import Link from "next/link";
import { Trophy, Heart, Award, Users } from "lucide-react";
import { getCurrentUser } from "@/lib/session";

export default async function WelcomePage() {
  const currentUser = await getCurrentUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#5b6880] via-[#3d4657] to-[#212631] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="mb-8">
          <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
            <Trophy className="w-12 h-12 text-[#357d1c]" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center mb-4">
          Welcome to Kudos
        </h1>
        <p className="text-lg text-[#d4d9e4] text-center max-w-md mb-12">
          Recognize your teammates and celebrate wins together
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Heart className="w-8 h-8 text-[#77fd4b] mb-3" />
            <h3 className="text-white font-semibold mb-2">Give Recognition</h3>
            <p className="text-[#d4d9e4] text-sm">
              Share public appreciation for your teammates&apos; great work
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Award className="w-8 h-8 text-[#b2abe9] mb-3" />
            <h3 className="text-white font-semibold mb-2">Categorize Kudos</h3>
            <p className="text-[#d4d9e4] text-sm">
              Use categories like Team Player, Innovation, and more
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Users className="w-8 h-8 text-[#aec1bf] mb-3" />
            <h3 className="text-white font-semibold mb-2">Build Culture</h3>
            <p className="text-[#d4d9e4] text-sm">
              Foster a positive team environment through recognition
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Trophy className="w-8 h-8 text-[#5dd135] mb-3" />
            <h3 className="text-white font-semibold mb-2">Track Impact</h3>
            <p className="text-[#d4d9e4] text-sm">
              See who&apos;s making a difference on the leaderboard
            </p>
          </div>
        </div>

        <Link
          href={currentUser ? "/feed" : "/login"}
          className="bg-[#357d1c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#49a628] transition-colors shadow-lg"
        >
          Get Started
        </Link>
      </div>

      <div className="text-center py-6 text-[#d4d9e4] text-sm">
        Made with ♥ for amazing teams
      </div>
    </div>
  );
}
