import pen from "../../assets/svgs/pen.svg";
import layer from "../../assets/svgs/layer.svg";
import bricks from "../../assets/svgs/bricks.svg";
import stack from "../../assets/svgs/stack.svg";
import cube from "../../assets/svgs/cube.svg";

const WhatWeDo = () => {
  const cards = [
    {
      title: "Web Development",
      image: pen,
      description:
        "Creating responsive and engaging websites that meet your business needs.",
    },
    {
      title: "App Development",
      image: layer,
      description:
        "Building user-friendly mobile applications for both Android and iOS platforms.",
    },
    {
      title: "Graphic Design",
      image: bricks,
      description:
        "Designing visually appealing graphics and branding materials to make your brand stand out.",
    },
    {
      title: "Digital Marketing",
      image: stack,
      description:
        "Implementing effective strategies to enhance your online presence and engagement.",
    },
    {
      title: "Training & Internships",
      image: cube,
      description:
        "Providing comprehensive training programs and internships to help individuals develop their skills.",
    },
  ];
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container p-4 sm:p-0 sm:w-3/4 mx-auto justify-center items-center my-8 md:my-32">
      <div className="flex items-center md:justify-center ">
        <div className="sm:h-[300px] sm:w-full sm:min-w-[250px] flex flex-col justify-center items-center rounded-lg sm:p-4">
          <div className="text-gray-500">
            <p className="text-2xl sm:text-3xl font-medium font-Noto-Sans-JP ">
              WHAT WE DO{" "}
              <span className="font-semibold underline decoration-dashed">
                as
              </span>
            </p>
            <p className="font-bold text-2xl sm:text-5xl font-Noto-Sans-JP text-gray-600 tracking-wider">
              EXPERTS
            </p>
            <p className="text-gray-500 pt-2 italic">
              We build digital solutions.
            </p>
          </div>
        </div>
      </div>
      {cards.map((card) => (
        <div key={card.title} className="flex items-center justify-center">
          <div className="min-h-[300px] w-full min-w-[250px] bg-gray-100 flex flex-col justify-center items-center rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-lg transition-all duration-500 ease-in-out">
            <img src={card.image} alt="" className="size-16 mt-4" />
            <p className="text-lg uppercase font-Noto-Sans-JP">{card.title}</p>
            <p className="text-center text-xs text-gray-600 mt-4 font-Noto-Sans-JP tracking-wider px-4">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeDo;
