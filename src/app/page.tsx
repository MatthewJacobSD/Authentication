import {SignupForm} from "@/components/SignUp";
import {LoginForm} from "@/components/Login";

// 🏠 Homepage - just vibing with the form
export default function HomePage() {
  return (
      <div className="flex justify-evenly py-50 px-10">
        <SignupForm/>
        <LoginForm/>
      </div>
  )
}