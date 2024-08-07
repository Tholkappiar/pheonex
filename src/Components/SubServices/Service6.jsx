import Home from "../../assets/svgs/Home.svg";
import bookmark from "../../assets/svgs/bookmark.svg";
import person from "../../assets/svgs/person.svg";
import world from "../../assets/svgs/world.svg";
import message from "../../assets/svgs/messageArrow.svg";
import reward from "../../assets/svgs/reward.svg";
import service6Image from "../../assets/images/Service6-image.jpg";

const Service6 = () => {
    const mainFeatures = [
        { icon: Home, text: "Web Promotion" },
        { icon: bookmark, text: "Quality Content Marketing" },
        { icon: person, text: "Social Media Marketing" },
        { icon: world, text: "Build Trust and Authority" },
    ];

    const additionalFeatures = [
        { icon: message, text: "Fast Development" },
        { icon: reward, text: "Strategic Web Promotion" },
    ];

    const paragraphs = [
        "At Pheonex, we understand that having a beautifully designed website is just the first step in achieving online success. To truly stand out in the digital landscape, you need a strategic web promotion plan that drives traffic, engages visitors, and converts them into loyal customers. Our web promotion services are designed to do just that.",
        "Our SEO experts employ the latest techniques to improve your website's visibility on search engines like Google. By optimizing your site's content, structure, and performance, we help you rank higher for relevant keywords, attracting more organic traffic and potential customers.",
        "Social media platforms are powerful tools for reaching and engaging with your audience. Our team creates compelling social media campaigns that resonate with your target market, increasing brand awareness and driving traffic to your website. We manage your profiles, create engaging content, and monitor performance to ensure optimal results. PPC advertising is a cost-effective way to drive targeted traffic to your website. Our PPC specialists design and manage campaigns on platforms like Google Ads and social media networks, ensuring that your ads reach the right people at the right time. We continuously optimize your campaigns to maximize ROI and achieve your business goals. Quality content is at the heart of any successful web promotion strategy. Our content marketing services include creating informative, engaging, and shareable content that attracts and retains your audience. From blog posts and articles to videos and infographics, we craft content that showcases your expertise and builds trust with your audience.",
    ];

    // eslint-disable-next-line react/prop-types
    const FeatureItem = ({ icon, text }) => (
        <div className="flex items-center lg:justify-center gap-4 m-4">
            <img src={icon} alt={`${text} icon`} className="size-8" />
            <p className="font-Noto-Sans-JP">{text}</p>
        </div>
    );

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
                <div className="flex flex-col md:flex-row -mx-4 -mb-10">
                    <div className="md:w-1/2 mb-10 px-4">
                        <div className="rounded-md w-full flex flex-col items-center sticky top-20">
                            <div className="w-full md:w-3/4 rounded-md shadow-2xl">
                                {mainFeatures.map((feature, index) => (
                                    <FeatureItem key={index} {...feature} />
                                ))}
                            </div>
                            {additionalFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-3/4 rounded-md shadow-2xl bg-white mt-4"
                                >
                                    <FeatureItem {...feature} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src={service6Image}
                            />
                        </div>
                        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                            What we're Building
                        </h2>
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className={`leading-relaxed text-base ${
                                    index > 0 ? "mt-4" : ""
                                } ${index == 2 ? "mt-8" : ""}`}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service6;
