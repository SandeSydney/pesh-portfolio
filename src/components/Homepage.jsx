import React, { useEffect } from 'react'
import Navigation from './Navigation'
import { percentageCounter } from './PercentageCounter'
import copywriter from '../assets/copywriter.png'
import techwriting from '../assets/article-writing.png'
import proofreading from '../assets/proof-reader.png'
import antellope from '../assets/antellope.jpg'

function Homepage() {
    useEffect(() => {
        percentageCounter()
    }, [])
    return (
        <>
            <Navigation />

            {/* Hero Section */}
            <section className='hero p-20 h-[85vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col justify-center items-center'>
                <div className='flex-1 flex flex-col justify-center items-center text-white space-y-5'>
                    <p className='text-4xl opacity-70 uppercase text-center md:text-7xl'>Hello, I'm Patience Zawadi</p>
                    <p className='text-center md:text-4xl '>Software Copywriter | Technical Writer | Proof-reader</p>
                </div>
                <a className='border-2 text-white mb-20 px-5 py-2 rounded uppercase animate-bounce hover:px-8 hover:animate-none' href="">Let's Talk</a>
            </section>

            <section className="bg-[#f0f0f0] p-20 min-h-screen flex flex-col justify-center items-center space-y-8 text-lg px-8">
                <h2 className='text-2xl text-center'><b>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</b></h2>
                <hr className='w-12 h-2 bg-[#F46624] rounded' />
                <p className='max-w-3xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p className='max-w-3xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <p className='max-w-3xl'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </section>

            <section className='container mx-auto py-8 min-h-screen bg-white'>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-10 p-4">
                    <div className='flex flex-col m-1 min-h-[20vh] items-center justify-between text-center space-y-3 p-2'>
                        <p className="text-7xl text-[#7ebec5]"><span className='percentage' data-value="69">0</span>%</p>
                        <p className='text-lg'>
                            of marketers say converting leads into customers is their top priority
                        </p>
                    </div>
                    <div className='flex flex-col m-1 h-[20vh] items-center justify-between text-center space-y-3 p-2'>
                        <p className="text-7xl text-[#7ebec5]"><span className='percentage' data-value="33">0</span>%</p>
                        <p className='text-lg'>
                            of a sales rep's time is wasted creating or looking for content to share with prospects
                        </p>
                    </div>
                    <div className='flex flex-col m-1 h-[20vh] items-center justify-between text-center space-y-3 p-2'>
                        <p className="text-7xl text-[#7ebec5]"><span className='percentage' data-value="90">0</span>%</p>
                        <p className='text-lg'>
                            of content created by marketing is ignored by sales reps and never shown to prospects
                        </p>
                    </div>
                    <div className='flex flex-col m-1 h-[20vh] items-center justify-between text-center space-y-3 p-2'>
                        <p className="text-7xl text-[#7ebec5]"><span className='percentage' data-value="50">0</span>%</p>
                        <p className='text-lg'>
                            more sales-ready leads is what firms generate by investing in sales-driven lead nurturing
                        </p>
                    </div>
                </div>
                <div className='text-center'><h2 className='text-2xl'><b>My Services</b></h2></div>
                <div className="grid grid-cols-1 md:grid-cols-3 my-10">
                    <div className="border shadow-md rounded p-2 flex flex-col m-2 h-fit md:min-h-[48vh] items-center space-y-3">
                        <img loading='lazy' className='h-30%] w-[25%]' src={techwriting} alt=""/>
                        <p className='text-xl'><b>Software Copywriting</b></p>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cumque excepturi ad. Labore tempora assumenda nesciunt nostrum rerum odio corporis temporibus tenetur, iusto doloribus sapiente alias recusandae similique dolore sunt!</p>
                        <button className='bg-blue-700 hover:bg-blue-500 px-5 py-2 text-white rounded'>More</button>
                    </div>
                    <div className="border shadow-md rounded p-2 flex flex-col m-2 h-fit md:min-h-[48vh] items-center space-y-3">
                        <img loading='lazy' className='h-30%] w-[25%]' src={copywriter} alt=""/>
                        <p className='text-xl'><b>Technical Writing</b></p>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cumque excepturi ad. Labore tempora assumenda nesciunt nostrum rerum odio corporis temporibus tenetur, iusto doloribus sapiente alias recusandae similique dolore sunt!</p>
                        <button className='bg-blue-700 hover:bg-blue-500 px-5 py-2 text-white rounded'>More</button>
                    </div>
                    <div className="border shadow-md rounded p-2 flex flex-col m-2 h-fit md:min-h-[48vh] items-center space-y-3">
                        <img loading='lazy' className='h-30%] w-[25%]' src={proofreading} alt=""/>
                        <p className='text-xl'><b>Proof Reading</b></p>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cumque excepturi ad. Labore tempora assumenda nesciunt nostrum rerum odio corporis temporibus tenetur, iusto doloribus sapiente alias recusandae similique dolore sunt!</p>
                        <button className='bg-blue-700 hover:bg-blue-500 px-5 py-2 text-white rounded'>More</button>
                    </div>
                </div>
            </section>

            <section className="h-[85vh] md:bg-[url('assets/antellope.jpg')] md:bg-cover">
                <div className="h-[100%] bg-[#f16537] opacity-90 grid place-content-center p-8">
                    <p className='text-white text-3xl max-w-3xl text-center leading-snug'>Do you need relevant, insightful, lead-nurturing content that helps you achieve your set targets? 
                    <br />I'll be Glad to hear it.</p>
                    <button className='border border-white mx-auto px-8 py-3 rounded mt-20 text-white text-lg'>Reach Out</button>
                </div>
            </section>

            <section className='min-h-[100dvh]'></section>
        </>
    )
}

export default Homepage