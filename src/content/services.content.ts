import rocketIcon from "@/assets/services/rocket.png";
import terminalIcon from "@/assets/services/terminal.png";
import joaquinIcon from "@/assets/services/joaquin.png";
import logoIpsum from "@/assets/services/logoipsum.svg";

import dahuaSeekLogo from "@/assets/services/logos/dahua-seeklogo.png";
import digicomLogo from "@/assets/services/logos/digicom.png";
import ethioTelLogo from "@/assets/services/logos/ethio-tel.png";
import m2oneLogo from "@/assets/services/logos/m2one.png";
import mtnLogo from "@/assets/services/logos/mtn.png";
import orangeLogo from "@/assets/services/logos/Orange.png";
import playstationLogo from "@/assets/services/logos/playstation.png";
import telePortLogo from "@/assets/services/logos/tele-port.png";
import teltonikaLogo from "@/assets/services/logos/TELTONIKA-LOGO.png";

export const services_content = {
  title: "Custom Software Development",
  desc: "Tailored websites, ERP systems, and cloud-native solutions for seamless operations.",
  btn_name: "Request Service",
  icon: "@/assets/services/arrow-right.svg",
  services_list: [
    {
      image: rocketIcon,
      title: "Value Added Services (VAS)",
      desc: "Launch revenue-driving digital products – from game apps to brand loyalty platforms.",
    },
    {
      image: terminalIcon,
      title: "Telecom Portal Development",
      desc: "Build intuitive web/mobile portals that captivate users and simplify content distribution.",
    },
    {
      image: joaquinIcon,
      title: "Enterprise Digital Solutions",
      desc: "Apps, and cloud systems engineered for growth.",
    },
  ],
  trusted_by: "TRUSTED BY",
  trusting_companies: [
    { name: "Dahua", logo: dahuaSeekLogo },
    { name: "Digicom", logo: digicomLogo },
    { name: "Ethio Tel", logo: ethioTelLogo },
    { name: "M2One", logo: m2oneLogo },
    { name: "MTN", logo: mtnLogo },
    { name: "Orange", logo: orangeLogo },
    { name: "Playstation", logo: playstationLogo },
    { name: "Tele Port", logo: telePortLogo },
    { name: "Teltonika", logo: teltonikaLogo },
  ],
};

export type ServicesContent = typeof services_content;
