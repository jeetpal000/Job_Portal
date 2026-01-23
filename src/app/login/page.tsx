"use client"
import { Button } from '@/src/components/ui/button';
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';

import { LockIcon, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';


interface LoginFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormdata] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const handleInputChange = (name: string, value: string) => {
    setFormdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  console.log(formData)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {

    } catch (error) {

    }
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
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address*</Label>
              <div className="relative">
                <Mail className='absolute top-1/2 transform -translate-y-1/2 left-3 w-4 h-4 text-gray-500' />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={formData.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                  className='pl-10'
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password *</Label>
              <div className='relative'>
                <LockIcon className='absolute top-1/2 transform -translate-y-1/2 left-3 w-4 h-4 text-gray-500' />
                <Input id="password" name='password' type="password" required placeholder='create a strong password'
                  value={formData.password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange("password", e.target.value)} className='pl-10' />
              </div>
            </div>

          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <CardDescription>
          If you have no account
          <Link href="/register" className='underline text-blue-500'> Register here</Link>
        </CardDescription>

      </CardFooter>
    </Card>
  )
}

export default Login