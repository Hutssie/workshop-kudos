"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Trophy } from "lucide-react";
import { login } from "@/app/actions/session";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    const formData = new FormData();
    formData.set("email", email);
    formData.set("password", password);
    const result = await login(formData);
    setIsSubmitting(false);
    if (!result.success) {
      setError(result.error);
      return;
    }
    router.push("/feed");
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#5b6880] rounded-lg flex items-center justify-center">
              <Trophy className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold text-[#212631]">Kudos</span>
          </div>
          <h1 className="text-2xl font-bold text-[#212631] mb-2">
            Welcome Back
          </h1>
          <p className="text-[#66686c]">
            Log in to give and receive recognition
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#d8d9db] p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg" role="alert">
                {error}
              </p>
            )}

            <div>
              <label className="block text-sm font-medium text-[#3d4657] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-[#b0b2b6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:border-transparent"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3d4657] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 pr-12 border border-[#b0b2b6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:border-transparent"
                  required
                  minLength={6}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#8a8c91] hover:text-[#3d4657]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5b6880] text-white py-4 rounded-lg font-semibold hover:bg-[#3d4657] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in…" : "Log In"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#66686c]">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-[#5b6880] font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/feed"
              className="text-sm text-[#8a8c91] hover:text-[#5b6880] hover:underline"
            >
              Continue browsing as guest
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
