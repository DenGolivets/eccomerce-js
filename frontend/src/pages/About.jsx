import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt="about_img"
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nisi
            laborum officiis exercitationem ullam quos consectetur nulla
            adipisci fuga et. Temporibus suscipit velit veritatis quisquam.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nisi
            laborum officiis exercitationem ullam quos consectetur nulla
            adipisci fuga et. Temporibus suscipit velit veritatis quisquam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit cumque, dolorum dicta mollitia tempora animi quis fuga
            consectetur. Ullam, sequi! Beatae eos dolore dolorem culpa. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
            cumque, dolorum dicta mollitia tempora animi quis fuga consectetur.
            Ullam, sequi! Beatae eos dolore dolorem culpa.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            voluptatibus temporibus quasi a sequi suscipit, laudantium enim
            dolore amet quibusdam eligendi dolorem eaque omnis! Aliquam!
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"Why"} text2={"Choose Us"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ad rem qui beatae excepturi vitae provident dolorum tempora, libero
            repellat?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ad rem qui beatae excepturi vitae provident dolorum tempora, libero
            repellat?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ad rem qui beatae excepturi vitae provident dolorum tempora, libero
            repellat?
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
