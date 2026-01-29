"use client"
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { User } from 'lucide-react';
import Link from 'next/link';
import { registrationServer } from "../register/registrationServer.action"
import { toast } from 'sonner';
import { Controller, useForm } from 'react-hook-form';
import { registerUserData, registerUserSchema } from '@/src/validation/auth.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';


const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerUserSchema)
  });

const router = useRouter();

  const onSubmit = async (data: registerUserData) => {
    const result = await registrationServer(data);
    if(result.status === "SUCCESS"){
      if(data.role === "employer"){
        router.push("/employer-dashboard")
      }else{
        router.push("/")
      }
    }
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
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="fullname">Full Name *</Label>
              <div className="relative">
                <User className='absolute top-1/2 transform -translate-y-1/2 left-3 w-4 h-4' />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  {...register("name")}
                  className='pl-10'
                />
              </div>
              {errors.name && (
                <p className='text-sm text-destructive'>{errors.name.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="userName">Username *</Label>
              <Input
                id="userName"
                type="text"
                placeholder="choose a username"
                required
                {...register("userName")}
                className={`focus-visible:border-green-500 focus-visible:ring-green-100 focus-visible:outline-none ${errors.userName ? "focus-visible:border-orange-500 focus-visible:ring-orange-100" : ""} !important`}
              />
            </div>
            {errors.userName && (
              <p className='text-sm text-destructive'>{errors.userName.message}</p>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter you email"
                required
                {...register("email")}
                className="focus-visible:border-green-500 focus-visible:ring-green-100 focus-visible:outline-none !important"
              />
            </div>
            {errors.email && (   
              <p className='text-sm text-destructive'>{errors.email.message}</p>
            )}
            <div> <Label htmlFor="role">I am a *</Label> <Controller name="role" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value}> <SelectTrigger className="w-full"> <SelectValue placeholder="Select role" /> </SelectTrigger> <SelectContent> <SelectGroup> <SelectItem value="applicant">Applicant</SelectItem> <SelectItem value="employer">Employer</SelectItem> </SelectGroup> </SelectContent> </Select>)} /> {errors.role && (<p className="text-sm text-destructive">{errors.role.message}</p>)} </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password *</Label>
              <Input id="password" type="password" required placeholder='create a strong password'
                {...register("password")}
              />
            </div>
            {errors.password && (
              <p className='text-sm text-destructive'>{errors.password.message}</p>
            )}
            <div className="grid gap-2">
              <Label htmlFor="password">Confirm Password *</Label>
              <Input id="confirmPassword" type="password" required placeholder='Comfirm your password'
                {...register("confirmPassword")}
              />
            </div>
            {errors.confirmPassword && (
              <p className='text-sm text-destructive'>{errors.confirmPassword.message}</p>
            )}
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