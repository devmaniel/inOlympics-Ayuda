import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form className="w-full max-w-[800px] space-y-6 rounded-lg border p-6 shadow-lg">
        <h1 className="text-2xl font-bold text-left mb-6">Sign Up</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          molestias facilis consectetur magnam in. Saepe!
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* First Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="Enter username" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Enter first name"
              />
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="middleName">Middle Name</Label>
              <Input
                type="text"
                id="middleName"
                placeholder="Enter middle name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input type="text" id="lastName" placeholder="Enter last name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                type="text"
                id="address"
                placeholder="House No/Street/Barangay"
              />
            </div>
          </div>
        </div>

        {/* Full Width File Upload */}
        <div className="space-y-2">
          <Label htmlFor="validId">Valid ID (upload picture)</Label>
          <Input
            type="file"
            id="validId"
            accept="image/*"
            className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
          />
        </div>

        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
