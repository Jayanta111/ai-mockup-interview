import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardLayout() {
  return (
    <><div>Home</div><UserButton />
    </>
  )
}

export default DashboardLayout