import { useState, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = () => {
    // Input state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // Toast notifications
    const notifySuccess = (message: string) => toast.success(message);
    const notifyError = (message: string) => toast.error(message);

    // Login handler
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (!username || !password) {
            notifyError("One or both of the fields is missing!");
            return;
        }
        notifySuccess("Logged in successfully! 🚀");
        console.log({ username, password });
    };

    return (
        <section>
            <div className="bg-slate-100 rounded-xl p-5 mx-auto shadow-xl shadow-blue-300 max-w-md">
                <h2 className="text-3xl font-bold text-purple-600 text-center">Login</h2>
                <form onSubmit={handleLogin} className="p-5">
                    <label className="flex flex-col py-3">
                        <input
                            className="border-2 border-slate-300 bg-white rounded-xl p-2"
                            type="text"
                            name="username"
                            required
                            maxLength={50}
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            aria-label="Username"
                        />
                    </label>
                    <label className="flex flex-col py-5">
                        <input
                            className="border-2 border-slate-300 bg-white rounded-xl p-2"
                            type="password"
                            name="password"
                            required
                            minLength={8}
                            maxLength={15}
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Password"
                        />
                    </label>
                    <button
                        className="transform transition-transform duration-300 scale-100 bg-purple-500 text-white hover:text-black hover:scale-120 shadow-sm shadow-slate-400 rounded-3xl py-1 px-6"
                        type="submit"
                        aria-label="submit-button"
                    >
                        Login
                    </button>
                </form>

                {/* Toast Container */}
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </section>
    );
};

