"use client"
import { Button } from '@/src/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { User } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';
import {registrationServer } from "../register/registrationServer.action"
import { toast } from 'sonner';


interface RegistrationFormData {
  name: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "applicant" | "employer"
}

const Register: React.FC = () => {
  const [formData, setFormdata] = useState<RegistrationFormData>({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "applicant"
  });
  const handleInputChange = (name: string, value: string) => {
    setFormdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async(e:FormEvent)=>{
    e.preventDefault();

    const registrationData = {
      name: formData.name.trim(),
      userName: formData.userName.trim(),
      email: formData.email.trim(),
      password: formData.password.trim(),
      role: formData.role.trim(),
    }

    if(formData.password !== formData.confirmPassword) return toast.error("Password is not matched")

    const result = await registrationServer(registrationData);
    if(result.status === "SUCCESS") toast.success(result.message)
      else toast.error(result.message)
  }
 

  return (
    <Card className="w-full max-w-md m-auto">
      <CardHeader>
        <CardTitle className='text-3xl text-center font-bold'>Join Our Job Portal</CardTitle>
        <CardDescription className='text-center'>
          Create your account to get started
        </CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="fullname">Full Name *</Label>
              <div className="relative">
                <User className='absolute top-1/2 transform -translate-y-1/2 left-3 w-4 h-4' />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)}
                  className='pl-10'
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="userName">Username *</Label>
              <Input
                id="userName"
                name="userName"
                type="text"
                placeholder="choose a username"
                required
                value={formData.userName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("userName", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="select">I am a *</Label>
              <Select
              name='role'
                value={formData.role}
                onValueChange={(value: "applicant" | "employer") => handleInputChange("role", value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="job Applicant" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Job Applicant</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>

                  </SelectGroup>
                  <SelectSeparator />
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password *</Label>
              <Input id="password" name='password' type="password" required placeholder='create a strong password'
                value={formData.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password *</Label>
              <Input id="password" name='confirmPassword' type="password" required placeholder='Comfirm your password'
                value={formData.confirmPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("confirmPassword", e.target.value)}
              />
            </div>
        <Button type="submit" className="w-full">
          Create Account
        </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <CardDescription>
          Already have an account
          <Link href="/login" className=' underline text-blue-500'> Login here</Link>
        </CardDescription>

      </CardFooter>
    </Card>
  )
}

export default Register