const Service1 = () => {
    const features = [
        "User Manuals",
        "API Documentation",
        "System Documentation",
        "Process Documentation",
        "Process Documentation",
        "Installation Guides",
    ];

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                        Technical Documentation
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                        At Pheonex Solutions, we understand the critical role
                        that precise and comprehensive technical documentation
                        plays in the success of any software project. Our team
                        of experienced technical writers is dedicated to
                        creating documentation that is not only accurate but
                        also user-friendly and easy to understand.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {features.map((feature, index) => (
                        <div key={index} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font font-medium">
                                    {feature}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service1;
