// 🎨 The vibe curator
import React from "react";

export const AuthFormContainer = ({
                               title,
                               children
                           }: {
    title: string;
    children: React.ReactNode;
}) => (
    <section className="max-w-md mx-auto">
        <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 shadow-xl dark:shadow-blue-900/50 transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-purple-600 text-center mb-6">
                {title}
            </h2>
            {children}
        </div>
    </section>
);

// ✏️ Input field with attitude
export const AuthInput = ({
                       error,
                       ...props
                   }: React.InputHTMLAttributes<HTMLInputElement> & { error?: string }) => (
    <div className="space-y-1">
        <input
            className={`w-full border-2 ${
                error ? 'border-red-500 shake-animation' : 'border-slate-300 dark:border-slate-600'
            } bg-white dark:bg-slate-700 rounded-lg p-3 transition-all`}
            {...props}
        />
        {error && <p className="text-red-500 text-sm mt-1 animate-bounce">{error}</p>}
    </div>
);

// 🎛️ Button that pops
export const AuthButton = ({
                        loading,
                        children,
                        ...props
                    }: React.ButtonHTMLAttributes<HTMLButtonElement> & { loading?: boolean }) => (
    <button
        className={`w-full py-3 px-6 rounded-lg transition-all ${
            loading
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg transform hover:scale-[1.02]'
        }`}
        disabled={loading}
        {...props}
    >
        {children}
    </button>
);