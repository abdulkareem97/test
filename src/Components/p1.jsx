import React from 'react'

const p1 = () => {
    const [open,setOpen] = useState(false)
  return (
    <div className="bg-gray-900 text-white flex  justify-between px-6 py-3 relative">
    <div className="text-3xl flex items-center">
      Tailwind CSS
    </div>

    <div className="flex items-center text-xl md:hidden">
      <span onClick={()=>setOpen(!open)}> 🍔</span>
    </div>

    <div className={`absolute top-16 bg-slate-900 flex flex-col w-full ${open ? 'left-0'  : '-left-full'} transition-all  items-center md:static md:flex-row md:w-fit `}>
      <span className="p-3 hover:bg-black rounded-md cursor-pointer">About</span>
      <span className="p-3 hover:bg-black rounded-md cursor-pointer">About</span>
      <span className="p-3 hover:bg-black rounded-md cursor-pointer">About</span>
     
    </div>


  </div>
  )
}

export default p1