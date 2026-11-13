"use client";
import Link from "next/link";

export default function ChatWelcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 text-center">
        {/* آیکون */}
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <span className="text-white text-3xl font-extrabold">چ</span>
        </div>

        {/* خوش‌آمد */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">
          خوش آمدی! 👋
        </h1>
        <p className="text-base text-gray-600 mb-8">
          به چت‌روم خوش آمدی. برای شروع، دکمه زیر را بزن.
        </p>

        {/* دکمه */}
        <Link
          href="login"
          className="inline-block w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-4 rounded-2xl text-lg font-extrabold transition shadow-lg"
        >
          ورود به چت‌روم
        </Link>

        {/* فوتر */}
        <p className="text-xs text-gray-400 mt-6">
          با کلیک روی دکمه، به صفحه ورود می‌روی
        </p>
      </div>
    </div>
  );
}