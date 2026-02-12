import { logoutUserAction } from "@/src/features/session/auth.session"

const applicant = () => {
  
  return (
  <>
    <div>applicant </div>
    <button onClick={logoutUserAction} >Logout</button>
  </>
  )
}

export default applicant