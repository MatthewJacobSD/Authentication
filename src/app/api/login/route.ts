import { loginSchema } from "@/lib/types";
import { NextResponse } from "next/server";

// In-memory storage (fake user tracking)
const fakeUserDB: Set<string> = new Set(); // Stores usernames that "logged in"

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const result = loginSchema.safeParse(body);

        if (!result.success) {
            const zodErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                zodErrors[issue.path[0]] = issue.message;
            });

            return NextResponse.json(
                { errors: zodErrors, message: "Fix these and try again chief" },
                { status: 400 }
            );
        }

        const { username } = result.data;

        // 🛑 If the username is already used, tell them it's taken
        if (fakeUserDB.has(username)) {
            return NextResponse.json(
                { error: "This username is already in use! Try another one." },
                { status: 409 } // 🔥 Conflict
            );
        }

        // ✅ Otherwise, "register" them (fake add to DB)
        fakeUserDB.add(username);

        return NextResponse.json(
            {
                success: true,
                user: { id: Math.random().toString(36).substring(7), username },
                message: "Welcome aboard! You're in. 🎉"
            },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            {
                message: "Our bad - try again?",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 }
        );
    }
}
