import {HomeIcon} from "@heroicons/react/24/solid";

export default function Nav() {
    return(
        <div className="relative">
            <nav className="sticky top-0 z-50 bg-blue-100 shadow">
                <div className="flex-1 flex justify-center gap-8">
                    <a href="#" className="hover:underline text-blue-600">
                        <HomeIcon className="h-6 w-6 text-blue-500" />
                    </a>
                    <a href="#" className="hover:underline text-blue-600">About</a>
                    <a href="#" className="hover:underline text-blue-600">Sign In</a>
                    <a href="#" className="hover:underline text-blue-600">Sign Up</a>
                </div>
            </nav>
        </div>
    )
}