import React from 'react'

const Footer = () => {
  return (
    <div className='flex items-center justify-between px-4 py-6 fixed bottom-0 w-full bg-amber-200'>
      <div className="logo font-bold text-2xl">Passod</div>
      <div className="flex gap-3 items-center">
        <p className='font-serif text-lg'>For your Passwords</p>
        <lord-icon
          src="https://cdn.lordicon.com/nvsfzbop.json"
          trigger="hover"
          colors="primary:#c71f16,secondary:#3080e8">
        </lord-icon>
      </div>
    </div>
  )
}

export default Footer