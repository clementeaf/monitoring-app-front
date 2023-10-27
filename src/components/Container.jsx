/* eslint-disable react/prop-types */
export default function Container({children}) {
  return (
    <div 
        className="p-4 bg-white rounded-md shadow-md border border-black/10 
        flex flex-col items-center w-[280px]
        sm:flex-col sm:w-[620px] 
        md:flex-col md:w-[740px] 
        lg:flex-row lg:w-[1000px]"
    >
     {children}
    </div>
  )
}
