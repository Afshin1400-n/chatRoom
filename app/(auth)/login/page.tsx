"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/useAuthStore";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const person = useAuthStore((s) => s.person);
  const login = useAuthStore((s) => s.login);
  const router = useRouter();

  const handleSubmit = (): void => {
    setError("");

    if (name.trim() === "" || password.trim() === "") {
      setError("نام و رمز را وارد کنید");
      return;
    }

    const foundPerson = person.find(
      (driver) => driver.name === name && driver.password === password
    );

    if (foundPerson) {
      login(foundPerson);
      document.cookie = "token=demo; path=/";
      router.push("/chat");
    } else {
      setError("کد ملی یا رمز اشتباه است");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-8">
        {/* آیکون */}
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white text-2xl font-extrabold">و</span>
        </div>

        {/* عنوان */}
        <h1 className="text-2xl font-extrabold text-gray-900 text-center mb-2">
          ورود
        </h1>
        <p className="text-sm text-gray-500 text-center mb-6">
          به چت‌روم خوش آمدید
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
              placeholder="نام خود را وارد نمایید"
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
            ورود
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          حساب ندارید؟{" "}
          <Link href="/register" className="text-blue-600 hover:underline font-semibold">
            ثبت‌نام
          </Link>
        </p>
      </div>
    </div>
  );
}