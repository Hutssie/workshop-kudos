"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Upload, Trophy } from "lucide-react";
import { signup } from "@/app/actions/auth";

const MAX_AVATAR_BYTES = 2 * 1024 * 1024; // 2MB

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFieldErrors({});
    setSubmitError(null);
    setIsSubmitting(true);

    const formData = new FormData();
    formData.set("email", email);
    formData.set("fullName", fullName);
    formData.set("position", position);
    formData.set("password", password);
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      if (file.size > MAX_AVATAR_BYTES) {
        setFieldErrors((prev) => ({
          ...prev,
          avatar: "Image must be 2MB or smaller.",
        }));
        setIsSubmitting(false);
        return;
      }
      formData.set("avatar", file);
    }

    const result = await signup(formData);
    setIsSubmitting(false);

    if (!result.success) {
      if (result.fieldErrors) setFieldErrors(result.fieldErrors);
      if (result.error) setSubmitError(result.error);
      return;
    }
    router.push("/feed");
  }

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_AVATAR_BYTES) {
        setFieldErrors((prev) => ({ ...prev, avatar: "Image must be 2MB or smaller." }));
        setPreviewUrl(null);
        e.target.value = "";
        return;
      }
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.avatar;
        return next;
      });
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  }

  function clearAvatar() {
    setPreviewUrl(null);
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next.avatar;
      return next;
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
            Create Account
          </h1>
          <p className="text-[#66686c]">Join your team in celebrating wins</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-[#d8d9db] p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {submitError && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg" role="alert">
                {submitError}
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
              {fieldErrors.email && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3d4657] mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-[#b0b2b6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:border-transparent"
                required
                autoComplete="name"
              />
              {fieldErrors.fullName && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.fullName}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3d4657] mb-2">
                Position in Company
              </label>
              <input
                type="text"
                name="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="e.g., Product Designer, Software Engineer"
                className="w-full px-4 py-3 border border-[#b0b2b6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b6880] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3d4657] mb-2">
                Profile Picture
              </label>
              <div className="space-y-3">
                {previewUrl && (
                  <div className="flex items-center gap-3">
                    <img
                      src={previewUrl}
                      alt="Profile preview"
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#d8d9db]"
                    />
                    <button
                      type="button"
                      onClick={clearAvatar}
                      className="text-sm text-[#8a8c91] hover:text-[#212631]"
                    >
                      Remove
                    </button>
                  </div>
                )}

                <label className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-[#b0b2b6] rounded-lg cursor-pointer hover:border-[#5b6880] transition-colors">
                  <Upload className="w-5 h-5 text-[#66686c]" />
                  <span className="text-sm text-[#66686c]">Upload from device</span>
                  <input
                    ref={fileInputRef}
                    type="file"
                    name="avatar"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
                {fieldErrors.avatar && (
                  <p className="text-sm text-red-600" role="alert">
                    {fieldErrors.avatar}
                  </p>
                )}
              </div>
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
                  autoComplete="new-password"
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
              <p className="text-xs text-[#8a8c91] mt-1">
                Must be at least 6 characters
              </p>
              {fieldErrors.password && (
                <p className="mt-1 text-sm text-red-600" role="alert">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#5b6880] text-white py-4 rounded-lg font-semibold hover:bg-[#3d4657] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#66686c]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#5b6880] font-medium hover:underline"
              >
                Log in
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
