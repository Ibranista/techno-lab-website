import rocketIcon from "@/assets/services/rocket.png";
import terminalIcon from "@/assets/services/terminal.png";
import joaquinIcon from "@/assets/services/joaquin.png";
import logoIpsum from "@/assets/services/logoipsum.svg";

export const services_content = {
  title: "Services we provide",
  desc: "Smart solutions. Scalable results. Explore how our core services help you thrive in a connected world.",
  btn_name: "Request Service",
  icon: "@/assets/services/arrow-right.svg",
  services_list: [
    {
      image: rocketIcon,
      title: "Digital VAS Services",
      desc: "We offer comprehensive portfolio of Value Added Services product line",
    },
    {
      image: terminalIcon,
      title: "Software Development",
      desc: "Hassle-free development of Software that will help your business grow.",
    },
    {
      image: joaquinIcon,
      title: "Digital Marketing",
      desc: "Outsource your social media presence to our team and grow your channels organically.",
    },
  ],
  trusted_by: "TRUSTED BY",
  trusting_companies: [{ name: "Logoipsum", logo: logoIpsum.src }],
};

export type ServicesContent = typeof services_content;
