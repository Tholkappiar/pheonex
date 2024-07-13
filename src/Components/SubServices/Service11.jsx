import serviceSection01 from "../../assets/images/serviceSection01.webp";
import serviceSection02 from "../../assets/images/serviceSection02.webp";
import serviceSection03 from "../../assets/images/serviceSection03.webp";
import serviceSection04 from "../../assets/images/serviceSection04.webp";

const services = [
    {
        image: serviceSection01,
        subtitle: "RESPONSIVE DESIGN",
        title: "Fluid Layouts",
        description:
            "Create seamless experiences across all devices with our responsive design solutions. Ensure your website looks great on desktops, tablets, and smartphones, providing an optimal viewing experience for all users.",
    },
    {
        image: serviceSection02,
        subtitle: "ANIMATION",
        title: "Dynamic Effects",
        description:
            "Enhance user engagement with smooth animations and transitions. Bring your website to life and guide users through your content effortlessly, creating memorable interactions that leave a lasting impression.",
    },
    {
        image: serviceSection03,
        subtitle: "USER EXPERIENCE",
        title: "Intuitive Interfaces",
        description:
            "Craft user-centric interfaces that prioritize ease of use and accessibility. Ensure visitors can navigate and interact with your site effortlessly, leading to increased user satisfaction and conversion rates.",
    },
    {
        image: serviceSection04,
        subtitle: "PERFORMANCE",
        title: "Lightning Fast",
        description:
            "Optimize your website's speed and performance. Ensure quick load times and smooth interactions that keep users engaged and improve SEO rankings, providing a fast and responsive experience for your visitors.",
    },
];

const Service11 = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                            Elevating Web Interactivity
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 pt-4">
                        We specialize in creating dynamic, engaging web
                        experiences that captivate your audience. Our team
                        combines cutting-edge technology with innovative design
                        to deliver interactive websites that stand out in
                        today's digital landscape.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {services.map((service, index) => (
                        <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                            <div className="bg-gray-100 p-6 rounded-lg h-full flex flex-col">
                                <img
                                    className="h-40 rounded w-full object-cover object-center mb-6"
                                    src={service.image}
                                    alt={service.title}
                                />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                                    {service.subtitle}
                                </h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                                    {service.title}
                                </h2>
                                <p className="leading-relaxed text-base">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service11;
