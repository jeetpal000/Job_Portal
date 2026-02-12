
import { employerDetails } from '@/src/components/pages/employerSettingPage/employerAction'
import EmployerSettingForms from '@/src/components/pages/employerSettingPage/EmployerSettingForms'
import React from 'react'

const EmployerSetting = async() => {
    const employerData = await employerDetails();
    console.log("employerData", employerData)
  return (
    <div className='p-4'>
    <EmployerSettingForms initialData={{
      username: employerData.username,
      description: employerData.description,
      email: employerData.email,
      companyname: employerData.companyname,
      organisationType: employerData.organisationType,
      teamSize: employerData.teamSize,
      location: employerData.location,
      websiteUrl: employerData.websiteUrl,
      yearOfEstablishment: employerData.yearOfEstablishment?.toString(),
      avatarUrl:employerData.user.user?.avatarUrl,
    }} />
    </div>
  )
}

export default EmployerSetting