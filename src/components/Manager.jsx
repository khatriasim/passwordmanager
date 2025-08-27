import React, { useState , useEffect} from 'react'
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {


  const ref = useRef()
  const passwordRef = useRef()

  const [form, setform] = useState({site: "", username:"", password:""})
  const [passwordArray, setpasswordArray] = useState([])

useEffect(() => {
    let passwords = localStorage.getItem("passwords")
    if (passwords) {
     setpasswordArray(JSON.parse(passwords))

  }
}, [])


 const showPassword = () => {
  if (passwordRef.current.type === "password") {

    passwordRef.current.type = "text"
    ref.current.src = "/closeeye.svg"
  } else {

    passwordRef.current.type = "password" 
    ref.current.src = "/openeye.svg"
  }
}
  
  const savePassword = () => {
    if (form.site.length >3 && form.username.length > 3 && form.password.length>3) {
      
      setpasswordArray([...passwordArray, {...form, id : uuidv4()}]) 
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]))
      console.log([...passwordArray, {...form, id: uuidv4()}])
      setform({site: "", username:"", password:""})
  }else{
    alert("reqirement not filled")
  }
}

const deletePassword = (id) =>{
  // alert("Are you sure ")ee
  let c = confirm("Are You Sure About it")
  if (c) {
    
    setpasswordArray(passwordArray.filter(item=>item.id!==id))
    localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)))
  }
}
const editPassword = (id) =>{
setform(passwordArray.filter(i=>i. id===id)[0])
setpasswordArray(passwordArray.filter(item=>item.id!==id))
}

  const handlechange = (e) => {
    setform({...form, [e.target.name]: e.target.value})
  }
  

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
        </div>
      </div>
<div className=" md:mycontainer pb-20">
    <h1 className='text-4xl font-bold mask-radial-from-neutral-900 text-center'>Passod</h1>
    <p className='text-center'>Your Password Manager</p>
      <div className="text-black flex flex-col p-4 gap-8 items-center">
        <input  onChange={handlechange} placeholder='Enter website URL' className="rounded-full border-2 border-amber-400 w-full p-4 py-1" type="text" name="site" value={form.site} />
        <div className="flex w-full flex-col md:flex-row justify-between gap-8">
        <input onChange={handlechange} placeholder='Enter Username' className=" text-black rounded-full border-2 border-amber-400 w-full p-4 py-1" type="text" name="username" value={form.username} />
     <div className="relative">
       <input ref={passwordRef} onChange={handlechange} placeholder='Enter Password'  className="rounded-full border-2 border-amber-400 w-full p-4 py-1" type="password" name="password"  value={form.password} />
 <span  onClick={showPassword} className=' cursor-pointer absolute right-[5px] top-[6px]'><img ref={ref} src="/openeye.svg" alt="eye" /></span>
     </div>
      
        </div>
          <button onClick={savePassword} className='flex justify-center hover:bg-amber-200 items-center bg-amber-100 gap-4 border border-amber-400 rounded-full w-fit px-4 py-2 '>
     <lord-icon
    src="https://cdn.lordicon.com/mfdeeuho.json"
    trigger="hover"
    state="hover-swirl"
    colors="primary:#30c9e8,secondary:#e8308c"
    >
</lord-icon>
    Save</button>
      </div>
      <div className="passwords">
        <h2 className=' pb-4 text-center text-xl font-bold text-fuchsia-600 '>Your Passwords</h2>
{passwordArray.length === 0 && <div>No Password to show</div>}
{passwordArray.length != 0 && 


        <table className="rounded-md overflow-hidden table-auto w-full bg-amber-100">
  <thead className='bg-slate-200'>
    <tr>
      <th className='py-2'>Site</th>
      <th className='py-2'>Username</th>
      <th className='py-2'>Password</th>
      <th className='py-2'>Action</th>
    </tr>
  </thead>
  <tbody  className='overflow-hidden  col-end-3'>
    {passwordArray.map((items, index)=>{
return<tr key= {index}>
      <td className='py-2 border-white text-center w-32'> <a className='text-black' href={items.site} target="_blank">{items.site}</a></td>
      <td className='py-2 border-white text-center w-32'>{items.username}</td>
      <td className='py-2 border-white text-center w-32'>{items.password}</td>
      <td className=' py-2 border-white text-center w-32'>
        <span onClick={()=>{editPassword(items.id)}} className='px-1'><lord-icon
    src="https://cdn.lordicon.com/exymduqj.json"
    trigger="hover"
    colors="primary:#000000,secondary:#c7166f"
    >
</lord-icon></span> <span  onClick={()=>{deletePassword(items.id)}}><lord-icon
    src="https://cdn.lordicon.com/jzinekkv.json"
    trigger="hover"
    colors="primary:#c71f16,secondary:#3080e8">
</lord-icon></span></td>
      

    </tr>
})}

  </tbody>
</table>
}
      </div>
</div>
    </>
  )
}

export default Manager