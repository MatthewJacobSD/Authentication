import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, TypeAuth } from "../lib/types.ts";
import axios from "axios";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<TypeAuth>({
        resolver: zodResolver(signUpSchema),
    });

    const onSubmit = async (data: TypeAuth) => {
        try {
            const response = await axios.post("/api/signup", {
                username: data.username,
                password: data.password,
                confirmPassword: data.confirmPassword, // Fixed from 345232452
            });

            if (response.data.errors) {
                Object.keys(response.data.errors).forEach((key) => {
                    setError(key as keyof TypeAuth, {
                        type: "server",
                        message: response.data.errors[key],
                    });
                });

                notifyError("Please fix the errors above.");
                return;
            }

            notifySuccess("Signed up successfully! 🚀");
            reset();
        } catch (error) {
            notifyError(error instanceof Error ? error.message : "Unknown error occurred");
        }
    };

    // Toast notifications
    const notifySuccess = (message: string) => toast.success(message);
    const notifyError = (message: string) => toast.error(message);

    return (
        <section>
            <div className="bg-slate-100 rounded-xl p-5 mx-auto shadow-xl shadow-blue-300 max-w-md">
                <h2 className="text-3xl font-bold text-purple-600 text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                    <label htmlFor="username" className="flex flex-col py-3">
                        <input
                            {...register("username")}
                            id="username"
                            className="border-2 border-slate-300 bg-white rounded-xl p-2"
                            type="text"
                            placeholder="Enter your username"
                            aria-label="Username"
                        />
                        {errors.username && (
                            <p className="text-red-500 mt-1">{errors.username.message}</p>
                        )}
                    </label>
                    <label htmlFor="password" className="flex flex-col py-5">
                        <input
                            {...register("password")}
                            id="password"
                            className="border-2 border-slate-300 bg-white rounded-xl p-2"
                            type="password"
                            placeholder="Enter your password"
                            aria-label="Password"
                        />
                        {errors.password && (
                            <p className="text-red-500 mt-1">{errors.password.message}</p>
                        )}
                    </label>
                    <label htmlFor="confirmPassword" className="flex flex-col py-5">
                        <input
                            {...register("confirmPassword")}
                            id="confirmPassword"
                            className="border-2 border-slate-300 bg-white rounded-xl p-2"
                            type="password"
                            placeholder="Re-enter your password"
                            aria-label="Confirm Password"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 mt-1">{errors.confirmPassword.message}</p>
                        )}
                    </label>
                    <button
                        disabled={isSubmitting}
                        className="transform transition-transform duration-300 scale-100 bg-purple-500 text-white hover:text-black hover:scale-120 shadow-sm shadow-slate-400 rounded-3xl py-1 px-6 disabled:bg-slate-500"
                        type="submit"
                        aria-label="submit-button"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Toast Container */}
                <ToastContainer position="top-right" autoClose={3000} />
            </div>
        </section>
    );
};
