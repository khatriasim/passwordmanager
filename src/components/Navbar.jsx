import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-400 '>
        <div className="mycontainer flex items-center px-4 justify-between py-5 h-14">

        <div className="logo font-bold text-4xl mask-radial-from-neutral-900">Passod</div>

      <button className='flex justify-between gap-2 hover: ring-white rounded-2xl p-1 py-1 cursor-pointer hover:bg-amber-100'>
      <lord-icon
    src="https://cdn.lordicon.com/kdduutaw.json"
    trigger="hover"
    colors="primary:#000000,secondary:#c7166f">
</lord-icon>
       <span className='mt-2 font-bold'>Login</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
