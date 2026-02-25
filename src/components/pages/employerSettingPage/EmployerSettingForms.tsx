'use client'
import { Label } from '@radix-ui/react-label';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';
import { Field, FieldLabel } from '../../ui/field';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select"
import { employerUpdateProfileAction } from './employerAction';
import { zodResolver } from '@hookform/resolvers/zod';
import { employerProfileSchema, employerProfileSchemaData } from '@/src/validation/auth.validation';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';
import { UploadButton } from '@/src/utils/uploadthing';
import Image from 'next/image';

const organisationTypeOptions = ["Developer", "Video editor", "Business", "Design"]
const teamSizeOptions = [{ type: "Just me" }, { type: "2-10 employees" }, { type: "11-50 employees" }, { type: "51-200 employees" }, { type: "201-500 employees" }, { type: "501-1000 employees" }, { type: "1001+ employees" }];





const EmployerSettingForms = ({ initialData }: {
  initialData?: Partial<employerProfileSchemaData>
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const { register, handleSubmit, control, setValue, watch, formState: { errors, isSubmitting, isDirty
  } } = useForm<employerProfileSchemaData>({
    resolver: zodResolver(employerProfileSchema),
    defaultValues: {
      username: initialData?.username || "",
      description: initialData?.description || "",
      email: initialData?.email || "",
      companyname: initialData?.companyname || "",
      organisationType: initialData?.organisationType || undefined,
      teamSize: initialData?.teamSize || undefined,
      yearOfEstablishment: initialData?.yearOfEstablishment || "",
      websiteUrl: initialData?.websiteUrl || "",
      location: initialData?.location || "",
      avatarUrl: initialData?.avatarUrl || ""
    }
  });

  const avatarUrl = watch("avatarUrl");

  const handleRemoveProfile = () => {
    setValue("avatarUrl", "");
  }

  const handleFormSubmit = async (data: employerProfileSchemaData) => {
    const result = await employerUpdateProfileAction(data);
    console.log("result", result)
    toast.success(result?.message, {
      position: "top-right", onAutoClose() {

      },
    })
    // console.log(result)
  };


  return (
    <div className='p-4 border-2 rounded-md max-w-150 mx-auto relative backdrop-blur-2xl bg-[#ffffff3f]'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-3'>
        <div className="">
          <label htmlFor="name">username</label>
          <Input
            type="text"
            placeholder="Enter your full name"
            required
            {...register("username")}
            className=''
          />
        </div>
        {errors.username && (
          <p className='text-sm text-destructive'>{errors.username.message}</p>
        )}
        <div className="">
          <label htmlFor="email">email</label>
          <Input
            id="emial"
            type="text"
            placeholder="Enter your email address"
            required
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className='text-sm text-destructive'>{errors.email.message}</p>
        )}
        <div className="">
          <label htmlFor="company">Company</label>
          <Input
            id="company"
            type="text"
            placeholder="Enter your company name"
            required
            {...register("companyname")}
          />
        </div>

        <div className="">
          <Field>
            <FieldLabel htmlFor="textarea-message">Company Description *</FieldLabel>
            <Textarea id="textarea-message" required placeholder="Type your message here."
              {...register("description")}
            />
          </Field>
        </div>
        {errors.description && (
          <p className='text-sm text-destructive'>{errors.description.message}</p>
        )}
        <div className="grid grid-cols-2 gap-3">

          <div className="">
            <Label htmlFor='organisationType'>Organisation Type *</Label>
            <Controller name="organisationType" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full hover:border-blue-500 ">
              <SelectValue placeholder="Select organisation type" /> </SelectTrigger>
              <SelectContent className=''>
                <SelectGroup>
                  {organisationTypeOptions.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
          </div>

          <div className="">
            <Label htmlFor='teamSize'>Team Size *</Label>
            <Controller name="teamSize" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full hover:border-blue-500 ">
              <SelectValue placeholder="Select organisation type" /> </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {teamSizeOptions.map((type) => (
                    <SelectItem key={type.type} value={type.type}>{type.type}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
          </div>





        </div>

        <div className="grid grid-cols-2 gap-3">

          <div className="">
            <Label htmlFor='yearOfEstablishment'>Year of Establishment *</Label>
            <Input
              id='yearOfEstablishment'
              type='text'
              placeholder="e.g., 2020"
              maxLength={4}
              {...register("yearOfEstablishment")}
            />
          </div>
          <div className="">
            <Label htmlFor='location'>Location *</Label>
            <Input
              id='location'
              type='text'
              placeholder="e.g., Pune Banglore"
              {...register("location")}
            />
          </div>
        </div>

        <div className="">
          <Label htmlFor='websiteUrl'>Website URL (Optional)</Label>
          <Input
            id='websiteUrl'
            type='url'
            placeholder="https://www.yourcompany.com"
            {...register("websiteUrl")}
          />
        </div>



        {avatarUrl ? (
          <div className="">
            <div className="">

              <Image
                src={avatarUrl}
                width={200}
                height={200}
                alt="Profile picture"
                className='rounded-md shadow-[3px_3px_15px_#fff] hover:scale-[1.2] transition-all duration-100'
              />
            </div>
            <Button onClick={handleRemoveProfile}>Remove Profile</Button>
          </div>
        ) : (<div className=" pb-10">
          <UploadButton className='bg-[#ffffff2b] mx-auto px-2 rounded backdrop-blur-2xl'
            endpoint="imageUploader"
            onUploadBegin={() => setIsUploading(true)}
            onClientUploadComplete={(res) => {
              // Do something with the response
              const profilePic = res[0];
              setValue("avatarUrl", profilePic.ufsUrl, {
                shouldDirty: true,
              });
              toast.success("Image Uploaded");
              setIsUploading(false);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.

              toast.error(`Upload Failed: ${error.message}`);
              setIsUploading(false);
            }}
          />
        </div>)}



        <div className="absolute transform -translateX-1/2  -translateY-1/2 bottom-0 left-1/3 pb-4 flex">
          <Button className='cursor-pointer' type='submit'
            disabled={isUploading || isSubmitting}
          >
            {isSubmitting && <Loader className='w-4 h-4 animate-spin' />}
            {isSubmitting ? "Saving Changes..." : "Save Changes"}
          </Button>
          {!isDirty && (<p className='text-muted-foreground text-xs'>No changes to save</p>)}
        </div>
      </form>
    </div>
  )
}

export default EmployerSettingForms;