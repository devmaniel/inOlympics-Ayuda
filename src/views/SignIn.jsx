import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4" style={{ backgroundColor: 'linear-gradient(to bottom, #1A5F7A, #2D9CDB)' }}>
      <form className="w-full max-w-[800px] space-y-6 rounded-lg border p-6 shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-left mb-6" style={{ color: '#1A5F7A' }}>Sign In</h1>
        <p className="text-[#4A5568] mb-6" >
        Welcome back! Please sign in with your Barangay Ayuda account credentials to access your assistance information and updates.
        </p>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-[#4A5568]">Username</Label>
            <Input type="text" id="username" placeholder="Enter username"
            className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
             />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-[#4A5568]">Password</Label>
            <Input type="password" id="password" placeholder="Enter password"
            className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
             />
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#1A5F7A] hover:bg-[#2D9CDB] text-white">
          Sign In
        </Button>
        <div className="mt-4 text-center">
  <p className="text-[#4A5568]">
    Don't have an account?{" "}
    <Link 
      to="/sign_up" 
      className="text-[#2D9CDB] hover:text-[#1A5F7A] font-semibold"
    >
      Sign up here
    </Link>
  </p>
</div>
      </form>
    </div>
  );
};

export default SignIn;
