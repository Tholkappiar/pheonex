import websiteDev from "../../assets/svgs/website.svg";
import graphicDesign from "../../assets/svgs/graphicDesign.svg";
import appDev from "../../assets/svgs/appDev.svg";
import digitalMarketing from "../../assets/svgs/digitalMarketing.svg";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Tailored web solutions for responsive, user-friendly websites. From e-commerce to custom applications, ensuring robust scalability.",
      image: websiteDev,
    },
    {
      title: "App Development",
      description:
        "Innovative mobile apps for Android and iOS to boost user engagement with seamless experiences.",
      image: appDev,
    },
    {
      title: "Graphic Design",
      description:
        "Visually appealing designs that elevate your brand. From identities to marketing materials, stand out in the digital landscape.",
      image: graphicDesign,
    },
    {
      title: "Digital Marketing",
      description:
        "Strategies that drive online growth and visibility. From SEO and PPC to social media management, reach your audience effectively.",
      image: digitalMarketing,
    },
  ];

  return (
    <div className="text-gray-600">
      <p className="sm:text-4xl text-3xl font-bold title-font mb-2 font-Noto-Sans-JP text-center text-gray-900">
        Services we DO
      </p>
      <div className="flex flex-col gap-20 justify-center items-center flex-wrap sm:flex-row my-14 text-center tracking-wider p-4">
        {services.map((service) => (
          <div
            key={service.title}
            className="size-64 md:size-72 rounded-lg shadow-md flex flex-col items-center justify-center group hover:shadow-xl duration-300"
          >
            <img src={service.image} alt="" className="size-10" />
            <p className="my-2 font-semibold uppercase group-hover:text-indigo-600">
              {service.title}
            </p>
            <p className="my-4 text-sm p-3">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
