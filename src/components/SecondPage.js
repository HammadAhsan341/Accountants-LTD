import React from 'react';


const Accountant = () => {
    return (
        <div className="relative">
            <div className="flex ">
                <div className="w-full relative">
                    <img src={"/images/manHoldLaptop.png"} alt="" className="w-full max-h-80" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-left text-[rgb(55,83,111)] p-8">
                        <h1 className="text-3xl font-bold mb-4 mt-36 ml-[-200px] px-64" style={{ width: '870px', height: '50px' }}>
                            Trusted ACCOUNTANTS <span className="font-extrabold">&amp; BUSINESS ADVISORS</span>
                        </h1>
                        <div className="mb-40 mt-8 px-64 py-4">
                            <button className="flex items-center justify-center bg-[#4b9ced] text-white px-4 py-4 mr-4" style={{ width: '143px', height: '35px', marginLeft: '-200px' }}>
                                Consult Now
                            </button>
                        </div>

                    </div>

                </div>
            </div>

            <div class="flex flex-wrap mt-10">
                <div class="w-full lg:w-1/2 p-4 px-24 ">
                    <p class="text-lg">
                        <h1 className='text-[rgb(55,83,111)] lg:text-4xl md:text-3xl text-2xl font-extrabold pb-lg'>What is Lorem Ipsum?</h1>
                        <p className='pt-lg lg:text-sm text-xs mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <p className='pt-lg lg:text-sm text-xs mt-6'>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    </p>
                </div>

                <div class="w-full lg:w-96 p-4 mt-10">
                    <div class="bg-[#37536f] text-white p-8 rounded-lg">
                        <h2 class="text-3xl font-bold mb-4">30% Off on All Services</h2>
                        <form>
                            <div class="mb-4">
                                <label for="fullname" class="block text-lg">Full Name:</label>
                                <input type="text" id="fullname" class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div class="mb-4">
                                <label for="phone" class="block text-lg">Phone Number:</label>
                                <input type="tel" id="phone" class="px-4 py-2 rounded-lg w-full" />
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-lg">Email:</label>
                                <input type="email" id="email" class="px-4 py-2 rounded-lg w-full" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>

            <div className='flex items-center px-24 py-2 mt-10'>
                <div className="flex flex-row items-center">
                    <img src={"/images/Location.png"} alt="" className="w-24 h-24 mr-4" />
                    <div className="text-left">
                        <h1 className="text-base text-black font-bold">Address</h1>
                        <p className='text-sm '>kharian cantt, kharian punjab pakistan.</p>
                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <img src={"/images/Email.png"} alt="" className="w-24 h-24 mr-4" />
                    <div className="text-left">
                        <h1 className="text-base text-black font-bold">Email Us</h1>
                        <p className='text-sm'>Support.acc@gmail.com major.acc@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center">
                    <img src="/images/tele-phone.jpg" alt="" className="w-24 h-24 mr-4" />
                    <div className="text-left">
                        <h1 className="text-base text-black font-bold">Call Us</h1>
                        <p className=" text-sm">kharian cantt, kharian punjab pakistan.</p>
                    </div>

                </div>

            </div>

        </div >
    )
}
export default Accountant;