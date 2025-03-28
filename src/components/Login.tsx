'use client';

import { useState, FormEvent } from "react";
import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";
import {AuthButton, AuthFormContainer, AuthInput} from "@/components/Container";

export const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const notify = {
        success: (message: string) => toast.success(message),
        error: (message: string) => toast.error(message + " 😬")
    };

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (!username.trim() || !password.trim()) {
                notify.error("Bruh... fill something in");
                setIsLoading(false);
                return;
            }

            console.log("Sending data:", { username, password });

            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            console.log("Response status:", response.status);

            if (!response.ok) {
                throw new Error(response.status === 401
                    ? "Who even are you? 🤨"
                    : "Login failed harder than my ex's rebound");
            }

            notify.success("Ayy you're in! Redirecting... 🏎️💨");

        } catch (error) {
            notify.error(error instanceof Error ? error.message : "Big oof 💥");
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <AuthFormContainer title="Welcome Back! 👋">
            <form onSubmit={handleLogin} className="space-y-4">
                <AuthInput
                    name="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Your username or whatever"
                    disabled={isLoading}
                    required
                />

                <AuthInput
                    name="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="The secret stuff"
                    disabled={isLoading}
                    required
                    minLength={8}
                    onInvalid={() => console.log("C'mon, at least 8 characters")}
                    onInput={() => console.log("")}
                />


                <AuthButton loading={isLoading}>
                    {isLoading ? 'Hold up...' : 'Do the thing!'}
                </AuthButton>
            </form>
        </AuthFormContainer>
    );
};