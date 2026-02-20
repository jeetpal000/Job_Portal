"use client"
import { Delete, Edit, Loader, LocationEdit, Trash2, } from 'lucide-react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../ui/alert-dialog"
import { Button } from "../../ui/button"
import { deleteEmployerJob } from './employerAllJobAction';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Job {
    _id: string;
    title: string;
    location: string;
    jobType: string;
    workType: string;
    jobLevel: string;
    currency: string;
    minSalary: number | null;
    maxSalary: number | null;
    date: string | Date;
}

interface EmployerAllJobProps {
    data: Job[];
}


const EmployerAllJob: React.FC<EmployerAllJobProps> = ({ data }) => {
    const [jobs, setJobs] = useState(data);
    const router = useRouter()
    if (data.length === 0) {
        return <h1 className='text-2xl text-[white] font-bold text-center mt-10'>No Job Posted Yet!....</h1>
    }


    const deleteJob = async (id: string) => {
        const result = await deleteEmployerJob(id);
        toast.success(result?.message);
        setJobs(prev => prev.filter(job => job._id !== id));
    };
    const editJob = (id: string) => {
        router.push(`/employer-dashboard/jobs?id=${id}`)
    }



    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            {
                jobs.map((job) => {
                    return <div key={job._id} className='flex flex-col gap-3 shadow-[0px_0px_5px_rgba(0,0,0,0.85)] rounded-md p-3 hover:shadow-[0px_0px_5px_rgba(255,255,255,0.8)] hover:scale-105 transition duration-150 hover:brightness-150 hover:saturate-150 group'>
                        <div className="flex items-center justify-between">
                            <h2 className='text-bold text-xl font-bold'>{job.title.charAt(0).toUpperCase() + job.title.slice(1)}</h2>
                            <div className="flex items-center gap-2">
                                <Edit onClick={()=>editJob(job._id)} className='hover:bg-[rgba(0,0,0,0.1)] w-8 h-8 active:scale-90 cursor-pointer hover:text-[#19faf3] p-1 rounded group-hover:animate-pulse' />

                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button className='hover:bg-[rgba(0,0,0,0.1)] bg-transparent cursor-pointer active:scale-90'  ><Trash2 className='w-50 h-50 text-[red]' /></Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className='bg-[rgba(0,0,0,0)] backdrop-brightness-0 backdrop-contrast-0 backdrop-sepia-100'>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                This action cannot be undone. This will permanently delete the job for <span className='font-bold text-black'>{'"'}{job.title}{'"'}</span>
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => deleteJob(job._id)}
                                                className='bg-red-500 animate-pulse'>Delete</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <p className='px-2 bg-[rgba(0,0,0,0.1)] rounded'>{job.jobType.charAt(0).toUpperCase() + job.jobType.slice(1)}</p>
                            <p className='px-2 bg-[rgba(0,0,0,0.1)] rounded'>{job.workType.charAt(0).toUpperCase() + job.workType.slice(1)}</p>
                            <p className='px-2 bg-[rgba(0,0,0,0.1)] rounded'>{job.jobLevel.charAt(0).toUpperCase() + job.jobLevel.slice(1)}</p>
                        </div>
                        <div className="">
                            <p className="flex items-center gap-1"><LocationEdit className='w-3.35 h-3.75' /><span>{job.location}</span></p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="">
                                <span className="">{job.currency}</span>{" "}<span className="">{job.minSalary} - </span> {" "} <span className="">{job.maxSalary}</span>
                            </div>
                            <div className="">
                                <code className="">{new Date(job.date).toLocaleDateString("en-IN")}</code>
                            </div>
                        </div>

                    </div>
                })
            }
        </div>
    )
}

export default EmployerAllJob;



