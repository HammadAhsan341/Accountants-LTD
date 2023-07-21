import React from 'react';

export default function Accountantfess() {
    return (
        <div>
            <div className="flex">
                <div className="w-full relative">
                    <img src={"/images/Accountantref.png"} alt="" className="w-full h-200" style={{ height: '520px' }} />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-8">
                        <h1
                            className="text-6xl ml-auto text-center mb-20 text-white"
                            style={{ width: '569px', height: '103px', marginRight: '40px' }}
                        >
                            Get <span className="text-[#dfbf4c]">$250</span> off your Accountant Fees
                        </h1>

                        <div className="flex justify-center mt-4 py-4">
                            <div className="flex items-center mb-20">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="rounded-full border-2 border-gray-300 py-4 px-6 text-xl"
                                    style={{ width: "486px", height: "47px", marginRight: "-30px" }}
                                />
                                <button className="bg-[#dfbf4c] text-white font-semibold px-5 py-3 rounded-r-full">
                                    Invite
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-4 py-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="www.accountant.co.uk"
                        className="rounded-full border-2 border-gray-400 py-2 px-4 text-xl"
                        style={{ width: "486px", height: "43px", marginRight: "-30px" }}
                    />
                    <span className="absolute right-0 mt-4 transform -translate-y-1/2 px-2 text-4xl text-gray-400 mr-16">
                        |
                    </span>
                    <button
                        className="absolute right-0 top-0 text-black  justify-center font-semibold mt-1 px-4 py-2 "
                        style={{ marginRight: "-25px" }}
                    >
                        Copy Link
                    </button>
                </div>

            </div>
            <div className='text-3xl mt-10 font-bold ml-14 text-black text-center'>
                ITS IS EASY TO EARN CREDIT IN FEW SIMPLE STEPS
            </div>


            <div className='flex items-center mt-10 ml-16 px-24 py-2'>
                <div className="flex flex-col items-center mr-12">
                    <img src={"/images/Circle.png"} alt="" className="w-14 h-14" />
                    <h1 className="text-2xl font-bold text-[#162e74] mt-2">REFER A FRIEND</h1>
                    <p className="text-center py-2 px-4 w-80 font-semibold">Share referral link to every friend you know to purchase a course from edureka.</p>
                </div>

                <div className="flex flex-col items-center mr-14">
                    <img src={"/images/Referal.png"} alt="" className="w-14 h-14" />
                    <h1 className="text-2xl font-bold text-[#399dff] mt-2">MAKE SIGN UP </h1>
                    <p className="text-center py-2 px-4 w-72 font-semibold">
                        When your friend signs up using your referral link, you will earn 250 credits.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <img src={"/images/dairy.png"} alt="" className="w-14 h-14" />
                    <h1 className="text-2xl font-bold text-[#dfbf4c] mt-2">DO ENROLLS</h1>
                    <p className="text-center py-2 px-4 w-72 font-semibold">When your friend Enrolls in a course, you will again earn 250 credits.</p>
                </div>
            </div>

            <div className="flex flex-col mb-20 lg:flex-row mt-0">
                <div className="lg:w-1/2 p-4">
                    <img src={"/images/teamwork.png"} alt="" className="w-full h-96" style={{ height: '450px' }} />
                </div>
                <div className="bg-white text-black p-8 rounded-lg py-6 lg:w-1/2">
                    <h2 className="text-3xl font-bold ml-14 mb-4">$250 OFF ACCOUNT FEES</h2>
                    <h2 className="text-xl ml-20 mb-8 font-semibold ">Sign up and claim your voucher</h2>
                    <form>
                        <div className="mb-4 lg:flex">
                            <input type="text" id="firstname" placeholder="First name" className="px-4 py-2 rounded-full border border-gray-400 lg:mr-2 lg:mb-0 w-56 h-12" />
                            <input type="text" id="lastname" placeholder="Last name" className="px-4 py-2 rounded-full border border-gray-400 w-56 h-12" />
                        </div>
                        <div className="mb-4">
                            <input type="tel" id="phone" placeholder="Phone" className="px-4 py-2 rounded-full border border-gray-400  h-12" style={{ width: '458px' }} />
                        </div>
                        <div className="mb-4">
                            <input type="email" id="email" placeholder="Email" className="px-4 py-2 rounded-full border border-gray-400 w-full lg:w-96 h-12" style={{ width: '458px' }} />
                        </div>
                        <div className="mb-4">
                            <input type="password" id="password" placeholder="Password" className="px-4 py-2 rounded-full border border-gray-400 w-full lg:w-96 h-12" style={{ width: '458px' }} />
                        </div>
                        <div>
                            <button className="bg-yellow-500 text-white rounded-full px-4 py-2 h-12" style={{ width: '458px' }}>Sign up</button>
                        </div>
                        <div className="text-gray-500  text-xs ml-4 font-semibold"style={{ width: '458px' }}>
                            By clicking "Sign up," you agree to the terms and conditions and privacy policy.
                        </div>
                    </form>

                </div>
            </div>

        </div>
    );
}