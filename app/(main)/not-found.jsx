import React from 'react'

export default function NotFound() {
    return (
        <div className="flex z-50 flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">صفحه پیدا نشد</h2>
            <p className="text-gray-600 mb-6">
                متأسفیم! صفحه‌ای که دنبالش هستی وجود نداره یا حذف شده.
            </p>
            <a
                href="/"
                className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
            >
                بازگشت به صفحه اصلی
            </a>
        </div>
    )
}
 