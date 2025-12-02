import React from 'react'
import Socials from './Socials'

function Footer() {
  return (
    <footer className='bg-secondary py-12'>
      <div className="container mx-auto">
        <div className='flex flex-col items-center justify-between'>
          {/* docials */}
          <Socials color="primary"/>
          {/* copyright */}
          <div className="text-muted-foreground pt-5">
            Copyright &copy; Ahmed Abdelelah. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer