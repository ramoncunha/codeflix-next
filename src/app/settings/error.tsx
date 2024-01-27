'use client'

import React from "react";

export default function error () {
  return (
    <div className="text-red-500">
      <h1>Error Page</h1>
      <div>
        <p>Something went wrong</p>
        <button onClick={() => window.location.reload()}>Reload</button>
        <button onClick={() => window.location.href = '/'}>Home</button>
        <button onClick={() => window.location.href = '/login'}>Login</button>
        <button onClick={() => window.location.href = '/register'}>Register</button>
        <button onClick={() => window.location.href = '/dashboard'}>Dashboard</button>
        <button onClick={() => window.location.href = '/profile'}>Profile</button>
        <button onClick={() => window.location.href = '/settings'}>Settings</button>
        <button onClick={() => window.location.href = '/logout'}>Logout</button>
        <button onClick={() => window.location.href = '/forgot-password'}>Forgot Password</button>
        <button onClick={() => window.location.href = '/reset-password'}>Reset Password</button>
        <button onClick={() => window.location.href = '/verify-email'}>Verify Email</button>
      </div>
    </div>
  )
}