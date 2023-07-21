import React from 'react';

const Card1 = ({ title, description }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden bg-white shadow-lg mr-4" style={{ width: '230px', height: '234px', backgroundColor: '#018596', fontFamily: 'Poppins', marginRight: '10px' }}>
      <h2 className="text-xl font-bold mb-2 text-white" style={{ fontSize: '1.5rem', maxWidth: '180px', marginLeft: '20px', marginTop: '20px' }}>{title}</h2>
      <p className="mb-4 text-white" style={{ fontSize: '0.75rem', maxWidth: '180px', marginLeft: '20px', marginTop: '10px' }}>{description}</p>
    </div>
  );
};

const Home = () => {


  return (
    <div className="bg-gray-100">
      <nav className="flex items-center justify-between bg-cover bg-center bg-no-repeat bg-opacity-50 p-4 w-full mt-4">
        <img src="/images/logo11 png.png" alt="Background Image" className="w-40 h-20 ml-40" />
        <div className="flex items-center">
          <a href="#" className="text-black mx-4 hover:text-blue-700 text-lg">About</a>
          <a href="#" className="text-black mx-4 hover:text-blue-700 text-lg">Services</a>
          <a href="#" className="text-black mx-4 hover:text-blue-700 text-lg">Sector</a>
          <a href="#" className="text-black mx-4 hover:text-blue-700 text-lg">Structures</a>
          <a href="#" className="text-black mx-4 hover:text-blue-700 text-lg">Insights</a>
          <a href="#" className="text-black mx-4 hover:text-blue-700 text-lg">+92316-7168682</a>
          <button className="bg-[#158f9e] text-white justify-center rounded-full px-4 py-1 mx-4 mb-2 w-36 h-10 text-lg">Contact Us</button>
        </div>
      </nav>



      {/* Backcover Image */}

      <div className="relative">
        <img src="/images/backcover.png" alt="Background Image" className="w-full" style={{ height: '490px' }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-left text-white p-8">
          <h1 className="text-4xl font-bold mb-4" style={{ width: '353px', height: '50px', marginLeft: '150px' }}>
            Accountancy, Bookkeeping & Tax Solutions
          </h1>
          <p className="text-lg text-gray-200 text-left" style={{ width: '498px', height: '19px', marginTop: '65px', marginLeft: '150px' }}>
            Our friendly and experienced team provides accountancy, bookkeeping, and tax solutions for individuals and businesses throughout Hampshire, Surrey, and Middlesex. Contact us today!
          </p>
          <div className="mt-6">
            <button className="bg-white text-blue-500 font-bold rounded-full px-4 py-2 mr-4" style={{ width: '143px', height: '45px', marginTop: '90px', marginLeft: '150px', color: '#158f9e' }}>Get in Touch</button>
            <button className="bg-transparent border border-white text-339daa font-bold rounded-full px-4 py-2" style={{ width: '143px', height: '45px' }}>Services</button>
          </div>
        </div>
      </div>

      {/* Cards */}

      <div className="flex flex-row justify-center mt-8 mb-20">
        <div className="max-w-xs rounded-lg overflow-hidden bg-white shadow-lg mr-4" style={{ width: '220px', height: '350px', marginLeft: 20 }}>
          <img src="/images/consultation.png" alt="Small Image" className="w-20 h-20 object-cover mt-8 ml-8" />
          <div className="p-4">
            <h1 className="text-2xl font-bold ml-6 mb-2">Advisory</h1>
            <p className="text-gray-700 h-10 w-40 justify-center font-bold ml-6 text-xs text-left font-poppins">
              There’s no price for good advice – discuss ideas, developments, and strategies with our team of industry experts.
            </p>

            <button className="bg-[#158f9e] text-white rounded-full px-4 py-2 mt-20 ml-6">Make an Enquiry</button>
          </div>
        </div>


        {/* 2nd */}
        <div className="max-w-xs rounded-lg overflow-hidden bg-white shadow-lg mr-4" style={{ width: '220px', height: '350px', marginLeft: 20 }}>
          <img src="/images/consultation.png" alt="Small Image" className="w-20 h-20 object-cover mt-8 ml-8" />
          <div className="p-4">
            <h1 className="text-2xl font-bold ml-6 mb-2">Advisory</h1>
            <p className="text-gray-700 h-10 w-40 justify-center font-bold ml-6 text-xs text-left font-poppins">
              There’s no price for good advice – discuss ideas, developments, and strategies with our team of industry experts.
            </p>

            <button className="bg-[#158f9e] text-white rounded-full px-4 py-2 mt-20 ml-6">Make an Enquiry</button>
          </div>
        </div>

        {/* 3RD */}
        <div className="max-w-xs rounded-lg overflow-hidden bg-white shadow-lg mr-4" style={{ width: '220px', height: '350px', marginLeft: 20 }}>
          <img src="/images/consultation.png" alt="Small Image" className="w-20 h-20 object-cover mt-8 ml-8" />
          <div className="p-4">
            <h1 className="text-2xl font-bold ml-6 mb-2">Advisory</h1>
            <p className="text-gray-700 h-10 w-40 justify-center font-bold ml-6 text-xs text-left font-poppins">
              There’s no price for good advice – discuss ideas, developments, and strategies with our team of industry experts.
            </p>

            <button className="bg-[#158f9e] text-white rounded-full px-4 py-2 mt-20 ml-6">Make an Enquiry</button>
          </div>
        </div>

        {/* 4TH */}
        <div className="max-w-xs rounded-lg overflow-hidden bg-white shadow-lg mr-4" style={{ width: '220px', height: '350px', marginLeft: 20 }}>
          <img src="/images/consultation.png" alt="Small Image" className="w-20 h-20 object-cover mt-8 ml-8" />
          <div className="p-4">
            <h1 className="text-2xl font-bold ml-6 mb-2">Advisory</h1>
            <p className="text-gray-700 h-10 w-40 justify-center font-bold ml-6 text-xs text-left font-poppins">
              There’s no price for good advice – discuss ideas, developments, and strategies with our team of industry experts.
            </p>

            <button className="bg-[#158f9e] text-white rounded-full px-4 py-2 mt-20 ml-6">Make an Enquiry</button>
          </div>
        </div>
      </div>
      {/* NEXT PART Man Holding Briefcase */}

      <div className="relative">
        <div className="bg-gray-100 mb-4" style={{ backgroundColor: '#f3f4f6', width: '990px', height: '300px', marginLeft: '140px', borderRadius: '15px', marginBottom: '80px' }}>
          <img src="/images/businessman-holding-briefcase.png" alt="Background Image" style={{ width: '100%', height: '100%', borderRadius: '15px' }} />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-end text-black p-8">
          <h1 className="text-sm font-bold mb-6 text-right" style={{ width: '1000px', height: '20px', marginRight: '200px' }}>
            Take the next step with Black & White chartered certified accountants
          </h1>
          <p className="text-sm text-black mb-16 text-left" style={{ width: '498px', height: '19px', marginRight: '160px' }}>
            Become one of the many sole traders, start-ups, and companies that have chosen to make the Black and White difference by putting themselves and their passion first. Join the rest of our happy clients, and take the first step up the stairway to success.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-[#018596] text-white font-bold rounded-full px-4 py-2 mr-4" style={{ width: '163px', height: '40px', marginRight: '485px', marginTop: '10px' }}>Get in Touch</button>
          </div>
        </div>
      </div>

      {/* Business Accounting Services */}

      <div className="relative flex flex-col items-center">
        <div className="bg-gray-100 flex items-center justify-center flex-col" style={{ width: '520px', height: '88px', borderRadius: '15px' }}>
          <h1 className="text-5xl font-bold">Business Accounting</h1>
          <h1 className="text-5xl font-bold">Services</h1>
        </div>

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <p className="text-lg text-black  mb-16 " style={{ width: '1000px', height: '19px', marginLeft: '10px', marginTop: '25px' }}>
            Warr & Co offer a full range of business accounting services to companies across the UK from our offices in Stockport, Manchester, and London. We offer complete solutions as well as select business accounting services, allowing you to pick and choose the best accounting services suited to your requirements.
          </p>
        </div>
      </div>

      {/* Cards */}

      <div className="flex items-center justify-center py-12 flex-col">
        {/* First Row */}
        <div className="py-2 flex flex-row gap-4 px-12">
          <Card1
            title="Payroll & Auto Enrollment"
            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
          <Card1
            title="Payroll & Auto Enrolment"
            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
          <Card1
            title="Payroll & Auto Enrolment"
            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
          <Card1
            title="Payroll & Auto Enrolment"
            description="Our payroll and auto enrolment  services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
        </div>

        {/* Second Row */}
        <div className="py-2 flex flex-row gap-4 px-12">
          <Card1
            title="Payroll & Auto Enrollment"
            description="Our payroll and auto enrolment services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
          <Card1
            title="Payroll & Auto Enrolment"
            description="Our payroll and auto enrolment services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
          <Card1
            title="Payroll & Auto Enrolment"
            description="Our payroll and auto enrolment services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
          <Card1
            title="Payroll & Auto Enrolment"
            description="Our payroll and auto enrolment services offer you peace of mind by covering all of your company payroll activities ensuring you and your team paid on time and that your complaint with auto enrolment."
          />
        </div>
      </div>

      {/* Add Some More Given Text Discription After Cards */}

      <div className="text-center text-3xl text-black py-4 px-12 bg-gray-100">
        <h1 className="text-5xl font-bold text-center leading-tight mb-4 mt-4" style={{ width: '800px', marginLeft: '200px' }}>
          Warr & Co – Accounting Services For Businesses
        </h1>
        <h1 className="text-lg text-justify py-4" style={{ width: '1000px', height: '19px', marginLeft: '80px', marginTop: '25px', fontFamily: 'poppins' }}>As experienced small business accountants, Warr & Co have the expert knowledge which can help your small to medium business grow. Most people who start up in business do so because they have a good business proposition, not because they are experts in the legal, financial, and fiscal aspects of running a business. That’s where we step in.</h1>
        <p
          className="py-4 text-left font-bold " style={{ marginLeft: '80px', marginTop: '85px' }}>Business Accountancy Services
        </p>
        <p
          className="text-lg text-justify py-4 " style={{ width: '1000px', height: '19px', marginLeft: '80px', fontFamily: 'poppins' }}>
          We’re passionate about business finance, legislation and regulations so that you don’t have to be! Think of Warr & Co as an extension of your business, rather than an accounting service for your business. We specialise in accounting for a wide variety of business types, particularly SMEs, start-ups and growing small businesses. We often work with clients through the difficult early stages of growing a company from the ground up. Our team of business accountants have centuries of experience between them, having worked with thousands of UK businesses.
        </p>
        <p className="text-lg py-4 text-justify" style={{ maxWidth: '1000px', height: '19px', marginLeft: '80px', marginTop: '125px', fontFamily: 'Poppins' }}>
          We understand that the business landscape in the UK can be exciting, but also daunting for those looking to live the dream and start their own business. The business financial landscape is always in flux, so much so that many new or smaller businesses struggle to keep up.
        </p>

        <p
          className="text-lg py-4 text-justify" style={{ maxWidth: '1000px', height: '19px', marginLeft: '80px', marginTop: '45px', fontFamily: 'Poppins' }}>
          These factors can often seem overwhelming to an entrepreneur and this is where we can help, by evaluating your ideas in a constructive manner, helping you to develop them into a feasible business, and supporting your ongoing business development.
        </p>
        <p
          className="text-lg py-4 text-justify" style={{ maxWidth: '1000px', height: '19px', marginLeft: '80px', marginTop: '45px', fontFamily: 'Poppins' }}>
          We can also help you:
        </p>
        <div className="text-lg bg-gray-100 max-w-1000 mx-auto px-4 sm:px-6 lg:px-8 py-4 mt-2" style={{ fontFamily: 'Poppins', marginLeft: '80px', maxWidth: '1000px' }}>
          <p className="text-justify">
            &#8226; Decide on the most suitable structure for your business – sole trader, partnership, limited liability partnership, or limited company.
          </p>
          <p className="text-justify">
            &#8226; Prepare a business plan, cashflow projections, budgets, and trading forecasts to prove the financial viability of your business and demonstrate this to potential investors / bank.
          </p>
          <p className="text-justify">
            &#8226; Assess your finance requirements and advise on the best sources of finance.
          </p>
          <p className="text-justify">
            &#8226; Help you establish relationships with banks, solicitors, etc. via our well-established network of contacts.
          </p>
          <p className="text-justify">
            &#8226; Complete any registration procedures with Companies House and HM Revenue and Customs.
          </p>
          <p className="text-justify">
            &#8226; Deal with company secretarial issues.
          </p>
          <p className="text-justify">
            &#8226; Set up an internal accounting system for complying with statutory requirements.
          </p>
          <p className="text-justify">
            &#8226; Whether your business is already up and running or you’re just starting out, you need a partner who understands small business accounting. Our experienced accountants can not only handle your tax, financials, and VAT but can also advise on many aspects of business accounting.
          </p>
        </div>



      </div>

      {/* FAQS */}

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <h1 className="text-4xl font-bold text-center leading-tight mb-8 mt-32" >
          Revolut Business FAQs
        </h1>

        <h2 className="text-lg mb-4  relative" style={{ paddingBottom: '8px', marginLeft: '300px' }}>
          How much will it cost to open a business account?
          <span className="border-b-2 border-black text-2xl font-bold absolute right-0 bottom-0"
            style={{
              borderBottom: '2px solid black',
              width: '77%',
              marginRight: '278px',
              transform: 'translateX(10%)'
            }}
          ></span>
          <span
            className="w-6 h-6  rounded-full absolute right-25 bottom-1/2 transform translate-x-4 translate-y-1/2 flex items-center justify-center text-white text-lg font-bold"
            style={{
              backgroundColor: '#018596',
              marginLeft: '650px', paddingBottom: '6px'
            }}
          >
            +
          </span>
          <span className="border-b-2 border-black absolute font-bold right-0 bottom-1/2 transform translate-x-4 translate-y-1/2"></span>
        </h2>


        <h2 className="text-lg mb-4  relative" style={{ paddingBottom: '8px', marginLeft: '300px' }}>
          What do I need to open a business account?
          <span className="border-b-2 border-black text-2xl font-bold absolute right-0 bottom-0"
            style={{
              borderBottom: '2px solid black',
              width: '77%',
              marginRight: '278px',
              transform: 'translateX(10%)'
            }}
          ></span>
          <span
            className="w-6 h-6  rounded-full absolute right-25 bottom-1/2 transform translate-x-4 translate-y-1/2 flex items-center justify-center text-white text-lg font-bold"
            style={{
              backgroundColor: '#018596',
              marginLeft: '650px', paddingBottom: '6px'
            }}
          >
            +
          </span>
          <span className="border-b-2 border-black absolute font-bold right-0 bottom-1/2 transform translate-x-4 translate-y-1/2"></span>
        </h2>

        <h2 className="text-lg mb-4  relative" style={{ paddingBottom: '8px', marginLeft: '300px' }}>
          How much will it cost to open a business account?
          <span className="border-b-2 border-black text-2xl font-bold absolute right-0 bottom-0"
            style={{
              borderBottom: '2px solid black',
              width: '77%',
              marginRight: '278px',
              transform: 'translateX(10%)'
            }}
          ></span>
          <span
            className="w-6 h-6  rounded-full absolute right-25 bottom-1/2 transform translate-x-4 translate-y-1/2 flex items-center justify-center text-white text-3 font-bold"
            style={{
              backgroundColor: '#018596',
              marginLeft: '650px', paddingBottom: '6px'
            }}
          >
            +
          </span>
          <span className="border-b-2 border-black absolute font-bold right-0 bottom-1/2 transform translate-x-4 translate-y-1/2"></span>
        </h2>

        <h2 className="text-lg mb-4 relative" style={{ paddingBottom: '8px', marginLeft: '300px' }}>
          How do I open a business account with Revolut Business?
          <span className="border-b-2 border-black text-2xl font-bold absolute right-0 bottom-0"
            style={{
              borderBottom: '2px solid black',
              width: '77%',
              marginRight: '278px',
              transform: 'translateX(10%)'
            }}
          ></span>
          <span
            className="w-6 h-6  rounded-full absolute right-25 bottom-1/2 transform translate-x-4 translate-y-1/2 flex items-center justify-center text-white text-lg font-bold "
            style={{
              backgroundColor: '#018596',
              marginLeft: '650px', paddingBottom: '6px'
            }}
          >
            +
          </span>
          <span className="border-b-2 border-black absolute font-bold right-0 bottom-1/2 transform translate-x-4 translate-y-1/2"></span>
        </h2>
      </div >
      {/* Footer */}

      {/* <footer className="bg-[#018596] mt-20">
        <div className="flex flex-col items-start pl-4 pb-4">
          <div className='text-white text-sm w-80 h-16 mr-20 '>
            <img className="w-40 h-26 mt-32 " src={"images/logo11 png.png"} alt="logo11 png.png" />

          </div>
          <div className="mb-4">
            <p className="text-white text-sm w-80 h-16 mr-20 mt-32">
              Warr & Co offer a full range of business accounting services to companies across the UK from our offices in Stockport.
            </p>
          </div>


          <div className="flex justify-center mb-6 mt-0 text-white text-lg text-center ml-96">
            <ul className="mr-20 text-left">
              <li className="text-1xl font-bold mb-6">Support</li>
              <li className="mb-6">FAQ</li>
              <li className="mb-6">NEWS ARTICLE</li>
              <li className="mb-6">PRIVACY POLICY</li>
              <li className="mb-6">TERMS & CONDITION</li>
            </ul>

            <ul className="mr-20 text-left">
              <li className="text-1xl font-bold mb-6">Site</li>
              <li className="mb-6">Home</li>
              <li className="mb-6">About</li>
              <li className="mb-6">Contact</li>
              <li className="mb-6">Services</li>
              <li className="mb-6">Blogs</li>
            </ul>

            <ul className="text-justify mb-6 ml-4">
              <li className="text-1xl font-bold mb-6">Contact</li>
              <li className="mb-6">(+62)816524689</li>
              <li className="mb-6">SUPPORTMAIL@DEARLY.COM</li>
              <li className="mb-6">Address</li>
              <li className="mb-6">23 VALLEY LANE AUSTIN</li>
              <li className="mb-6">07:00 AM - 19:00 PM</li>
            </ul>
          </div>


          <div className=' w-full text-left text-white'>_______________________________________________________________________________________________________________________________________________________________________________________</div>
          <div className="flex justify-between text-right text-white">
            <div className="px-12 py-4">
              copyright &copy; 2022 Designed by aethonint.digital
            </div>
            <div className="flex justify-end px-24">
              <p className="mr-4">Term</p>
              <p className="mr-4">Privacy</p>
              <p>Support</p>
            </div>
          </div>
        </div>

      </footer > */}
      <footer className="bg-[#018596] text-white p-8">
        <div className="max-w-7xl mx-auto  mt-14  grid grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="col-span-1 ml-40">
            <div className="flex justify-center items-center ">
              <img src="/images/logo11 png.png" alt="Logo" className="w-60 h-20" />
            </div>
            <p className="text-left  font-semibold text-xs w-64 h-20">
              Warr & Co offer a full range of business accounting services to companies across the UK from our offices in Stockport.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-span-1 ml-64 w-40">
            <h2 className="text-sm font-bold mb-6 ">Support</h2>
            <ul>
              <li className='mb-6 text-sm'>FAQ</li>
              <li className='mb-6 text-sm'>News Article</li>
              <li className='mb-6 text-sm'>Privacy Policy</li>
              <li className='mb-6 text-sm'>Terms & Condition</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1 ml-36">
            <h2 className="text-sm font-bold mb-4">Site</h2>
            <ul>
              <li className='mb-6 text-sm'>Home</li>
              <li className='mb-6 text-sm'>About</li>
              <li className='mb-6 text-sm'>Contact</li>
              <li className='mb-6 text-sm'>Service</li>
              <li className='mb-6 text-sm'>Blog</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-1">
            <h2 className="text-sm font-bold mb-4">Contact</h2>
            <p className='mb-6 text-sm'>(+62)81 652 4689</p>
            <p className='mb-6 text-sm'>SUPPORTMAIL@DEARLY.COM</p>
            <h2 className='mb-6 font-bold'>Address</h2>
            <p className='mb-6 text-sm'>23 VALLEY LANE, AUSTIN</p>
            <p className='mb-6 text-sm'>07.00 AM - 19.00 PM</p>
          </div>

          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full text-white text-left">

              <div className='w-full  text-white mr-80'>
                ________________________________________________________________________________________________________________________________________________________________________________________________
              </div>
              <p className="pt-2 pl-4 text-xs w-full ml-20">
                Copyright © 2022. Designed by aethonint.digital
              </p>
            </div>
            <div className="flex justify-between text-right  text-white" style={{ marginLeft: '850px' }}>
              <div className="flex justify-end ml-0 px-24">
                <p className="mr-8">Term</p>
                <p className="mr-8">Privacy</p>
                <p>Support</p>
              </div>
            </div>
          </div>

        </div>
      </footer>







    </div >
  );
};

export default Home;
