import Link from "next/link"
import React from "react"
import ThemeSwitch from "@components/ThemeSwitch";

const Navigation = () => {
    return (
        <div className="sticky top-0 z-20 py-2 bg-white md:py-6 md:mb-6 dark:bg-black">
            <div className="container flex items-center justify-between px-4 mx-auto lg:max-w-4xl">
                <div className="flex items-start">
                    <Link href="/">
                        <a className={"font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-red-500 hover:text-orange-500 capitalize dark:text-white"}>
                            HY
                        </a>
                    </Link>
                    
                </div>
                <ThemeSwitch/>
            </div>
        </div>
    )
}

export default Navigation;