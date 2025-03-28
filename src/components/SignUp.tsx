'use client'; // 👈 Peep this - it's a client-side rave

// 🎉 Party essentials
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, type SignUpFormData } from '@/lib/types';
import { toast } from "react-toastify";
import React from "react";
import {AuthButton, AuthFormContainer, AuthInput} from "@/components/Container";

export const SignupForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema) // 🔐 Zod be bouncin' at the door
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            // 📡 Yeetin' data to the backend
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                credentials: 'include' // 🍪 Cookie monster mode
            });

            const result = await response.json();

            // 🚨 Backend said "nah fam"
            if (!response.ok) {
                if (result.errors) {
                    Object.entries(result.errors).forEach(([field, message]) => {
                        setError(field as keyof SignUpFormData, {
                            type: 'server',
                            message: message as string
                        });
                    });
                }
                throw new Error(result.message || 'Signup failed harder than my sleep schedule');
            }

            toast.success('Account created! Welcome to the squad! 🚀');
        } catch (error) {
            toast.error(
                error instanceof Error ? error.message : 'Bruh moment - something broke 💀'
            );
        }
    };

    return (
        <AuthFormContainer title="Join the Party 🎊">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <AuthInput
                    {...register('username')}
                    type="text"
                    placeholder="Pick a fire username"
                    error={errors.username?.message}
                    disabled={isSubmitting}
                />

                <AuthInput
                    {...register('password')}
                    type="password"
                    placeholder="Secret sauce (8+ chars)"
                    error={errors.password?.message}
                    disabled={isSubmitting}
                />

                <AuthInput
                    {...register('confirmPassword')}
                    type="password"
                    placeholder="Say the secret sauce again"
                    error={errors.confirmPassword?.message}
                    disabled={isSubmitting}
                />

                <AuthButton loading={isSubmitting}>
                    {isSubmitting ? 'Working magic... ✨' : 'Let me in!'}
                </AuthButton>
            </form>
        </AuthFormContainer>
    );
};