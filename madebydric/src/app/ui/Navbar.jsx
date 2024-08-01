import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className="p-5 w-1/3 rounded-full bg-slate-800/50 backdrop-blur-lg text-gray-300 text-xl">
            <div className="flex items-center justify-center space-x-4 ">
                <Link href="#" className=''>Home</Link>
                <Link href="#">Works</Link>
                <Link href="#">Socials</Link>
                <Link href="#">Contact</Link>
            </div>
        </nav>
    )
}