import React from 'react'
import ThemeToggle from '../buttons/ThemeToggle'

function WelcomeHeader() {
  return (
    <div className='flex items-center justify-end h-[72px]'>
        <ThemeToggle />
    </div>
  )
}

export default WelcomeHeader