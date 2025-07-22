import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-900">
        ABOUT <span className="text-gray-700">US</span>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img className="w-full md:max-w-[360px] " src={assets.about_image} alt="" />
        <div className="flex flex-col gap-5 md:w-2/4 text-sm text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad porro tenetur obcaecati eaque sapiente aliquam officiis ea, accusantium doloribus provident dolorem eligendi, reprehenderit recusandae pariatur? Nesciunt at maiores facilis quidem!</p>
          <p>provident dolorem eligendi, reprehenderit recusandae pariatur? Nesciunt at maiores facilis quidem!</p>
          <b>Our Vision</b>
          <p>Ad porro tenetur obcaecati eaque sapiente aliquam officiis ea, accusantium doloribus provident dolorem eligendi, reprehenderit</p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>WHY <span className="text-gray-700 font-semibold">CHOOSE</span></p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className=" hover-bg-primary border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-5 text-[-15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Effeciency:</b>
          <p>Streamlined appoinment scheduling that files into your  busy lifestyle.</p>
        </div>
        <div className=" hover-bg-primary border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-5 text-[-15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Accesss to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className=" hover-bg-primary border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-5 text-[-15px] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b> Personalization:</b>
          <p>Toilored recommendations and remiders to help you stay on top of your health</p>
        </div>
      </div>

    </div>
  );
};

export default About;
