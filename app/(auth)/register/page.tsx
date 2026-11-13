"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/useAuthStore";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const register = useAuthStore((s) => s.register);
  const person = useAuthStore((s) => s.person);
  const router = useRouter();

  const handleSubmit = (): void => {
    setError("");

    if (
      name.trim() === "" ||
      password.trim() === "" ||
      confirmPassword.trim() === ""
    ) {
      setError("همه‌ی فیلدها را پر کنید");
      return;
    }

    if (password !== confirmPassword) {
      setError("رمزها یکسان نیستند");
      return;
    }

    if (
      person.some((d) => d.name === name) &&
      person.some((d) => d.password === password)
    ) {
      setError("این نام قبلاً ثبت شده است");
      return;
    }

    register({
      id: Date.now(),
      name,
      password,
    });

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8">
        {/* آیکون */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white text-2xl font-extrabold">ث</span>
        </div>

        {/* عنوان */}
        <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-2">
          ثبت‌نام
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          حساب جدید بسازید
        </p>

        {/* فرم */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              نام و نام خانوادگی
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="نام خود را وارد کنید ..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              رمز عبور
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              تکرار رمز عبور
            </label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            type="button"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 rounded-xl text-base font-bold transition shadow-md"
          >
            ثبت‌نام
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          حساب دارید؟{" "}
          <Link
            href="/login"
            className="text-blue-600 hover:underline font-semibold"
          >
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
}