import sideimg from "../assets/imges/hero-img/hero-section01.png";
import banner from "../assets/imges/banner/01.jpg";
import { IoSearch } from "react-icons/io5";

const subTitle = "Online Tutorial";
const title = (
  <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold font-sans text-[#314ea2]">
    <span className="d-lg-block">Learn The</span> Skills You Need{" "}
    <span className="d-lg-block">To Succeed</span>
  </h2>
);
const desc =
  "Free online tutorial from the world’s Leading experts. Join 18+ million Learners today.";

const catagoryList = [
  { name: "C++", link: "#" },
  { name: "React. Js", link: "#" },
  { name: "JavaScript", link: "#" },
  { name: "Python", link: "#" },
];

const Hero = () => {
  return (
    <section className="relative">
      <div className=" w-[85%] sm:w-[90%] md:w-[90%] lg:w-[90%] xl:w-[85%] mx-auto transition-all duration-500 ease-in-out">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-40">
          {/* Left Section: Content */}
          <div className="banner-content">
            <h6 className="text-primary text-uppercase text-2xl tracking-widest font-sans font-bold py-3">
              {subTitle}
            </h6>
            <h1>{title}</h1>
            <p className="desc text-sm md:text-lg text-gray-700 leading-6 py-3">{desc}</p>
            <form action="/" className="flex items-center py-3">
              <div className="relative flex items-center py-3 w-[150px] sm:w-[270px] md:w-[350px] lg:flex-grow">
                <IoSearch className="absolute left-1 text-gray-500" />
                <input
                  type="text"
                  placeholder="Keywords of your course"
                  className="pl-9 p-2 text-sm md:p-5 focus:outline-none w-full shadow-xl"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-[10px] font-thin tracking-tighter px-2 py-[10px] md:px-4 md:py-5 md:text-[15px] text-white font-semibold tracking-wide"
              >
                Search Course
              </button>
            </form>
            <div className="mt-6 flex items-center">
              <p className="mr-2 text-lg">Most Popular: </p>
              <ul className="flex flex-wrap gap-4">
                {catagoryList.map((val, i) => (
                  <li key={i}>
                    <a
                      href={val.link}
                      className="text-third underline font-sans font-semibold"
                    >
                      {val.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section: Spinning Circles and Image */}
          <div className="relative">
            {/* Spinning Circles */}
            {/* <div className="absolute inset-0 z-10 w-[600px] h-[600px] overflow-hidden">
              <div className="absolute top-0 left-0 border-[2px] border-primary border-dotted w-full h-full rounded-full animate-spin-slow"></div>
              <div className="absolute top-[11%] left-[10%] border-[2px] border-secondary border-dotted w-[80%] h-[80%] rounded-full animate-spin-slow animation-delay-2000"></div>
              <div className="absolute top-[20%] left-[20%] border-[2px] border-slate-200 border-dotted w-[60%] h-[60%] rounded-full animate-spin-slow animation-delay-4000"></div>
            </div> */}

            {/* Side Image */}
            <img
              src={sideimg}
              alt="Banner Image"
              className="h-auto relative top-0 left-0 z-20"
            />
          </div>
        </div>
      </div>

      {/* Background Banner */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <img
          src={banner}
          alt="Background Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
