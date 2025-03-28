import { signUpSchema } from "../../lib/types.ts";

export async function POST(req: Request) {
    try {
        const body: unknown = await req.json();
        const result = signUpSchema.safeParse(body);

        if (!result.success) {
            const zodErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                zodErrors[issue.path[0]] = issue.message;
            });

            return new Response(
                JSON.stringify({ errors: zodErrors }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        return new Response(
            JSON.stringify({ success: true }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
                error: error instanceof Error ? error.message : "Unknown error",
            }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
