import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function Page() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:items-center md:gap-8">
          <div className="md:col-span-3">
            <img
              src="/Login.jpg" 
              className="rounded"
              alt="Login illustration" 
            />
          </div>

          <div className="md:col-span-1">
            <SignIn />
          </div>
        </div>
      </div>
    </section>
  )
}