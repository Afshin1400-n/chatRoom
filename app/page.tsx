"use client";

export default function Chat() {

  
  return (
    <div className="min-h-screen bg-gray-100 flex" dir="rtl">
      {/* Sidebar - کاربران آنلاین */}
      <aside className="w-72 bg-white border-l border-gray-200 flex flex-col shadow-sm">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-extrabold text-gray-900">چت‌روم</h1>
          <p className="text-xs text-gray-500 mt-1">۳ نفر آنلاین</p>
        </div>

        {/* لیست کاربران */}
        <div className="flex-1 overflow-y-auto p-2">
          {/* آنلاین */}
          <p className="text-xs font-semibold text-gray-500 px-2 py-2">آنلاین</p>

          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                ع
              </div>
              <span className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">علی رضایی</p>
              <p className="text-xs text-green-600">آنلاین</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                م
              </div>
              <span className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">محمد کریمی</p>
              <p className="text-xs text-green-600">آنلاین</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                س
              </div>
              <span className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">سارا احمدی</p>
              <p className="text-xs text-green-600">آنلاین</p>
            </div>
          </div>

          {/* آفلاین */}
          <p className="text-xs font-semibold text-gray-500 px-2 py-2 mt-4">آفلاین</p>

          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition cursor-pointer opacity-60">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm font-bold">
              ر
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-700 truncate">رضا احمدی</p>
              <p className="text-xs text-gray-400">آفلاین</p>
            </div>
          </div>
        </div>

        {/* پروفایل من (پایین) */}
        <div className="p-3 border-t border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
            م
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">من</p>
            <p className="text-xs text-gray-500">آنلاین</p>
          </div>
        </div>
      </aside>

      {/* Main - چت */}
      <main className="flex-1 flex flex-col">
        {/* Header چت */}
        <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              ع
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">علی رضایی</p>
              <p className="text-xs text-green-600">آنلاین</p>
            </div>
          </div>
        </div>

        {/* پیام‌ها */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50">
          {/* پیام من */}
          <div className="flex justify-start">
            <div className="max-w-xs bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
              <p className="text-sm">سلام، چطوری؟</p>
              <span className="block text-[10px] text-blue-100 mt-1">۱۰:۳۰</span>
            </div>
          </div>

          {/* پیام او */}
          <div className="flex justify-end">
            <div className="max-w-xs bg-white text-gray-900 px-4 py-2 rounded-2xl rounded-tl-sm shadow-sm">
              <p className="text-sm">سلام، خوبم! تو چطوری؟</p>
              <span className="block text-[10px] text-gray-400 mt-1">۱۰:۳۱</span>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-xs bg-blue-500 text-white px-4 py-2 rounded-2xl rounded-tr-sm">
              <p className="text-sm">خوبم، ممنون 🙌</p>
              <span className="block text-[10px] text-blue-100 mt-1">۱۰:۳۲</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="bg-white border-t border-gray-200 p-3 flex gap-2">
          <input
            type="text"
            placeholder="پیام خود را بنویسید..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-bold transition">
            ارسال
          </button>
        </div>
      </main>
    </div>
  );
}