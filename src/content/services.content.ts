import rocketIcon from "@/assets/services/rocket.png";
import terminalIcon from "@/assets/services/terminal.png";
import joaquinIcon from "@/assets/services/joaquin.png";

import dahuaSeekLogo from "@/assets/services/colored-logos/dahua-seeklogo.png";
import digicomLogo from "@/assets/services/colored-logos/digicom.png";
import ethioTelLogo from "@/assets/services/colored-logos/ethio-tel.png";
import m2oneLogo from "@/assets/services/colored-logos/m2one.png";
import mtnLogo from "@/assets/services/colored-logos/mtn.png";
import orangeLogo from "@/assets/services/colored-logos/Orange.png";
import playstationLogo from "@/assets/services/colored-logos/playstation.png";
import telePortLogo from "@/assets/services/colored-logos/tele-port.png";
import teltonikaLogo from "@/assets/services/colored-logos/TELTONIKA-LOGO.png";

import dahuaSeekLogoBW from "@/assets/services/logos/dahua-seeklogo.png";
import digicomLogoBW from "@/assets/services/logos/digicom.png";
import ethioTelLogoBW from "@/assets/services/logos/ethio-tel.png";
import m2oneLogoBW from "@/assets/services/logos/m2one.png";
import mtnLogoBW from "@/assets/services/logos/mtn.png";
import orangeLogoBW from "@/assets/services/logos/Orange.png";
import playstationLogoBW from "@/assets/services/logos/playstation.png";
import telePortLogoBW from "@/assets/services/logos/tele-port.png";
import teltonikaLogoBW from "@/assets/services/logos/TELTONIKA-LOGO.png";

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
    { name: "Dahua", logo: dahuaSeekLogo, grayscaleLogo: dahuaSeekLogoBW },
    { name: "Digicom", logo: digicomLogo, grayscaleLogo: digicomLogoBW },
    { name: "Ethio Tel", logo: ethioTelLogo, grayscaleLogo: ethioTelLogoBW },
    { name: "M2One", logo: m2oneLogo, grayscaleLogo: m2oneLogoBW },
    { name: "MTN", logo: mtnLogo, grayscaleLogo: mtnLogoBW },
    { name: "Orange", logo: orangeLogo, grayscaleLogo: orangeLogoBW },
    {
      name: "Playstation",
      logo: playstationLogo,
      grayscaleLogo: playstationLogoBW,
    },
    { name: "Tele Port", logo: telePortLogo, grayscaleLogo: telePortLogoBW },
    { name: "Teltonika", logo: teltonikaLogo, grayscaleLogo: teltonikaLogoBW },
  ],
};

export type ServicesContent = typeof services_content;
