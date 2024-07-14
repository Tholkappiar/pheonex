const serviceInfo = {
    title: "Our Web and Interactive Design",
    subtitle: "Crafting Engaging Digital Experiences",
    description:
        "Transform your website into a powerful tool for engagement and growth with our web and interactive design services. Contact Pheonex today to discuss your project and see how we can bring your vision to life.",
};

const serviceFeatures = [
    {
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
            >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
        ),
        title: "Custom Web Design",
        description:
            "Our custom web design services are all about creating unique, responsive, and user-friendly websites that stand out in a crowded digital landscape. We work closely with you to understand your vision and translate it into a website that not only looks great but also delivers an exceptional user experience.",
    },
    {
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
            >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
        ),
        title: "Interactive Features",
        description:
            "Engagement is key in the digital world, and our interactive features are designed to keep your audience hooked. From interactive sliders and animated graphics to dynamic content and user interfaces, we incorporate elements that make your website more engaging and enjoyable for visitors.",
    },
    {
        icon: (
            <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
            >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
        ),
        title: "Responsive Design",
        description:
            "With the increasing use of mobile devices, having a responsive website is essential. Our responsive design services ensure that your website looks and performs flawlessly on all devices, from desktops and tablets to smartphones. We create adaptable layouts that provide a consistent and optimal viewing experience across various screen sizes.",
    },
];

const Service2 = () => {
    return (
        <section className="text-gray-600 body-font mb-14">
            <div className="container px-5 py-2 mx-auto">
                <div className="flex flex-col text-center w-full">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                        {serviceInfo.subtitle}
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        {serviceInfo.title}
                    </h1>
                    <p className="w-2/3 mx-auto my-4">
                        {serviceInfo.description}
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 mt-10">
                    {serviceFeatures.map((feature, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        {feature.icon}
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">
                                        {feature.title}
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service2;
