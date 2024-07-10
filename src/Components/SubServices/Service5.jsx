import gifts from "../../assets/svgs/gifts.svg";
import halfSpiral from "../../assets/images/halfSpiral.png";

const Service5 = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-12 lg:px-20 py-36 flex-col xl:flex-row">
        <div className="h-[700px] w-full xl:h-[520px] xl:w-[500px] text-white bg-purple-600 bg-serviceBanner1 bg-center bg-no-repeat bg-cover rounded-lg flex flex-col gap-8 items-center justify-center relative">
          <img
            src={halfSpiral}
            alt="halfSpiral"
            className="w-28 xl:w-48 h-auto absolute -top-2 -left-10 xl:-left-14 rotate-[130deg]"
          />
          <div className="flex flex-col xl:flex-row items-center gap-6 border-b-2 border-gray-300">
            <div className="size-24 rounded-full border-2 border-violet-700 bg-violet-600 flex justify-center items-center">
              <img src={gifts} alt="gifts" className="size-14" />
            </div>
            <div className="mb-8">
              <p className="text-6xl font-Noto-Sans-JP font-bold text-center xl:text-start">
                500 +
              </p>
              <p className="font-Noto-Sans-JP font-bold xl:w-4/5 mt-4 text-center xl:text-start">
                Business advices given over 30 years
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-6">
            <div className="size-24 rounded-full border-2 border-violet-600 bg-violet-600 flex justify-center items-center">
              <img src={gifts} alt="gifts" className="size-14" />
            </div>
            <div className="mb-8">
              <p className="text-6xl font-Noto-Sans-JP font-bold text-center xl:text-start">
                30 +
              </p>
              <p className="font-Noto-Sans-JP font-bold xl:w-4/5 mt-4 text-center xl:text-start">
                Business advices given over 30 years
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex-grow xl:w-1/2 xl:pl-24 flex flex-col md:items-start md:text-left items-center text-center mt-8">
          <p className="text-indigo-600 font-Noto-Sans-JP font-bold text-xl my-4">
            CONTENT MANAGEMENT
          </p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-Noto-Sans-JP font-bold text-gray-900">
            Streamline Your
            <br />
            Digital Content with us
          </h1>
          <p className="mt-3 leading-relaxed w-3/4 tracking-wide">
            At Pheonex, we offer comprehensive content management services that
            ensure your digital content is organized, up-to-date, and easily
            accessible. Our solutions are designed to help you manage your
            content effectively, allowing you to focus on what you do
            best—running your business.
          </p>
          <div className="mt-4">
            <div className="flex items-center my-4">
              <input
                checked
                readOnly
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 rounded accent-indigo-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-lg font-Noto-Sans-JP text-gray-900"
              >
                Tailored Solutions
              </label>
            </div>
            <div className="flex items-center my-4">
              <input
                checked
                readOnly
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 rounded accent-indigo-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-lg font-Noto-Sans-JP text-gray-900"
              >
                Focus on Quality
              </label>
            </div>
            <div className="flex items-center my-4">
              <input
                checked
                readOnly
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="w-5 h-5 rounded accent-indigo-600"
              />
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-lg font-Noto-Sans-JP text-gray-900"
              >
                Comprehensive Support
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service5;
