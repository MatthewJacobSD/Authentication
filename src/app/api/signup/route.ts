// ✨ This endpoint handles new account vibes
import { signUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        // 📝 Grabbing the signup deets
        const body = await req.json();
        const result = signUpSchema.safeParse(body);

        // ❌ Validation failed? Drop the mixtape (of errors)
        if (!result.success) {
            const zodErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                zodErrors[issue.path[0]] = issue.message;
            });

            return NextResponse.json(
                {
                    errors: zodErrors,
                    message: "These fields look sus 👀"
                },
                { status: 400 } // 👎 Bad request
            );
        }

        // 🧐 Check if username taken (fake example)
        const usernameTaken = await checkUsernameInDB(result.data.username);
        if (usernameTaken) {
            return NextResponse.json(
                { error: "Username already claimed, pick another one!" },
                { status: 409 } // ⚔️ Conflict
            );
        }

        // ✅ All valid? Create that account
        return NextResponse.json(
            {
                success: true,
                user: { id: "456", username: result.data.username },
                message: "Welcome to the squad! 🚀"
            },
            { status: 201 } // 🆕 Created
        );

    } catch (error) {
        // 💀 Database said "ain't no way"
        return NextResponse.json(
            {
                message: "Our servers are vibing too hard - try later?",
                error: error instanceof Error ? error.message : "Unknown error",
            },
            { status: 500 } // 🚨 Disaster
        );
    }
}

// Fake username check (replace with real DB call)
async function checkUsernameInDB(username: string) {
    return username === "takenusername";
}