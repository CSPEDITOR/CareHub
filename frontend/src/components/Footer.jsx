import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>{/* left section  */}
            <img src={assets.logo} alt="" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio odio eius dolorum obcaecati ipsam non accusantium quisquam praesentium, sit, exercitationem quaerat laborum necessitatibus molestiae ut voluptatibus maiores perferendis id placeat?</p>
        </div>
        <div>{/* center section  */}
            <p className=" text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privecy Policy</li>
            </ul>
        </div>
        <div>{/* right section  */}
            <p  className=" text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>+91 64373723</li>
                <li>chandrashekhara@gmail.com</li>
            </ul>
        </div>
      </div>
        <div>
            {/* -----Copy right text------- */}
            <p className="py-5 text-sm text-center">Copyright 2025@ Prescripto - All Right Reveserd</p>
        </div>
    </div>
  );
};

export default Footer;
