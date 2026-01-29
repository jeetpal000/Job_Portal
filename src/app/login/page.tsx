"use client"
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';

import { LockIcon, Mail} from 'lucide-react';
import Link from 'next/link';
import { loginAction } from './login.Action';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { loginUserData, loginUserSchema } from '@/src/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';


const Login: React.FC = () => {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(loginUserSchema)});

  // console.log(formData)

  const onSubmit = async (data: loginUserData) => {
    const result = await loginAction(data);
    if (result.status === "SUCCESS") toast.success(result.message)
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">

            <div className="grid gap-2">
              <Label htmlFor="email">Email Address*</Label>
              <div className="relative">
                <Mail className='absolute top-1/2 transform -translate-y-1/2 left-3 w-4 h-4 text-gray-500' />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  {...register("email", {required: "Email is required"})}
                   className={`focus-visible:border-green-500 focus-visible:ring-green-100 focus-visible:outline-none ${errors.email? "focus-visible:border-orange-500 focus-visible:ring-orange-100": ""} pl-10 !important`}
                />
              </div>
              {errors.email &&(
              <p className='text-sm text-destructive'>{errors.email.message}</p>
            )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password *</Label>
              <div className='relative'>
                <LockIcon className='absolute top-1/2 transform -translate-y-1/2 left-3 w-4 h-4 text-gray-500' />
                <Input id="password"  type="password" required placeholder='create a strong password' 
                {...register("password", {required: "Password is required"})}
                  className={`focus-visible:border-green-500 focus-visible:ring-green-100 focus-visible:outline-none ${errors.password? "focus-visible:border-orange-500 focus-visible:ring-orange-100": ""} pl-10 !important`}
                />
              </div>
              {errors.password &&(
              <p className='text-sm text-destructive'>{errors.password.message}</p>
            )}
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <CardDescription>
          If you have no account
          <Link href="/register" className='underline text-blue-500'> Register here</Link>
        </CardDescription>

      </CardFooter>
    </Card>
  )
}

export default Login