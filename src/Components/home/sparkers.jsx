import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ali from "../../assets/Cards/sparkers/ali.jpg";
import Ahmad from "../../assets/Cards/sparkers/sparker2.jpg";
import farrukh from "../../assets/Cards/sparkers/farrukh.jpg";
import zaman from "../../assets/Cards/sparkers/sparker1.jpg";


const teamMembers = [
  {
    name: 'Ali Hassan',
    position: 'Web Developer',
    description: 'I sculpt the digital universe, creating online wonders that captivate and inspire.',
    img: ali,
  },
  {
    name: 'Farrukh Arshad',
    position: 'Senior 3D Artist',
    description: 'I mold virtual realms, bringing imagination to life in the third dimension.',
    img: farrukh,
  },
  {
    name: 'Ali Zaman',
    position: 'Animation Specialist',
    description: 'I infuse motion into dreams,bringing characters and stories to life with every frame.',
    img: zaman,
  },
  {
    name: 'Ahmad Nasir',
    position: 'Texturing Artist',
    description: 'I breathe life into the canvas of 3D worlds,adding depth and beauty with every stroke.',
    img: Ahmad,
  },
];

const TeamMemberCard = ({ name, position, description, img }) => (
  <div className="relative z-10 bg-gray-200 rounded-tr-[90px] rounded-bl-[90px] overflow-hidden shadow-lg m-4 md:h-96 xl:h-[24rem] 2xl:h-[48rem] border border-rounded">
    <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover" />
    <div
      className="relative p-6 h-1/2 mt-48 flex flex-col justify-end 2xl:mt-[32rem] 2xl:h-1/3"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)', // semi-transparent white
      }}
    >
      <h3 className="text-2xl xl:text-xl 2xl:text-3xl font-bold text-gray-800 ">{name}</h3>
      <h4 className="text-lg xl:text-md 2xl:text-xl font-bold text-teal-600 mb-1">{position}</h4>
      <p className="text-base xl:text-sm 2xl:text-lg text-gray-800 leading-relaxed">{description}</p>
    </div>
  </div>
);

const MeetTheSparkers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full h-auto md:h-auto xl:h-auto 2xl:h-full bg-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-[#4a4a4a] text-center mb-4">Meet The Sparkers</h1>
      <p className="text-lg text-[#359dad] text-center mb-12 ">
        At BlenSpark, we specialize in cutting-edge 3D and IT solutions that transform your ideas into immersive realities. Our expert team is dedicated to designing, developing, and delivering bespoke services that cater to a diverse range of industries. Whether it's crafting stunning 3D visualizations, developing robust software, or providing comprehensive IT support.
      </p>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8 h-3/4 ">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} name={member.name} position={member.position} description={member.description} img={member.img} />
        ))}
      </div>
      <div className="md:hidden w-full">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className='grid gap-10'>
              <TeamMemberCard name={member.name} position={member.position} description={member.description} img={member.img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetTheSparkers;
