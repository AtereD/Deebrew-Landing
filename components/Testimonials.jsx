import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    message:
      "The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.",
    name: "Alice Johnson",
    profession: "Graphic Designer",
  },
  {
    message:
      "A hidden gem! The ambiance is cozy, and the menu offers a great variety. The chai latte is a must-try!",
    name: "Samantha Green",
    profession: "Marketing Specialist",
  },
  {
    message:
      "I love coming to this cafe. The pastries are always fresh, and the staff is incredibly friendly. It's my go-to spot for meetings.",
    name: "Michael Lee",
    profession: "Freelance Writer",
  },
];

const Testimonials = () => {
  return (
    <section className="h-full xl:h-[70vh] ">
      <div className="containers mx-auto h-full flex items-center">
        <Swiper navigation={true} modules={[Navigation]} className="h-[400px]">
          {testimonials.map((person, index) => {
            return (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="flex justify-center h-full xl:pt-14">
                  <div className="md:max-w-[60%] max-w-[80%] text-primary">
                    <IoMdQuote className="text-6xl text-primary mb-12 mx-auto " />
                    <p className="text-2xl font-secondaary text-center mb-8">
                      {person.message}
                    </p>
                    <div className="text-center">
                      <p className="text-xl font-bold mb-2">{person.name}</p>
                      <p className="text-secondary">{person.profession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
