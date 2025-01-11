import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4" style={{ backgroundColor: 'linear-gradient(to bottom, #1A5F7A, #2D9CDB)' }}>
      <form className="w-full max-w-[800px] space-y-4 rounded-lg border p-6 shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-left mb-6"  style={{ color: '#1A5F7A' }}>Sign Up</h1>
        <p className="text-[#4A5568] mb-6">
        Welcome to the Barangay Ayuda Registration Portal. Please fill out all required information accurately 
        to ensure proper processing of your application for assistance.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-[#4A5568]">Username</Label>
              <Input type="text" id="username" placeholder="Enter username" 
              className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#4A5568]">Email</Label>
              <Input type="email" id="email" placeholder="Enter email"
              className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#4A5568]">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="middleName" className="text-[#4A5568]">Middle Name</Label>
              <Input
                type="text"
                id="middleName"
                placeholder="Enter middle name"
                className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#4A5568]">Last Name</Label>
              <Input type="text" id="lastName" placeholder="Enter last name" 
              className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-[#4A5568]">Address</Label>
              <Input
                type="text"
                id="address"
                placeholder="House No/Street/Barangay"
                className="border-[#1A5F7A] focus:ring-[#2D9CDB] focus:border-[#2D9CDB]"
              />
            </div>
          </div>
        </div>

        {/* Full Width File Upload */}
        <div className="space-y-2 mb-4">
          <Label htmlFor="validId" className="text-[#4A5568]">Valid ID (upload picture)</Label>
          <Input
            type="file"
            id="validId"
            accept="image/*"
            className="cursor-pointer border-0 bg-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
            file:text-sm file:font-semibold file:bg-[#2D9CDB] file:text-primary-foreground hover:file:bg-[#3182CE] focus:outliine-none focus:ring-0"
          />
        </div>

        <Button type="submit" className="w-full bg-[#1A5F7A] hover:bg-[#2D9CDB] text-white">
          Sign Up
        </Button>
        <div className="mt-4 text-center">
  <p className="text-[#4A5568]">
    Already have an account?{" "}
    <Link 
      to="/sign_in" 
      className="text-[#2D9CDB] hover:text-[#1A5F7A] font-semibold"
    >
      Sign in here
    </Link>
  </p>
</div>
      </form>
    </div>
  );
};

export default SignUp;
