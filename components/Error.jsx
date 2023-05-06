import { useRouter } from "next/router"
import Link from "next/link"

const Error = () => {
    const router = useRouter()
    const redirect = () => {
        setTimeout(() => {
            router.push('/login')
        }, 2000)
    }

    useEffect(() => {
        redirect()
    }, [])

  return (
    <>
        <div className='flex justify-center items-center h-screen'>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="text-[#FF0000] text-6xl z-[2]">
                <Link href='/'>
                    Error...
                </Link>
            </div>
        </div>
    </>
  )

}

export default Error