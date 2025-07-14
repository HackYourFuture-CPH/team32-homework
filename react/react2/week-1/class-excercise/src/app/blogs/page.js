'use client'
 
import { usePathname } from 'next/navigation'


export default function Blogs(){

  const pathname = usePathname() 
  useEffect(() => {
    // Do something here...
  }, [pathname])


    return(
        <>
        <h1>This id Blogs Page</h1>
<p>Current pathname: {pathname}</p>

        </>
    )
}