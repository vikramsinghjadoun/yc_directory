import Link from "next/link";
import { headers } from 'next/headers';
import { auth, signIn, signOut } from "../../auth";
import github from "next-auth/providers/github";

export async function Navbar() {

    const session = await auth();
console.log(session,"session");
    // Get current URL path from headers
    const headersList = await headers();
    const currentPath = headersList.get("x-invoke-path") || "/";

    // Helper function to check if link is active
    const isActive = (path: string) => {
        return currentPath === path ? "text-blue-500" : "text-gray-600 hover:text-blue-500";
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-center h-16">
                    {/* Logo/Brand */}
                    {session && session?.user ? (
                        <>
                            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-500">
                                YourBrand
                            </Link>

                            <div className="hidden md:flex space-x-8">
                                <Link href="/" className={`${isActive("/")} transition-colors duration-200`}>
                                    Home
                                </Link>
                                <Link href="/about" className={`${isActive("/about")} transition-colors duration-200`}>
                                    About
                                </Link>
                                <Link href="/projects" className={`${isActive("/projects")} transition-colors duration-200`}>
                                    Projects
                                </Link>
                                <Link href="/contact" className={`${isActive("/contact")} transition-colors duration-200`}>
                                    Contact
                                </Link>
                            </div>


                            <div className="flex items-center space-x-4">

                                <form action={async ()=>{
                                    'use server'
                                    await signOut({redirectTo: '/'})
                                }}>
                                    <button
                                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                        type="submit"
                                    >
                                        Sign Out
                                    </button>
                                </form>
                            </div>
                        </>
                    ) : (
                        <form
                            action={async () => {
                                'use server'
                                await signIn('github')
                            }}
                        >
                            <button
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors duration-200"
                                type="submit"
                            >
                                Sign In with GitHub
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}
