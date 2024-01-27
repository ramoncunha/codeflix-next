import BuggyButton from "@/app/components/BuggyButton";
import { getUserInfo } from "@/app/lib/settings";
import React from "react"

async function User() {
  const { name, email, age } = await getUserInfo()
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{age}</p>

      <div className='mt-4'>
        <BuggyButton />
      </div>
    </div>
  )
}

export default User;