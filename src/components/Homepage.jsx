import React from 'react'
import Navigation from './Navigation'

function Homepage() {
    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className='hero p-20 h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center'>
                <div className='flex-1 flex flex-col justify-center items-center text-white space-y-5'>
                    <p className='text-4xl opacity-70 uppercase text-center md:text-7xl'>Hello, I'm Patience Zawadi</p>
                    <p className='text-center md:text-4xl '>Software Copywriter | Technical Writer | Proof-reader</p>
                </div>
                <a className='border text-white mb-20 px-5 py-2 rounded uppercase animate-bounce hover:px-8 hover:animate-none' href="">Let's Talk</a>
            </section>

            <section className="bg-[#F7F7F7]p-20 min-h-screen flex flex-col justify-center items-center space-y-8 text-lg px-8">
                <h2 className='text-4xl text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                <hr className='w-12 h-2 bg-[#F46624] rounded'/>
                <p className='max-w-3xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p className='max-w-3xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p className='max-w-3xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </section>
        </>
    )
}

export default Homepage