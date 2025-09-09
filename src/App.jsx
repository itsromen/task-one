import logo from "./assets/firefox.png";
import facebook from "./assets/facebook-app-symbol.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin-logo.png";
import man_chatting from "./assets/young-people-holding-smartphones.png";
import backgroundServices from "./assets/orangebg.jpg";
import clinic from "./assets/clinic-history-orange.png";
import clinic2 from "./assets/clinic.png";
import clinic3 from "./assets/clinic1.png";
import clinic4 from "./assets/clinic2.png";

function Navbar() {
  return (
    <nav className="py-4 px-6 flex justify-between items-center">
      <a href="#">
        <img src={logo} width="50px" className="invert"></img>
      </a>
      <ul className="flex gap-4">
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function HeroText() {
  return (
    <div className="mix-blend-screen leading-tight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="pl-24">I AM</span>
      <span className="text-[12rem] font-bold block text-white/90">TURA</span>
      <span className="pl-72 block">A JUNIOR</span>
      <span className="pl-72">WEB DESIGNER</span>
    </div>
  );
}

function Socials() {
  return (
    <ul className="flex flex-col gap-2 px-8 absolute bottom-4 invert">
      <li>
        <a href="#">
          <img src={facebook} alt="Facebook" width="24px" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} alt="Twitter" width="24px" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={linkedin} alt="LinkedIn" width="24px" />
        </a>
      </li>
    </ul>
  );
}

function Header() {
  return (
    <header className="relative text-white/80  h-screen snap-start bg-[radial-gradient(circle_at_35%_25%,#505050_0%,#505050_5%,#141414_60%,black_100%)]">
      <Navbar />
      <HeroText />
      <Socials />
    </header>
  );
}

function ListProcess(props) {
  return (
    <div className="relative flex flex-col gap-5 mt-5">
      {props.process.map((step, index) => {
        return (
          <div className="step flex gap-5 items-center">
            <span className="bg-[#2d70a8] font-bold text-white/90 text-[1.5rem] rounded-full w-[50px] h-[50px] flex items-center justify-center z-1">
              {index + 1}
            </span>
            <div className="leading-6">
              <h1 className="font-bold text-[1.2rem]">{step.title}</h1>
              <p className="text-[0.9rem] text-[#9199a1]/80 font-medium">
                {step.info}
              </p>
            </div>
          </div>
        );
      })}
      <span className="absolute left-[23px] top-[30px] w-0 h-[calc(100%-30px)] border-l-2 border-dotted border-gray-500"></span>
    </div>
  );
}

function SolutionsInfo() {
  const process = [
    { title: "Contact us", info: "Contact us to boost your brand visibility" },
    { title: "Consult", info: "Always available to answer your questions" },
    { title: "Place order", info: "Buy our package today to proceed" },
    { title: "Payment", info: "We receive payments in all types of banking" },
  ];

  return (
    <div className="w-[35%]">
      <p className="text-[2.2rem] font-bold">
        Simple <span className="text-[#2d70a8]">Solutions!</span>
      </p>
      <p className="text-[#798794] text-[1.2rem] font-medium mr-38">
        We understand that no two businesses are alike. thats why we take time
        to understand
      </p>
      <ListProcess process={process} />
      <div className="flex gap-8 mt-4">
        <button className="text-white bg-[#2d70a8] px-10 py-1 border-[#2d70a8] border-4 rounded-full">
          Get Started
        </button>
        <button className="text-[#2d70a8] px-10 py-1 border-[#2d70a8] border-4 rounded-full">
          Read More
        </button>
      </div>
    </div>
  );
}

function Solutions() {
  return (
    <section className="h-screen snap-start bg-[#faeee1] flex items-center justify-center">
      <img src={man_chatting} alt="random dude" width="40%" />
      <SolutionsInfo />
    </section>
  );
}

function ListServices(props) {
  return (
    <div className="cardsContainer flex w-[80%] gap-16 justify-center relative bottom-32">
      {props.servicesList.map((service) => {
        return (
          <div className="card flex flex-col gap-4 w-[30ch] py-8 px-12 shadow-xl bg-white/95 rounded-4xl">
            <img
              src={service.logo}
              alt={`${service.title} Image`}
              width="48px;"
            />
            <h3 className="font-medium">{service.title}</h3>
            <p className="text-[#adaaaa]">{service.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function Services() {
  const servicesList = [
    {
      logo: clinic,
      title: "Neurmlog Clinic",
      description:
        "In this program, you are trained to improve your strength through many",
    },
    {
      logo: clinic2,
      title: "Pathology Clinic",
      description:
        "It is a long established fact that a reader will be distracted by",
    },
    {
      logo: clinic3,
      title: "Patliartic Clinic",
      description:
        "When looking at its layout. The point of using Lorem Ipsum is that it.",
    },
    {
      logo: clinic4,
      title: "Health Clinic",
      description:
        "This program is designec for those who exercises only for Their weight.",
    },
  ];

  return (
    <section className="h-screen snap-start flex flex-col justify-center items-center">
      <div
        className={`flex w-[90%] h-[50%] rounded-4xl px-24 mt-16`}
        style={{ backgroundImage: `url(${backgroundServices})` }}
      >
        <div className="flex items-center mb-40 gap-8">
          <h1 className="text-white text-[2.5rem] font-bold w-[25%]">
            Services For Your Health
          </h1>
          <p className="mr-30 ml-4 w-[60ch] text-[#f5f5f5]">
            We provide you with the following services, following the
            information pick your best option.
          </p>
          <button className="bg-white font-medium py-4 rounded-lg w-[30%] text-[#808080]">
            Book an Appointment
          </button>
        </div>
      </div>
      <ListServices servicesList={servicesList} />
    </section>
  );
}

export default function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <Header />
      <Solutions />
      <Services />
    </div>
  );
}
