import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IM from "../../assets/Cards/Projec.png"

const teamMembers = [
  {
    name: 'Ali Hassan',
    position: 'Web Developer',
    description: 'I sculpt the digital universe, creating online wonders that captivate and inspire.',
    img: IM,
  },
  {
    name: 'Farrukh Arshad',
    position: 'Senior 3D Artist',
    description: 'I mold virtual realms, bringing imagination to life in the third dimension.',
    img: IM,
  },
  {
    name: 'Ali Zaman',
    position: 'Animation Specialist',
    description: 'I infuse motion into dreams, bringing characters and stories to life with every frame.',
    img: IM,
  },
  {
    name: 'Ahmad Nasir',
    position: 'Senior Texturing Artist',
    description: 'I breathe life into the canvas of 3D worlds, adding depth and beauty with every stroke.',
    img: IM,
  },
];

const TeamMemberCard = ({ name, position, description, img }) => (
  <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-lg m-4 h-96 border border-">
    <img src={img} alt={name} className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative p-6 h-full flex flex-col justify-end bg-gradient-to-t from-gray-900 via-gray-500 to-white opacity-30">
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      <h4 className="text-md font-semibold text-yellow-400 mb-4">{position}</h4>
      <p className="text-sm text-white">{description}</p>
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
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-[#4a4a4a] text-center mb-4">Meet The Sparkers</h1>
      <p className="text-lg text-[#359dad] text-center mb-12 ">
        At BlenSpark, we specialize in cutting-edge 3D and IT solutions that transform your ideas into immersive realities. Our expert team is dedicated to designing, developing, and delivering bespoke services that cater to a diverse range of industries. Whether it's crafting stunning 3D visualizations, developing robust software, or providing comprehensive IT support.
      </p>
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} name={member.name} position={member.position} description={member.description} img={member.img} />
        ))}
      </div>
      <div className="md:hidden w-full">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index}>
              <TeamMemberCard name={member.name} position={member.position} description={member.description} img={member.img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MeetTheSparkers;
