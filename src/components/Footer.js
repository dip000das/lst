import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-center p-5 pt-10 pb-16 space-x-10 text-white bg-black sm:space-x-40'>
      <div className=''>
        <h2 className='pb-1 text-xl font-bold'>Foodify</h2>
        <h3 className='py-1'>© 2023 FoodTech Pvt. Ltd</h3>
      </div>
      <div>
        <h3 className='pb-1 text-xl font-bold'>Company</h3>
        <ul>
          <li className='py-1'>About</li>
          <li className='py-1'>Careers</li>
          <li className='py-1'>Team</li>
        </ul>
      </div>
      <div className='hidden lg:block'>
        <h3 className='pb-1 text-xl font-bold'>Legal</h3>
        <ul>
          <li className='py-1'>Terms & Conditions</li>
          <li className='py-1'>Cookie Policy</li>
          <li className='py-1'>Privacy Policy</li>
        </ul>
      </div>
      <div className='hidden md:block'>
        <h3 className='pb-1 text-xl font-bold'>Contact Us</h3>
        <ul>
          <li className='py-1'>Help & Support</li>
          <li className='py-1'>Partner with us</li>
          <li className='py-1'>Ride with us</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
