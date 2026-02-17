
'use client'

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

import { zodResolver } from '@hookform/resolvers/zod';
import { jobPostSchema, jobPostSchemaData } from '@/src/validation/auth.validation';
import { JOB_LEVEL, JOB_TYPE, MIN_EDUCATION, SALARY_CURRENCY, SALARY_PERIOD, WORK_TYPE } from "../../../config/constant"
import { jobPostAction } from './jobAction';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';



const JobForm = () => {

  const { register, handleSubmit, control, setValue, watch, formState: { errors, isSubmitting, isDirty
  } } = useForm<jobPostSchemaData>({
    resolver: zodResolver(jobPostSchema),
  });



  const handleFormSubmit = async (data: jobPostSchemaData) => {
    const result = await jobPostAction(data);
    console.log("result", result)
    toast.success(result?.message, {
      position: "top-right", onAutoClose() {

      },
    })
    // console.log(data)
  };


  return (
    <div className='p-4 border-2 rounded-md max-w-150 mx-auto relative backdrop-blur-2xl bg-[#ffffff3f]'>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='space-y-3'>
        <div className="">
          <FieldLabel htmlFor="name">Job Title</FieldLabel>
          <Input
            type="text"
            placeholder="e.g. Senior Frontend Developer"
            required
            {...register("title")}
            className=''
          />
        </div>
        {errors.title && (
          <p className='text-sm text-destructive'>{errors.title.message}</p>
        )}

        <div className="grid grid-cols-3 gap-2">
          <Field>
            <FieldLabel htmlFor='organisationType'> Job Type*</FieldLabel>
            <Controller name="jobType" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Job type" /> </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {JOB_TYPE.map((type) => (
                    <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
          </Field>
          {errors.jobType && (
            <p className='text-sm text-destructive'>{errors.jobType.message}</p>
          )}


          <Field>
            <FieldLabel htmlFor='organisationType'>Work Type *</FieldLabel>
            <Controller name="workType" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full">
              <SelectValue placeholder="Select work type" /> </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {WORK_TYPE.map((type) => (
                    <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
            {errors.workType && (
              <p className='text-sm text-destructive'>{errors.workType.message}</p>
            )}
          </Field>


          <Field>
            <FieldLabel htmlFor='organisationType'>Job Level *</FieldLabel>
            <Controller name="jobLevel" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full">
              <SelectValue placeholder="Select job level" /></SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {JOB_LEVEL.map((type) => (
                    <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
            {errors.jobLevel && (
              <p className='text-sm text-destructive'>{errors.jobLevel.message}</p>
            )}
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="">

            <FieldLabel htmlFor="company">Location (Optional)</FieldLabel>
            <Input
              id="company"
              type="text"
              placeholder="e.g. New York. NY or Remote"
              required
              {...register("location")}
            />
          </div>
          {errors.location && (
            <p className='text-sm text-destructive'>{errors.location.message}</p>
          )}
          <div className="">

            <FieldLabel htmlFor="company">Tags (Optional)</FieldLabel>
            <Input
              id="company"
              type="text"
              placeholder="e.g. TypeScript, React, Node.js"
              required
              {...register("tags")}
            />
          </div>
          {errors.tags && (
            <p className='text-sm text-destructive'>{errors.tags.message}</p>
          )}
        </div>

        <div className="grid grid-cols-4 gap-2">
          <Field>
            <FieldLabel htmlFor="textarea-message">Min Salary<span className='text-xs'>(Optional)</span></FieldLabel>
            <Input
              id="company"
              type="text"
              placeholder="e.g. 50000"
              required
              {...register("minSalary")}
            />
          </Field>
          {errors.minSalary && (
            <p className='text-sm text-destructive'>{errors.minSalary.message}</p>
          )}
          <Field>
            <FieldLabel htmlFor="textarea-message">Max Salary <span className='text-xs'>(Optional)</span></FieldLabel>
            <Input
              id="company"
              type="text"
              placeholder="e.g. 800000"
              required
              {...register("maxSalary")}
            />
          </Field>
          {errors.maxSalary && (
            <p className='text-sm text-destructive'>{errors.maxSalary.message}</p>
          )}
          <Field>
            <FieldLabel htmlFor="textarea-message">Currency</FieldLabel>
            <Controller name="currency" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full">
              <SelectValue placeholder="Currency" /> </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {SALARY_CURRENCY.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
          </Field>
          {errors.currency && (
            <p className='text-sm text-destructive'>{errors.currency.message}</p>
          )}

          <Field>
            <FieldLabel htmlFor="textarea-message">Period</FieldLabel>
            <Controller name="period" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full">
              <SelectValue placeholder="Period" /> </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {SALARY_PERIOD.map((type) => (
                    <SelectItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
          </Field>
          {errors.period && (
            <p className='text-sm text-destructive'>{errors.period.message}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Field>
            <FieldLabel htmlFor="textarea-message">Minimum Education <span className='text-xs'>(Optional)</span></FieldLabel>
            <Controller name="minEducation" control={control} rules={{ required: true }} render={({ field }) => (<Select onValueChange={field.onChange} value={field.value} required> <SelectTrigger className="w-full">
              <SelectValue placeholder="Select education level" /> </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {MIN_EDUCATION.map((type) => (
                    <SelectItem key={type} value={type}>{type.charAt(0).toLocaleUpperCase() + type.slice(1)}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>)} />
          </Field>
          {errors.minEducation && (
            <p className='text-sm text-destructive'>{errors.minEducation.message}</p>
          )}
          <Field>
            <FieldLabel htmlFor="date">Expiry Date <span className='text-xs'>(Optional)</span></FieldLabel>
            <Input
              id="date"
              type="date"
              placeholder='mm/dd/yyyy'
              {...register("date")}
            />
          </Field>
          {errors.date && (
            <p className='text-sm text-destructive'>{errors.date.message}</p>
          )}
        </div>
        <div className="">
          <Field>
            <FieldLabel htmlFor="experience">Experience Requirements <span className='text-xs'>(Optional)</span></FieldLabel>
            <Input
              id="experience"
              type="text"
              placeholder='e.g. 3+ Years of React development'
              {...register("experience")}
            />
          </Field>
          {errors.experience && (
            <p className='text-sm text-destructive'>{errors.experience.message}</p>
          )}
        </div>
        <div className="">
          <Field>
            <FieldLabel htmlFor="experience">Job Description</FieldLabel>
            <Textarea id="textarea-message" required placeholder="Type your message here."
              {...register("description")}
            />
          </Field>
          {errors.description && (
            <p className='text-sm text-destructive'>{errors.description.message}</p>
          )}
        </div>
        <Button type='submit' disabled={isSubmitting} >{isSubmitting&&<Loader /> }{isSubmitting? "Posting": "Post"}</Button>
        {isDirty&&(<p className='text-muted-foreground text-xs'>No changes to save</p>)}

      </form>
    </div>
  )
}

export default JobForm;